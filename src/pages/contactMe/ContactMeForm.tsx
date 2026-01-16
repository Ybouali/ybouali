import { useState } from 'react';
import {
    Card,
    CustomInput,
    CustomTextArea,
    SendButton,
} from '../../components';

import emailjs from '@emailjs/browser';

type SendEmail = {
    fromEmail: string;
    message: string;
    fromName: string;
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
    });

    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        try {
            setLoading(true);
            await sendEmail(emailContent);
            // alert('Message sent successfully ✅');
            setEmailContent({ fromEmail: '', message: '', fromName: '' });
        } catch (err) {
            console.error(err);
            alert('Failed to send message ❌');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="flex flex-col w-full items-start justify-center gap-3">
            <p className="text-lg font-semibold text-[#4e6a40]">
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
