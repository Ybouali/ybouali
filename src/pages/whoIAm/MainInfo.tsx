import {
    ButtonSocialMediaTwo,
    Card,
    DevIcon,
    DownloadIcon,
    GithubIcon,
    InstagramIcon,
    LinkedInIcon,
} from '../../components';
import MeImage from '../../assets/img/me.jpeg';
import ProMeImage from '../../assets/img/proMe.jpeg';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

function MainInfo() {
    return (
        <Card className="flex flex-col-reverse md:flex-row w-full justify-between gap-4 p-2  ">
            <div className="flex flex-col w-full  h-full justify-start gap-4 ">
                <div className="relative w-50 h-50 rounded-lg overflow-hidden  ">
                    <motion.img
                        src={ProMeImage}
                        alt="yassine bouali"
                        className="absolute inset-0 top-0 left-0 w-full h-full object-cover border border-[#404040]"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.img
                        src={MeImage}
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
                    url="https://www.linkedin.com/in/yassine-bouali/"
                    isDownload={true}
                />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-4/6 ">
                <p className="text-lg font-semibold text-[#4e6a40] ">
                    {`// Personal Information`}
                </p>
                <p className="text-2xl text-purple-500 ">Yassine Bouali</p>
                <p className="text-lg text-purple-200 ">
                    Full Stack Developer & Mobile Developer
                </p>
                <div className="flex flex-row items-center justify-start gap-3">
                    <MapPinIcon className="h-6 w-6 text-red-500" />
                    <p className="text-md text-gray-300 ">
                        Casablanca, Morocco
                    </p>
                </div>
                <div className="flex flex-row items-center justify-start gap-3">
                    <DevIcon className="h-6 w-6 text-red-500" />
                    <p className="text-md text-gray-300 ">
                        Developer since 2021
                    </p>
                </div>
                <p className="text-lg font-semibold text-[#4e6a40] ">
                    {`// About Me`}
                </p>
                <div className="text-md text-gray-300 ">
                    <span className="text-lg text-purple-400 ">const</span>
                    <span className="text-lg text-white">{` bio `}</span>
                    <span className="text-lg text-white">{' = '}</span>
                    <span className="text-lg text-[#4e6a40]">
                        {
                            '"Passionate developer with a knack for creating efficient and scalable web and mobile applications. Always eager to learn new technologies and improve my skills."'
                        }
                    </span>
                    <span className="text-lg text-white">{';'}</span>
                </div>
                <div>
                    <span className="text-lg text-purple-400 ">
                        I love solving complex problems and creating intuitive,
                        scalable solutions. My approach combines technical
                        excellence with creative design thinking to deliver
                        exceptional digital experiences. Whether it's
                        architecting backend systems or crafting pixel-perfect
                        interfaces, I'm driven by the challenge of building
                        products that make a real impact.
                    </span>
                </div>
                <p className="text-lg font-semibold text-[#4e6a40] ">
                    {`// Social Media Links`}
                </p>
                <div className="flex flex-row items-center justify-start gap-4">
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
