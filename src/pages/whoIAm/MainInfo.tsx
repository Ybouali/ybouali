import {
    ButtonSocialMediaTwo,
    Card,
    DevIcon,
    DownloadIcon,
    GithubIcon,
    LinkedInIcon,
} from '../../components';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { site } from '../../data/site';

function MainInfo() {
    return (
        <Card className="flex flex-col-reverse md:flex-row w-full justify-between gap-6 p-4">
            <div className="flex flex-col w-full md:w-1/3 justify-start gap-4">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto md:mx-0 rounded-lg overflow-hidden">
                    <motion.img
                        src={site.photo}
                        alt={site.name}
                        className="absolute inset-0 top-0 left-0 w-full h-full object-cover border border-owl-border"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.img
                        src={site.photoHover}
                        alt="hover"
                        className="absolute inset-0 top-0 left-0 w-full h-full object-cover border border-owl-border"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <ButtonSocialMediaTwo
                    icon={DownloadIcon}
                    label="Download CV"
                    url={site.cvUrl}
                    isDownload={true}
                />
            </div>
            <div className="flex flex-col gap-3 w-full md:w-2/3">
                <p className="text-lg font-semibold text-owl-comment font-mono">
                    {'// Personal Information'}
                </p>
                <div className="flex flex-col gap-1">
                    <p className="text-2xl md:text-3xl font-bold text-owl-purple">
                        {site.name}
                    </p>
                    <p className="text-lg md:text-xl text-owl-cyan">
                        {site.role}
                    </p>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex flex-row items-center justify-start gap-3">
                        <MapPinIcon className="h-5 w-5 text-owl-orange shrink-0" />
                        <p className="text-base text-owl-text">{site.location}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3">
                        <DevIcon className="h-5 w-5 text-owl-orange shrink-0" />
                        <p className="text-base text-owl-text">{site.since}</p>
                    </div>
                </div>

                <p className="text-lg font-semibold text-owl-comment font-mono mt-2">
                    {'// About Me'}
                </p>
                <div className="text-base text-owl-text font-mono leading-relaxed break-words">
                    <span className="text-owl-purple">const</span>
                    <span className="text-owl-text">{` mantra `}</span>
                    <span className="text-owl-text">{' = '}</span>
                    <span className="text-owl-green">{`"${site.mantra}"`}</span>
                    <span className="text-owl-text">{';'}</span>
                    <br />
                    <span className="text-owl-purple">const</span>
                    <span className="text-owl-text">{` principle `}</span>
                    <span className="text-owl-text">{' = '}</span>
                    <span className="text-owl-green">{`"${site.principle}"`}</span>
                    <span className="text-owl-text">{';'}</span>
                </div>
                <p className="text-base text-owl-text-muted leading-relaxed mt-2">
                    {site.about}
                </p>

                <p className="text-lg font-semibold text-owl-comment font-mono mt-2">
                    {'// Social Media Links'}
                </p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-4">
                    <ButtonSocialMediaTwo
                        icon={GithubIcon}
                        label="GitHub"
                        url={site.socials.github}
                    />
                    <ButtonSocialMediaTwo
                        icon={LinkedInIcon}
                        label="LinkedIn"
                        url={site.socials.linkedin}
                    />
                </div>
            </div>
        </Card>
    );
}

export default MainInfo;
