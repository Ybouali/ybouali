import {
    ButtonSocialMediaTwo,
    Card,
    DevIcon,
    DownloadIcon,
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../../components';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

function MainInfo() {
    return (
        <Card className="flex flex-col-reverse md:flex-row w-full justify-between gap-6 p-4">
            <div className="flex flex-col w-full md:w-1/3 justify-start gap-4">
                <div className="relative w-full aspect-square max-w-[300px] mx-auto md:mx-0 rounded-lg overflow-hidden">
                    <motion.img
                        src={'/assets/img/proMe.jpeg'}
                        alt="yassine bouali"
                        className="absolute inset-0 top-0 left-0 w-full h-full object-cover border border-[#404040]"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.img
                        src={'/assets/img/me.jpeg'}
                        alt="hover"
                        className="absolute inset-0 top-0 left-0 w-full h-full object-cover border border-[#404040]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
                <ButtonSocialMediaTwo
                    icon={DownloadIcon}
                    label="Download CV"
                    url="/"
                    isDownload={true}
                />
            </div>
            <div className="flex flex-col gap-3 w-full md:w-2/3">
                <p className="text-lg font-semibold text-[#4e6a40]">
                    {`// Personal Information`}
                </p>
                <div className="flex flex-col gap-1">
                    <p className="text-2xl md:text-3xl font-bold text-purple-500">Yassine Bouali</p>
                    <p className="text-lg md:text-xl text-purple-200">
                        Full Stack Developer & Mobile Developer
                    </p>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <div className="flex flex-row items-center justify-start gap-3">
                        <MapPinIcon className="h-5 w-5 text-red-500 shrink-0" />
                        <p className="text-base text-gray-300">
                            Casablanca, Morocco
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-3">
                        <DevIcon className="h-5 w-5 text-red-500 shrink-0" />
                        <p className="text-base text-gray-300">
                            Developer since 2021
                        </p>
                    </div>
                </div>
                
                <p className="text-lg font-semibold text-[#4e6a40] mt-2">
                    {`// About Me`}
                </p>
                <div className="text-base text-gray-300 font-mono leading-relaxed break-words">
                    <span className="text-purple-400">const</span>
                    <span className="text-white">{` bio `}</span>
                    <span className="text-white">{' = '}</span>
                    <span className="text-[#4e6a40]">
                        {
                            '"Passionate developer with a knack for creating efficient and scalable web and mobile applications. Always eager to learn new technologies and improve my skills."'
                        }
                    </span>
                    <span className="text-white">{';'}</span>
                </div>
                <div className="text-base text-gray-300 leading-relaxed mt-2">
                    <span className="text-purple-300/80">
                        I love solving complex problems and creating intuitive,
                        scalable solutions. My approach combines technical
                        excellence with creative design thinking to deliver
                        exceptional digital experiences. Whether it's
                        architecting backend systems or crafting pixel-perfect
                        interfaces, I'm driven by the challenge of building
                        products that make a real impact.
                    </span>
                </div>
                
                <p className="text-lg font-semibold text-[#4e6a40] mt-2">
                    {`// Social Media Links`}
                </p>
                <div className="flex flex-row flex-wrap items-center justify-start gap-4">
                    <ButtonSocialMediaTwo
                        icon={GithubIcon}
                        label="GitHub"
                        url="https://github.com/Ybouali"
                    />
                    <ButtonSocialMediaTwo
                        icon={LinkedInIcon}
                        label="LinkedIn"
                        url="https://www.linkedin.com/in/ybouali/"
                    />
                    <ButtonSocialMediaTwo
                        icon={InstagramIcon}
                        label="Instagram"
                        url="https://www.instagram.com/yassineboualino/"
                    />
                </div>
            </div>
        </Card>
    );
}

export default MainInfo;
