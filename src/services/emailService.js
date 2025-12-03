import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  try {
    // PRIMERO: Inicializar EmailJS con la public key
    emailjs.init(PUBLIC_KEY);
    
    // SEGUNDO: Enviar el email (sin pasar PUBLIC_KEY como parámetro)
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        reply_to: formData.user_email 
      }
      
    );

    return { success: true, response };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error };
  }
};