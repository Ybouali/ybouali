import { Card, CustomInput, CustomTextArea } from '../../components';

function ContactMeForm() {
    return (
        <Card className="flex flex-col w-full items-start justify-center gap-3">
            <p className="text-lg font-semibold text-[#4e6a40] ">{`// Send a message`}</p>
            <CustomInput label="name" placeholder="Enter your name" />
            <CustomInput
                label="email"
                placeholder="Enter your email"
                type="email"
            />
            <CustomTextArea label="Message" placeholder="Enter your message" />
        </Card>
    );
}

export default ContactMeForm;
