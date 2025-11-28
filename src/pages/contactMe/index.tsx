import { DeveloperInfo, ImportDisplay } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import ContactMeForm from './ContactMeForm';
import SocecialContactMe from './SocecialContactMe';

function ContactMe() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
            <div className="w-2/3  flex flex-col items-start justify-center gap-4">
                <DeveloperInfo
                    labelOne="from"
                    labelTwo="description"
                    valueOne="contact-me.tsx"
                    valueTwo="Get in touch via email or social media"
                />
                <ImportDisplay />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                    <ContactMeForm />
                    <SocecialContactMe />
                </div>
                <ExportDefault moduleName="ContactMe" />
            </div>
        </div>
    );
}

export default ContactMe;
