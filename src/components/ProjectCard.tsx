import React from 'react'
import { FiLink } from "react-icons/fi";
import { ProjectCardType } from '../types/ProjectCard';
import { FaWordpressSimple } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { SiAdminer } from "react-icons/si";
import AnimatedText from './AnimatedText';
import { SiTailwindcss } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiMariadb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

function ProjectCard(props: ProjectCardType) {

  const capitaliseFirstCharacter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleClickLink = () => {
    window.open(props.data.linkGithubProject, '_blank');
  }
  
  const handleClickFlutter = () => {
    window.open("https://flutter.dev/", '_blank');
  }

  const handleClickNginx = () => {
    window.open("https://www.nginx.com/", '_blank');
  }

  const handleClickReact = () => {
    window.open("https://react.dev/", '_blank');
  }

  const handleClickDocker = () => {
    window.open("https://www.docker.com/", '_blank');
  }

  const handleClickMariadb = () => {
    window.open("https://mariadb.org/", '_blank');
  }

  const handleClickTs = () => {
    window.open("https://www.typescriptlang.org/", '_blank');
  }

  const handleClickJs = () => {
    window.open("https://www.javascript.com/", '_blank');
  }

  const handleClickTailwindcss = () => {
    window.open("https://tailwindcss.com/", '_blank');
  }

  const handleClickAdminer = () => {
    window.open("https://www.adminer.org/", '_blank');
  }

  const handleClickFtp = () => {
    window.open("https://www.domain.com/help/article/ftp-how-to-connect-using-an-ftp-client?utm_campaign=dynamic_PPC&utm_source=googleads&utm_medium=genericsearch&channelid=P13C46098636S570N0B5578A30D4499E0000V111&gad_source=1&gclid=CjwKCAiApuCrBhAuEiwA8VJ6JhrxB_nlJAox9VFKRY5XjN6TPx8lLDLNRhIhz-0A5pmIwaa3N-OPJRoC1BUQAvD_BwE&gclsrc=aw.ds", '_blank');
  }

  const handleClickRedis = () => {
    window.open("https://redis.io/", '_blank');
  }

  const handleClickWordpress = () => {
    window.open("https://wordpress.com/?aff=15767&cid=1654213&cmp_id=11549382845&adg_id=111353876614&kwd=wordpress&device=c&gad_source=1&gclid=CjwKCAiApuCrBhAuEiwA8VJ6Jt4fHkohSaG3k9P3G1lgW4KKy0zG_tQJ4L5ptQlFbDZdI9rfrQu3nhoCcXUQAvD_BwE", '_blank');
  }

  const handleClickC = () => {
    window.open("https://www.w3schools.com/c/c_intro.php", '_blank');
  }

  const handleClickCpp = () => {
    window.open("https://cplusplus.com/", '_blank');
  }

  const titleProject: string = capitaliseFirstCharacter(props.data.title);
  const descriptionProject: string = capitaliseFirstCharacter(props.data.description);

  return (
    <div className={props.mode ? 'bg-sky-600 border-solid border-2 rounded-xl p-3 shadow-2xl border-indigo-100 duration-700 h-56' : 'bg-sky-600 border-solid border-2 rounded-xl p-3 shadow-2xl border-blue-950 duration-700 h-56 '}>
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-between flex-row gap-7'>
          <div className='flex items-start justify-between'>
            <h1 className={props.mode ? 'text-blue-950 font-semibold italic hover:not-italic text-lg duration-700' : 'text-indigo-100 font-semibold italic hover:not-italic text-lg duration-700'}>
              {titleProject}               
            </h1>
          </div>
          <div className='flex items-end justify-between'>
            <FiLink className='cursor-pointer' onClick={handleClickLink} size={25} />
          </div>
        </div>
        <div className='flex items-center' >
          
          <p className=
            {
              props.mode ?
                'text-blue-950 font-light text-sm duration-700 p-2 '
              :
                'text-indigo-100 font-light text-sm duration-700 p-2 '
            }
          >
            {descriptionProject}
          </p>
        </div>
      </div>
      <div className='flex flex-col -mt-10  ' >
        <AnimatedText text='Technology Or Language ( used )' mode={props.mode} />
        <div className={props.mode ? 'flex items-start justify-between gap-3 text-blue-950 duration-700 m-1 ' : 'flex items-start justify-between gap-3 text-indigo-100 duration-700 m-1' }>
          { props.data.Icons.languageCPP &&  <TbBrandCpp size={20} onClick={handleClickCpp} />}
          { props.data.Icons.languageC &&  <FaCopyright size={20} onClick={handleClickC} /> }
          { props.data.Icons.flutterTec &&  <SiFlutter size={20} onClick={handleClickFlutter} />}
          { props.data.Icons.nginx &&  <SiNginx size={20} onClick={handleClickNginx} />}
          { props.data.Icons.react &&  <FaReact size={20} onClick={handleClickReact} />}
          { props.data.Icons.docker &&  <FaDocker size={20} onClick={handleClickDocker} />}
          { props.data.Icons.mariadb &&  <SiMariadb size={20} onClick={handleClickMariadb} />}
          { props.data.Icons.languageTS &&  <SiTypescript size={20} onClick={handleClickTs} />}
          { props.data.Icons.languageJS &&  <IoLogoJavascript size={20} onClick={handleClickJs} />}
          { props.data.Icons.tailwindcss &&  <SiTailwindcss size={20} onClick={handleClickTailwindcss} />}
          { props.data.Icons.ftpTec &&  <SiMicrosoftpowerpoint size={20} onClick={handleClickFtp} />}
          { props.data.Icons.adminerTec &&  <SiAdminer size={20} onClick={handleClickAdminer} />}
          { props.data.Icons.wordPressTec &&  <FaWordpressSimple size={20} onClick={handleClickWordpress} />}
          { props.data.Icons.redisTec &&  <DiRedis size={20} onClick={handleClickRedis} />}

        </div>
      </div>
    </div>
  )
}

export default ProjectCard
