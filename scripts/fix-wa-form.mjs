import fs from "fs";

const path = "components/WhatsAppForm.jsx";
let s = fs.readFileSync(path, "utf8");

const replacement = `      <div className="col-12">
        <button type="submit" className="btn btn-primary w-100 py-3">
          {submitLabel}
        </button>
      </motionless>
      <motionless>
        <FormFeedback
          status={status}
          successMessage={successMessage}
          errorMessage={errorMessage}
        />
      </motionless>`;

s = s.replace(
  /      <motionless>[\s\S]*?errorMessage=\{errorMessage\}\s*\/>[\s\S]*?<\/motionless>/,
  replacement
);

fs.writeFileSync(path, s.replaceAll("motionless", "div"));
