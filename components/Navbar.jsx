import Link from "next/link";
import { BRAND_NAME, LOGO_PATH } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm sticky-top px-3 px-lg-4 py-3 py-lg-0">
      <Link href="#home" className="navbar-brand p-0">
        <p className="m-0 text-primary brand-title">
          <img
            className="brand-icon"
            src={LOGO_PATH}
            width={95}
            height={95}
            alt=""
            aria-hidden="true"
          />
          {BRAND_NAME}
        </p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Basculer la navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link href="#home" className="nav-item nav-link active">
            Accueil
          </Link>
          <Link href="#about" className="nav-item nav-link">
            À Propos
          </Link>
          <Link href="#reservation" className="nav-item nav-link">
            Rendez-vous
          </Link>
          <Link href="#services" className="nav-item nav-link">
            Services
          </Link>
          <Link href="#team" className="nav-item nav-link">
            Notre Dentiste
          </Link>
          <Link href="#contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <Link href="#reservation" className="btn btn-primary py-2 px-4 ms-3">
          Prendre Rendez-vous
        </Link>
      </div>
    </nav>
  );
}
