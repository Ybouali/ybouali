import { DeveloperInfo, ImportDisplay, MainForScreen, EmailIcon, GithubIcon, LinkedInIcon, InstagramIcon } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import { site } from '../../data/site';
import ContactMethod from './ContactMethod';

function ContactMe() {
    return (
        <MainForScreen>
            <div className="w-full">
                <div className="w-full md:w-5/6 lg:w-[800px] mx-auto">
                    <div className="flex flex-col items-start pb-16 gap-6 md:gap-8">
                        
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="contact-me.tsx"
                            valueTwo="Direct channels. I answer faster than my linter."
                        />
                        
                        <ImportDisplay />
                        
                        {/* Status Line */}
                        <div className="w-full flex items-center justify-start gap-4 p-5 bg-owl-surface border border-owl-border rounded-lg shadow-sm">
                            <div className="relative flex h-3 w-3 items-center justify-center shrink-0">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-owl-green opacity-75 animate-ping duration-700" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-owl-green" />
                            </div>
                            <p className="text-sm md:text-base font-medium text-owl-text font-mono">
                                {site.statusLine}
                            </p>
                        </div>
                        
                        {/* Contact Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                            <ContactMethod 
                                icon={EmailIcon} 
                                label="Email" 
                                value={site.email} 
                                url={`mailto:${site.email}`} 
                            />
                            <ContactMethod 
                                icon={LinkedInIcon} 
                                label="LinkedIn" 
                                value="in/ybouali" 
                                url={site.socials.linkedin} 
                            />
                            <ContactMethod 
                                icon={GithubIcon} 
                                label="GitHub" 
                                value="Ybouali" 
                                url={site.socials.github} 
                            />
                            <ContactMethod 
                                icon={InstagramIcon} 
                                label="Instagram" 
                                value="@yassineboualino" 
                                url={site.socials.instagram} 
                            />
                        </div>

                        <ExportDefault moduleName="ContactMe" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default ContactMe;
