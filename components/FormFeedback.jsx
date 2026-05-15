export default function FormFeedback({ status, successMessage, errorMessage }) {
  if (status === "idle" || status === "loading") return null;

  const isSuccess = status === "success";

  return (
    <div
      className={`alert ${isSuccess ? "alert-success" : "alert-danger"} mt-3 mb-0`}
      role="alert"
    >
      {isSuccess ? successMessage : errorMessage}
    </div>
  );
}


