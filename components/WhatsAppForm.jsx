"use client";

import { useRef, useState } from "react";
import { WHATSAPP_GREETING, WHATSAPP_NUMBER } from "@/lib/constants";
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
  const messageInputRef = useRef(null);
  const whatsAppAction = `https://wa.me/${WHATSAPP_NUMBER}`;

  const handleSubmit = (event) => {
    setErrorMessage("");

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    const data = collectFormData(form);
    const missing = validateRequired(data, requiredFields);

    if (missing.length > 0) {
      event.preventDefault();
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

    if (messageInputRef.current) {
      messageInputRef.current.value = message;
    }

    setStatus("success");
    window.setTimeout(() => form.reset(), 0);
  };

  return (
    <form
      action={whatsAppAction}
      className={className}
      method="get"
      onSubmit={handleSubmit}
      target="_blank"
      rel="noopener noreferrer"
      noValidate
    >
      <input ref={messageInputRef} type="hidden" name="text" />
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
