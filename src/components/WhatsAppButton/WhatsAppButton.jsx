import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const toggleOptions = () => setOpen(!open);

  return (
    <div className="whatsapp-floating">
      {/* Botón principal */}
      <button className="whatsapp-main-btn" onClick={toggleOptions}>
        <FaWhatsapp size={28} />
      </button>

      {open && (
        <div className="whatsapp-options">
          <a
            href="https://wa.me/17868539853?text=Hola,%20me%20gustaría%20hablar%20con%20Angela%20de%20Rizzi%20Group"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-option"
          >
            📞 Angela (USA)
          </a>
          <a
            href="https://wa.me/5491136751180?text=Hola,%20me%20gustaría%20hablar%20con%20Adrian%20de%20Rizzi%20Group"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-option"
          >
            📞 Adrian (ARG)
          </a>
          <a
            href="https://wa.me/17373981483?text=Hola,%20me%20gustaría%20hablar%20con%20Karol%20de%20Rizzi%20Group"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-option"
          >
            📞 Karol (USA)
          </a>
        </div>
      )}
    </div>
  );
}
