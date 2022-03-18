import './Project.css'

import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='project'>
      <p className='project__name project__text-setting'>Name: {project.name}</p>
      <p className='project__stack project__text-setting'>Stack: {project.stack}</p>
      <p className='project__info project__text-setting'>Info: {project.info}</p>
      <p className='project__github-link project__text-setting'>
        Git link: <a className='project__github-link-item project__text-setting' href={project.gitLink} target="_blank" rel='noreferrer'>{project.gitLink}</a>
      </p>
    </div>
  )
}

export default Project