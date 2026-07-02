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
    <form className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4"
          onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold text-center text-azul-principal mb-4">Contáctame</h2>

      {/* NOMBRE */}
      <div>
        <label className="block text-gray-700">Nombre</label>
        <div className="flex items-center border-2 border-azul-principal/40 p-2 rounded-lg bg-azul-claro/20">
          <UserIcon className="h-5 w-5 text-azul-principal mr-2" />
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full outline-none"
            placeholder="Ingresa tu nombre"
            required
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-gray-700">Correo</label>
        <div className="flex items-center border-2 border-lila/40 p-2 rounded-lg bg-lila/10">
          <EnvelopeIcon className="h-5 w-5 text-lila-oscuro mr-2" />
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full outline-none"
            placeholder="ejemplo@gmail.com"
            required
          />
        </div>
      </div>

      {/* MENSAJE */}
      <div>
        <label className="block text-gray-700">Mensaje</label>
        <div className="flex items-start border-2 border-lila/50 p-2 rounded-lg bg-lila/10">
          <PencilSquareIcon className="h-5 w-5 text-lila-oscuro mr-2 mt-1" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full outline-none"
            rows="4"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-azul-principal text-white py-2 rounded-lg hover:bg-azul-oscuro transition"
      >
        Enviar
      </button>
      {status === "loading" && (
        <p className="text-center text-blue-600">Enviando...</p>
      )}
      {status === "success" && (
        <p className="text-center text-green-600">Correo enviado correctamente 🎉</p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600">Hubo un error, intenta de nuevo</p>
      )}
    </form>
  );
};

export default ContactForm;
