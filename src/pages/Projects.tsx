import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { ThemeType } from '../types/navBarTypes';
import { FaHandPointRight } from "react-icons/fa";


function Projects(props: ThemeType) {

    const openMyGithubProject = () => {
        window.open('https://github.com/ybouali', '_blank');
    }

    return (
        <>
            <div className='grid md:grid-cols-4 gap-5 m-1 p-2'>
                <ProjectCard
                    mode={props.mode}
                    title='Name project'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem repellat temporibus tenetur non alias tempore, expedita modi id quidem ab sed magnam optio. Nostrum, fugit. Expedita, eius? Quas, incidunt.'
                    linkGithubProject='https://github.com/Ybouali/FT_WEBSERV'
                    hasIcons={true}
                    technologiesUsed={["C", "php"]}
                />

            </div>
            <div className='flex items-center justify-between m-2 p-2' >
                <p className='font-semibold text-lg text-orange-600' >
                    You can find more project's 
                </p>
                <FaHandPointRight className='h-10 w-10 text-orange-600' />
                <p className='cursor-pointer font-bold text-xl text-orange-600' onClick={openMyGithubProject}>
                    github/ybouali
                </p>
            </div>
        </>
        
    );
}

export default Projects;
