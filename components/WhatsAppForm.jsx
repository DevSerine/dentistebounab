"use client";

import { useState } from "react";
import { WHATSAPP_GREETING, whatsAppUrl } from "@/lib/constants";
import {
  buildWhatsAppMessage,
  collectFormData,
  validateRequired,
} from "@/lib/forms";
import FormFeedback from "./FormFeedback";

export default function WhatsAppForm({
  messagePrefix,
  children,
  className = "whatsapp-form",
  requiredFields = [],
  submitLabel = "Envoyer la demande sur WhatsApp",
  successMessage =
    "WhatsApp va s'ouvrir avec votre message. Appuyez sur Envoyer dans l'application pour finaliser.",
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

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

    const prefix =
      messagePrefix ||
      `${WHATSAPP_GREETING}, je souhaite vous contacter.`;

    const message = buildWhatsAppMessage(prefix, data);

    const opened = window.open(
      whatsAppUrl(message),
      "_blank",
      "noopener,noreferrer"
    );

    if (!opened) {
      setStatus("error");
      setErrorMessage(
        "Le navigateur a bloqué l'ouverture de WhatsApp. Autorisez les pop-ups ou réessayez."
      );
      return;
    }

    setStatus("success");
    form.reset();
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children}
      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100 py-3">
          {submitLabel}
        </button>
      </div>
      <div>
        <FormFeedback
          status={status}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </div>
    </form>
  );
}
