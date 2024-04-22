import React from 'react'
import Info from './components/info/Info'
import { Style } from './components/common/Style'
import Skill from './components/Skill'
import SideProjectComponent from './components/SideProject'
import EducationComponent from './components/education'
import EtcComponent from './components/Etc'
import { Container } from 'reactstrap'
import IntroduceComponent from './components/introduce'
import ExperienceComponent from './components/Experience'
import ProjectComponent from './components/Project'
import info from './payload/info'
import { introducePayload } from './payload/introduce'
import { skill } from './payload/skill'
import { experience } from './payload/experience'
import { project } from './payload/project'
import { sideProject } from './payload/sideProject'
import { education } from './payload/education'
import { etc } from './payload/etc'

function App() {
  return (
    <Container style={Style.global}>
      <Info payload={info} />
      <IntroduceComponent payload={introducePayload} />
      <Skill payload={skill} />
      <ExperienceComponent payload={experience} />
      <ProjectComponent payload={project} />
      <SideProjectComponent payload={sideProject} />
      <EducationComponent payload={education} />
      <EtcComponent payload={etc} />
    </Container>
  )
}

export default App
