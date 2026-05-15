"use client";

import { useEffect } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "reservation",
  "services",
  "team",
  "contact",
];

function smoothScrollTo(targetY, duration, onComplete) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else if (onComplete) {
      onComplete();
    }
  }

  requestAnimationFrame(step);
}

export default function ClientScripts() {
  useEffect(() => {
    let wowInstance = null;
    let ticking = false;
    let failsafeTimer = null;

    const getNavbar = () => document.querySelector(".navbar");
    const getNavbarHeight = () => getNavbar()?.offsetHeight || 0;

    const getSpinner = () => document.getElementById("spinner");

    const showSpinner = () => {
      getSpinner()?.classList.add("show");
    };

    const hideSpinner = () => {
      getSpinner()?.classList.remove("show");
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + getNavbarHeight() + 80;
      let activeId = "home";

      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          activeId = id;
        }
      });

      document
        .querySelectorAll('.navbar-nav .nav-link[href^="#"]')
        .forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${activeId}`
          );
        });
    };

    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const navbar = getNavbar();
      const backToTop = document.querySelector(".back-to-top");

      if (navbar) {
        navbar.classList.toggle("navbar-scrolled", scrollTop > 40);
      }

      if (backToTop) {
        backToTop.classList.toggle("show", scrollTop > 100);
      }

      updateActiveSection();
    };

    const requestScrollUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
      }
    };

    const getSectionElement = (hash) => {
      if (!hash || hash === "#") return null;
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return null;
      return document.getElementById(id);
    };

    const scrollToHash = (hash, duration = 180) => {
      const target = getSectionElement(hash);
      if (!target) return;

      const top = Math.max(
        target.getBoundingClientRect().top +
          window.scrollY -
          (getNavbarHeight() + 10),
        0
      );

      smoothScrollTo(top, duration, () => {
        updateScrollState();
        wowInstance?.scrollHandler?.();
      });

      const navbarCollapse = document.getElementById("navbarCollapse");
      if (navbarCollapse && window.bootstrap?.Collapse) {
        window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse, {
          toggle: false,
        }).hide();
      }
    };

    const onNavClick = (event) => {
      const link = event.currentTarget;
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return;

      event.preventDefault();

      if (href === "#" || href === "#!") {
        smoothScrollTo(0, 160, updateScrollState);
        return;
      }

      const target = getSectionElement(href);
      if (!target) return;

      scrollToHash(href, 180);
    };

    const onBackToTop = (event) => {
      event.preventDefault();
      smoothScrollTo(0, 160, updateScrollState);
    };

    const navSelectors =
      'a[href^="#"]:not([href="#"]):not([href="#!"]):not(.back-to-top)';

    document.querySelectorAll(navSelectors).forEach((el) => {
      el.addEventListener("click", onNavClick);
    });

    const backToTop = document.querySelector(".back-to-top");
    backToTop?.addEventListener("click", onBackToTop);

    window.addEventListener("scroll", requestScrollUpdate, { passive: true });
    window.addEventListener("resize", requestScrollUpdate);

    const triggerWowScroll = () => {
      if (!wowInstance?.scrollHandler) return;
      wowInstance.scrollHandler();
      requestAnimationFrame(() => wowInstance.scrollHandler());
    };

    const enableWowFallback = () => {
      document.documentElement.classList.add("wow-fallback");
      document.querySelectorAll(".wow").forEach((el) => {
        el.style.visibility = "visible";
      });
    };

    const initWow = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        enableWowFallback();
        return;
      }

      if (typeof window.WOW !== "function") {
        enableWowFallback();
        return;
      }

      try {
        document.documentElement.classList.add("wow-enabled");

        wowInstance = new window.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 80,
          mobile: true,
          live: true,
          resetAnimation: false,
        });

        wowInstance.init();

        if (typeof wowInstance.sync === "function") {
          wowInstance.sync();
        }

        triggerWowScroll();

        failsafeTimer = window.setTimeout(() => {
          document.querySelectorAll(".wow").forEach((el) => {
            if (getComputedStyle(el).visibility === "hidden") {
              el.style.visibility = "visible";
              el.classList.add("animated");
            }
          });
        }, 6000);
      } catch {
        enableWowFallback();
      }
    };

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadEnhancements = async () => {
      try {
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        await loadScript("/lib/wow/wow.min.js");
        initWow();
      } catch {
        enableWowFallback();
      }
    };

    showSpinner();

    const onLoad = () => {
      hideSpinner();
      requestScrollUpdate();
      triggerWowScroll();
    };

    loadEnhancements();

    const spinnerEarly = window.setTimeout(hideSpinner, 400);
    const spinnerFallback = window.setTimeout(hideSpinner, 2500);

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    requestScrollUpdate();

    return () => {
      window.clearTimeout(spinnerEarly);
      window.clearTimeout(spinnerFallback);
      if (failsafeTimer) window.clearTimeout(failsafeTimer);
      window.removeEventListener("scroll", requestScrollUpdate);
      window.removeEventListener("resize", requestScrollUpdate);
      window.removeEventListener("load", onLoad);
      document.querySelectorAll(navSelectors).forEach((el) => {
        el.removeEventListener("click", onNavClick);
      });
      backToTop?.removeEventListener("click", onBackToTop);
      if (wowInstance?.stop) {
        wowInstance.stop();
      }
    };
  }, []);

  return null;
}
