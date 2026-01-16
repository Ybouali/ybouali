import {
    ButtonSocecialMedia,
    Card,
    EmailIcon,
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../../components';

function SocecialContactMe() {
    return (
        <div className="flex flex-col w-full items-start justify-center gap-2">
            <Card className="flex flex-col w-full items-start justify-center gap-1">
                <p className="text-lg font-semibold text-[#4e6a40] ">{`// Social Media Links`}</p>
                <div className="flex flex-col w-full justify-start items-start gap-2">
                    <ButtonSocecialMedia
                        icon={EmailIcon}
                        label={'Email'}
                        url={'yassine.bouali.bo@gmail.com'}
                    />
                    <ButtonSocecialMedia
                        icon={GithubIcon}
                        label={'Github'}
                        url={'https://github.com/ybouali'}
                    />
                    <ButtonSocecialMedia
                        icon={LinkedInIcon}
                        label={'LinkedIn'}
                        url={'https://www.linkedin.com/in/ybouali/'}
                    />
                    <ButtonSocecialMedia
                        icon={InstagramIcon}
                        label={'Instagram'}
                        url={'https://www.instagram.com/yassineboualino/'}
                    />
                </div>
            </Card>

            <Card className="flex flex-col w-full items-start justify-center gap-1">
                <p className="text-lg font-semibold text-[#4e6a40] ">{`// Current status`}</p>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#00ff80] opacity-75 animate-ping duration-700" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00ff80] duration-700" />
                    </div>
                    <p className="text-sm font-medium text-gray-300">
                        Available for opportunities
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default SocecialContactMe;
