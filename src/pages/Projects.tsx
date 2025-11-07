import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { ThemeType } from '../types/navBarTypes';
import { FaHandPointRight } from "react-icons/fa";
import { ProjectType } from '../types/ProjectCard';
import { motion } from 'framer-motion';


function Projects(props: ThemeType) {

    const openMyGithubProject = () => {
        window.open('https://github.com/ybouali', '_blank');
    }

    const dataProjects: ProjectType[] = [
        {
            title: 'inception',
            description: 'Broaden my knowledge of system administration by using Docker. Virtualize several Docker images, creating them in a new virtual machine.',
            linkGithubProject: 'https://github.com/Ybouali/Inception',
            Icons: {
                redisTec: true,
                wordPressTec: true,
                ftpTec: true,
                adminerTec: true,
                pontainerTec: true,
                mariadb: true,
                docker: true,
                nginx: true,
            }
        },
        {
            title: 'ft_containers',
            description: 'The aim of this project is to understand how the containers of the STL, some interesting allocation method, some tricks with the linker and optimisation.',
            linkGithubProject: 'https://github.com/Ybouali/ft_containers',
            Icons: {
                languageCPP: true,
            }

        },
        {
            title: 'ft_webserv',
            description: 'This project is about writing your own HTTP server. You will be able to test it with an actual browser. HTTP is one of the most used protocols on the internet. Knowing its arcane will be useful, even if you won’t be working on a website.',
            linkGithubProject: 'https://github.com/Ybouali/FT_WEBSERV',
            Icons: {
                languageCPP: true,
            }
        },
        {
            title: 'minishell',
            description: 'Minishell is a 42 school team project to create a basic shell program in C. It implements redirections and pipes, as well as environment variables and some builtin commands.',
            linkGithubProject: 'https://github.com/Ybouali/minishell',
            Icons: {
                languageC: true,
            }
        },
        {
            title: 'philosopher',
            description: 'Eat, Sleep, Spaghetti, repeat. This project is about learning how threads work by precisely timing a group of philosophers on when to pick up forks and eat spaghetti without dying from hunger',
            linkGithubProject: 'https://github.com/Ybouali/Philosopher',
            Icons: {
                languageC: true,
            }
        },
        {
            title: 'weather_app',
            description: 'my first app using flutter , in this app u will get the info of the weather by ur city',
            linkGithubProject: 'https://github.com/Ybouali/weather_app',
            Icons: {
                flutterTec: true,
            }
        },
        {
            title: 'CoffeeMasters',
            description: 'This project is about learning Fultter',
            linkGithubProject: 'https://github.com/Ybouali/CoffeeMasters',
            Icons: {
                flutterTec: true,
            }
        },
        {
            title: 'ft_printf',
            description: 'printf A project that will help with future initiatives. Learning how variable size arguments function is the goal',
            linkGithubProject: 'https://github.com/Ybouali/ft_printf',
            Icons: {
                languageC: true,
            }
        },
        {
            title: 'github_finder',
            description: 'app using react JS that allow the user to see github profiles',
            linkGithubProject: 'https://github.com/Ybouali/github_finder',
            Icons: {
                languageJS: true,
                tailwindcss: true,
                react: true,
            }
        },
        
    ]


    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        })
    };
    
    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
    }

    return (
        <>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-1 p-2'
            >

                {
                    
                    dataProjects.map((project, index) => (

                        <motion.div
                            variants={child}
                            key={index}
                        >

                            <ProjectCard
                                data={project}
                                mode={props.mode}
                                key={index}  
                            />

                        </motion.div>

                    ))

                }

            </motion.div>

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
