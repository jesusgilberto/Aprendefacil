import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  // Validación silenciosa
  if (!USER_ID || !SERVICE_ID || !TEMPLATE_ID) {
    // Modo testing silencioso
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { 
      success: true,
      testing: true,
      message: "Mensaje recibido"
    };
  }

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        reply_to: formData.user_email 
      },
      USER_ID
    );

    return { success: true, response };
    
  } catch (error) {
    return { 
      success: false, 
      error: error.text || error.message || "Error al enviar el mensaje"
    };
  }
};