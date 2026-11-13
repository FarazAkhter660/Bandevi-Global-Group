import React from "react";
import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/917011040474"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={19} />
      <span>WhatsApp</span>
    </a>
  );
}
