import { DeveloperInfo, ImportDisplay, MainForScreen, EmailIcon, GithubIcon, LinkedInIcon, InstagramIcon } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import { site } from '../../data/site';

function ContactMethod({ icon: Icon, label, value, url }: { icon: any, label: string, value: string, url: string }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-center p-6 bg-owl-surface hover:bg-owl-surface-hover border border-owl-border hover:border-owl-blue rounded-lg transition-all duration-300 w-full h-full gap-4 shadow-sm shadow-black/10 hover:shadow-owl-blue/20"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-owl-bg border border-owl-border group-hover:bg-owl-blue group-hover:border-owl-cyan transition-all duration-300">
                <Icon className="h-6 w-6 text-owl-text-muted group-hover:text-owl-bg transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-mono text-owl-comment mb-1">{'// '}{label}</span>
                <span className="text-base md:text-lg font-semibold text-owl-text group-hover:text-owl-cyan transition-colors duration-300 break-all">{value}</span>
            </div>
        </a>
    );
}

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
