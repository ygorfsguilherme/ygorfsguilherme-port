import React from 'react'
import SectionBox from '../../components/SectionBox'
import './Projects.css'
import EfectVariants from '../../components/EfectVariants'
import { CardProject } from './CardProject'
import dados from './../../../data/project.json'

function Project() {
  return (
    <SectionBox title='Projetos' id='project'>
        <div className="projects">
        {
            dados.projects.map((project: any, index) => {
                const time = index / 4

                return (
                  <EfectVariants time={time} id={index}>
                    <CardProject 
                        image={project.image}
                        github_link={project.github_link}
                        title={project.title} 
                        description={project.description} 
                    />
                  </EfectVariants>
                )
            })
        }
    </div>
    </SectionBox>
  )
}

export default Project