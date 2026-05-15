import { NextResponse } from "next/server";
import { isContactEmailConfigured } from "@/lib/contact-config";
import { sendContactEmail } from "@/lib/contact-mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    if (!isContactEmailConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          code: "NOT_CONFIGURED",
          error:
            "Email non configuré : ajoutez EmailJS ou Web3Forms dans .env.local puis redémarrez le serveur.",
        },
        { status: 503 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "Corps de requête JSON invalide." },
        { status: 400 }
      );
    }

    const Nom = String(body.Nom ?? "").trim();
    const Email = String(body.Email ?? "").trim();
    const Objet = String(body.Objet ?? "").trim();
    const Message = String(body.Message ?? "").trim();

    if (!Nom || !Email || !Message) {
      return NextResponse.json(
        { ok: false, error: "Nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(Email)) {
      return NextResponse.json(
        { ok: false, error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const provider = await sendContactEmail({ Nom, Email, Objet, Message });

    return NextResponse.json({ ok: true, provider });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          err?.message ||
          "L'envoi a échoué. Réessayez ou contactez le cabinet au 0555 91 70 61.",
      },
      { status: 500 }
    );
  }
}
