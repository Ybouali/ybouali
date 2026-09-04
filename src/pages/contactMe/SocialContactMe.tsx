import {
    ButtonSocialMedia,
    Card,
    EmailIcon,
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../../components';
import { site } from '../../data/site';

function SocialContactMe() {
    return (
        <div className="flex flex-col w-full items-start justify-center gap-4">
            <Card className="flex flex-col w-full items-start justify-center gap-3 p-4">
                <p className="text-lg font-semibold text-owl-comment font-mono">
                    {'// Social Media Links'}
                </p>
                <div className="flex flex-col w-full justify-start items-start gap-3">
                    <ButtonSocialMedia
                        icon={EmailIcon}
                        label={'Email'}
                        url={`mailto:${site.email}`}
                    />
                    <ButtonSocialMedia
                        icon={GithubIcon}
                        label={'Github'}
                        url={site.socials.github}
                    />
                    <ButtonSocialMedia
                        icon={LinkedInIcon}
                        label={'LinkedIn'}
                        url={site.socials.linkedin}
                    />
                    <ButtonSocialMedia
                        icon={InstagramIcon}
                        label={'Instagram'}
                        url={site.socials.instagram}
                    />
                </div>
            </Card>

            <Card className="flex flex-col w-full items-start justify-center gap-3 p-4">
                <p className="text-lg font-semibold text-owl-comment font-mono">
                    {'// Current status'}
                </p>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-owl-green opacity-75 animate-ping duration-700" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-owl-green duration-700" />
                    </div>
                    <p className="text-sm font-medium text-owl-text">
                        {site.statusLine}
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default SocialContactMe;
