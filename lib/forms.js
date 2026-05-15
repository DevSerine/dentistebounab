/**
 * Collect named form fields into a plain object (trimmed, non-empty).
 */
export function collectFormData(form) {
  const data = {};

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    const name = field.getAttribute("name");
    if (!name || field.disabled) return;

    if (field.type === "checkbox" && !field.checked) return;
    if (field.type === "radio" && !field.checked) return;

    const value = String(field.value ?? "").trim();
    if (!value) return;

    data[name] = value;
  });

  return data;
}

/**
 * Build a WhatsApp message from a prefix and field map.
 */
export function buildWhatsAppMessage(prefix, data) {
  let message = prefix;
  Object.entries(data).forEach(([label, value]) => {
    message += `\n${label} : ${value}`;
  });
  return message;
}

/**
 * Validate required field names exist in data.
 */
export function validateRequired(data, requiredFields) {
  const missing = requiredFields.filter((key) => !data[key]?.trim());
  return missing;
}
