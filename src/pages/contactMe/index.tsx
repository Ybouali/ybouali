import { DeveloperInfo, ImportDisplay, MainForScreen } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import ContactMeForm from './ContactMeForm';
import SocialContactMe from './SocialContactMe';

function ContactMe() {
    return (
        <MainForScreen>
            <div className="w-full">
                <div className="w-full md:w-5/6 lg:w-3/4 mx-auto">
                    <div className="flex flex-col items-start pb-10 gap-4">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="contact-me.tsx"
                            valueTwo="Get in touch via email or social media"
                        />
                        <ImportDisplay />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <ContactMeForm />
                            <SocialContactMe />
                        </div>
                        <ExportDefault moduleName="ContactMe" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default ContactMe;
