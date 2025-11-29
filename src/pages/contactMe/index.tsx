import { DeveloperInfo, ImportDisplay, MainForScreen } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import ContactMeForm from './ContactMeForm';
import SocecialContactMe from './SocecialContactMe';

function ContactMe() {
    return (
        <MainForScreen>
            <div className="max-w-4xl mx-auto flex flex-col items-start gap-12">
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
        </MainForScreen>
    );
}

export default ContactMe;
