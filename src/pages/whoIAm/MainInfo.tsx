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
                        Software Engineer · Backend · AI/RAG · Industrial IT
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
                    <span className="text-white">{` mantra `}</span>
                    <span className="text-white">{' = '}</span>
                    <span className="text-[#4e6a40]">
                        {
                            '"No One → Becoming Someone."'
                        }
                    </span>
                    <span className="text-white">{';'}</span>
                    <br/>
                    <span className="text-purple-400">const</span>
                    <span className="text-white">{` principle `}</span>
                    <span className="text-white">{' = '}</span>
                    <span className="text-[#4e6a40]">
                        {
                            '"Every piece of code deserves a second refactor."'
                        }
                    </span>
                    <span className="text-white">{';'}</span>
                </div>
                <div className="text-base text-gray-300 leading-relaxed mt-2">
                    <span className="text-purple-300/80">
                        I am a Software Engineer focused on building practical, scalable systems. 
                        My work increasingly spans backend architectures, distributed infrastructure, 
                        and asynchronous processing pipelines. I enjoy architecting RAG systems for document 
                        processing and bridging the gap between modern software engineering and Industrial IT (SCADA, PLCs). 
                        Whether it's deploying Temporal workflows or managing Kafka event streams, I build 
                        systems designed for reliability and scale.
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
                </div>
            </div>
        </Card>
    );
}

export default MainInfo;
