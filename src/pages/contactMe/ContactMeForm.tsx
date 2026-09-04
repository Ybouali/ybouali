import { useState } from 'react';
import {
    Card,
    CustomInput,
    CustomTextArea,
    SendButton,
} from '../../components';

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

type SendEmail = {
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

function ContactMeForm() {
    const [emailContent, setEmailContent] = useState<SendEmail>({
        fromEmail: '',
        message: '',
        fromName: '',
        time: new Date().toISOString(),
    });

    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (
            !emailContent.fromName ||
            !emailContent.fromEmail ||
            !emailContent.message
        ) {
            toast.error('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await toast.promise(
                sendEmail(emailContent),
                {
                    loading: 'Sending...',
                    success: 'Message sent! I’ll reply soon.',
                    error: 'Send failed. Try again or email me.',
                },
                {
                    style: {
                        background: 'var(--color-owl-surface)',
                        color: 'var(--color-owl-text)',
                        border: '1px solid var(--color-owl-border)',
                    },
                    success: {
                        iconTheme: {
                            primary: 'var(--color-owl-green)',
                            secondary: 'var(--color-owl-bg)',
                        },
                    },
                }
            );
            setEmailContent({
                fromEmail: '',
                message: '',
                fromName: '',
                time: new Date().toISOString(),
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="flex flex-col w-full items-start justify-center gap-3">
            <p className="text-lg font-semibold text-owl-comment font-mono">
                {`// Send a message`}
            </p>

            <CustomInput
                label="Full Name"
                value={emailContent.fromName}
                onChange={(e) =>
                    setEmailContent((prev) => ({
                        ...prev,
                        fromName: e.target.value,
                    }))
                }
            />

            <CustomInput
                label="Email"
                type="email"
                value={emailContent.fromEmail}
                onChange={(e) =>
                    setEmailContent((prev) => ({
                        ...prev,
                        fromEmail: e.target.value,
                    }))
                }
            />

            <CustomTextArea
                label="Message"
                value={emailContent.message}
                onChange={(e) =>
                    setEmailContent((prev) => ({
                        ...prev,
                        message: e.target.value,
                    }))
                }
            />

            <SendButton
                disabled={loading}
                onClick={handleSend}
                label={loading ? 'Sending ...' : 'Send'}
            />
        </Card>
    );
}

export default ContactMeForm;
