"use client";

import { useState } from "react";
import { collectFormData, validateRequired } from "@/lib/forms";
import {
  isContactEmailConfigured,
  openMailtoFallback,
  sendContactEmail,
} from "@/lib/contact-send";
import FormFeedback from "./FormFeedback";

const SETUP_MESSAGE =
  "L'envoi automatique n'est pas encore activé. Ajoutez vos clés EmailJS dans .env.local (voir config/emailjs-template.html), ou une clé Web3Forms gratuite (web3forms.com → entrer dentistebounab@gmail.com). Redémarrez npm run dev.";

export default function EmailForm({
  children,
  className = "email-form",
  requiredFields = ["Nom", "Email", "Message"],
  submitLabel = "Envoyer par email",
  successMessage =
    "Votre message a bien été envoyé. Le cabinet vous répondra dans les plus brefs délais.",
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastFormData, setLastFormData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setLastFormData(null);

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = collectFormData(form);
    const missing = validateRequired(data, requiredFields);

    if (missing.length > 0) {
      setStatus("error");
      setErrorMessage(
        `Veuillez remplir les champs obligatoires : ${missing.join(", ")}.`
      );
      return;
    }

    if (!isContactEmailConfigured()) {
      setStatus("error");
      setErrorMessage(SETUP_MESSAGE);
      setLastFormData(data);
      return;
    }

    setStatus("loading");

    try {
      await sendContactEmail(data);
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact email error:", err);

      if (err?.message === "NOT_CONFIGURED") {
        setStatus("error");
        setErrorMessage(SETUP_MESSAGE);
        setLastFormData(data);
        return;
      }

      setStatus("error");
      setErrorMessage(
        err?.text ||
          err?.message ||
          "L'envoi a échoué. Vérifiez vos clés EmailJS/Web3Forms ou contactez le cabinet au 0555 91 70 61."
      );
      setLastFormData(data);
    }
  };

  const isLoading = status === "loading";

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children}
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary w-100 py-3"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? "Envoi en cours..." : submitLabel}
        </button>
      </div>
      {lastFormData && status === "error" && (
        <div className="col-12">
          <button
            type="button"
            className="btn btn-outline-primary w-100 py-2 mt-2"
            onClick={() => openMailtoFallback(lastFormData)}
          >
            Ouvrir dans ma messagerie (Gmail, Outlook…)
          </button>
        </div>
      )}
      <div className="col-12">
        <FormFeedback
          status={status}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </div>
    </form>
  );
}
