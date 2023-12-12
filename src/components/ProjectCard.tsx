import React from 'react'
import { FiLink } from "react-icons/fi";
import { ProjectCardType } from '../types/ProjectCard';
import { FaWordpressSimple } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

function ProjectCard(props: ProjectCardType) {

  const capitaliseFirstCharacter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleClickLink = () => {
    window.open(props.linkGithubProject, '_blank');
  }

  const titleProject: string = capitaliseFirstCharacter(props.title);
  const descriptionProject: string = capitaliseFirstCharacter(props.description);

  return (
    
    <div className={props.mode ? 'bg-sky-600 border-solid border-2 rounded-xl p-3 shadow-2xl border-indigo-100 duration-700' : 'bg-sky-600 border-solid border-2 rounded-xl p-3 shadow-2xl border-blue-950 duration-700'}>
      <div className='flex items-center justify-between flew-row '>
        <div className='flex items-start justify-between flex-col gap-y-2 py-2'>
            <h1 className={props.mode ? 'text-blue-950 font-semibold italic hover:not-italic text-lg duration-700' : 'text-indigo-100 font-semibold italic hover:not-italic text-lg duration-700'}>
              {titleProject}               
            </h1>
            <p className={props.mode ? 'text-blue-950 font-light text-sm duration-700' : 'text-indigo-100 font-light text-sm duration-700'}>
                {descriptionProject}
            </p>
        </div>
        <FiLink className='h-32 w-32 md:-mt-36 cursor-pointer' onClick={handleClickLink} />
      </div>
        {
          props.hasIcons && 
          <>
            <br />
            <div className={props.mode ? 'flex items-start justify-between gap-3 text-blue-950 duration-700' : 'flex items-start justify-between gap-3 text-indigo-100 duration-700' }>
                <FaWordpressSimple />                
                <FaWordpressSimple />                
                <FaWordpressSimple />                
                <FaWordpressSimple />                
                <FaWordpressSimple />                
                <FaWordpressSimple />                
                <FaWordpressSimple />                
            </div>
          </>
        }
    </div>
  )
}

export default ProjectCard
