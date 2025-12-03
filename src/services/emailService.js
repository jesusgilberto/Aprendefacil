import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
  // SOLO estas 3 variables (igual que en Angular)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  console.log("📧 Enviando email con credenciales Angular:", {
    serviceId: SERVICE_ID,
    templateId: TEMPLATE_ID,
    userId: USER_ID ? `✅ (${USER_ID.substring(0, 10)}...)` : '❌ No configurada'
  });

  // Validación simple
  if (!USER_ID || !SERVICE_ID || !TEMPLATE_ID) {
    console.error("❌ Faltan credenciales de EmailJS");
    
    // Modo testing temporal
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { 
      success: true,
      testing: true,
      message: "Mensaje recibido (configura USER_ID en Netlify)"
    };
  }

  try {
    // EmailJS v3 - USER_ID como cuarto parámetro
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message,
        reply_to: formData.user_email 
      },
      USER_ID  // ← USER_ID aquí, NO PUBLIC_KEY
    );

    console.log("✅ Email enviado exitosamente:", response.status);
    return { success: true, response };
    
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    return { 
      success: false, 
      error: error.text || error.message || "Error desconocido"
    };
  }
};