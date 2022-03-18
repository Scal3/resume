import './MyProjects.css'

import React from 'react'

import projectsData from '../../data/projectsData'
import Project from '../Project/Project'

const MyProjects = () => {
  return (
    <section className='my-projects component-setting'>
      <h2 className='my-projects__heading'>My projects</h2>
      {
        projectsData.map((project, i) => (
          <Project key={i} project={project}/>
        ))
      }

    </section>
  )
}

export default MyProjects