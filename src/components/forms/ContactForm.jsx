import { useState } from "react";
import { sendEmail } from "../../services/emailService";
import { EnvelopeIcon, UserIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      setFormData({ user_name: "", user_email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <h2 className="text-lg font-bold text-gray-800 text-center mb-3">
        Enviar mensaje
      </h2>

      {/* NOMBRE */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-sm">Nombre</label>
        <div className="flex items-center border border-rosa-principal p-2 rounded-lg bg-white">
          <UserIcon className="h-5 w-5 text-rosa-principal mr-2" />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full outline-none text-gray-800 text-sm"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-sm">Correo</label>
        <div className="flex items-center border border-rosa-principal p-2 rounded-lg bg-white">
          <EnvelopeIcon className="h-5 w-5 text-rosa-principal mr-2" />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full outline-none text-gray-800 text-sm"
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
      </div>

      {/* MENSAJE */}
      <div>
        <label className="block text-gray-700 font-medium mb-1 text-sm">Mensaje</label>
        <div className="flex items-start border border-rosa-principal p-2 rounded-lg bg-white">
          <PencilSquareIcon className="h-5 w-5 text-rosa-principal mr-2 mt-1" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="3"
            className="w-full outline-none text-gray-800 text-sm"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
        </div>
      </div>

      {/* ALERTAS COMPACTAS - CORREGIDO */}
      <div className="min-h-6">
        {status === "loading" && (
          <p className="text-center text-rosa-principal text-sm">Enviando...</p>
        )}

        {status === "success" && (
          <p className="text-center text-green-600 font-medium text-sm">
            ✓ Mensaje enviado
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-red-600 font-medium text-sm">
            ✗ Error, intenta de nuevo
          </p>
        )}
      </div>

      {/* BOTÓN ENVIAR */}
      <button
        type="submit"
        className="w-full bg-rosa-principal text-white py-2 rounded-lg font-medium hover:bg-rosa-oscuro transition text-sm"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;