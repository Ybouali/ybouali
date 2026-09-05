import emailjs from '@emailjs/browser';

export type SendEmail = {
    fromEmail: string;
    message: string;
    fromName: string;
    time: string;
};

export async function sendEmail({
    fromEmail,
    message,
    fromName,
}: SendEmail): Promise<void> {
    await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            from_name: fromName,
            from_email: fromEmail,
            message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
}