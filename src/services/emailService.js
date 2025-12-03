import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.user_name,
        from_email: formData.user_email,
        message: formData.message
      },
      PUBLIC_KEY
    );

    return { success: true, response };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, error };
  }
};
