import React from 'react'
import Info from './components/info/Info'
import info from './payload/info'
import {Style} from './components/common/Style'
import {introduce} from './payload/introduce'
import Introduce from './components/Introduce'
import Skill from './components/Skill'
import {skill} from './payload/skill'
import Experience from './components/experience'
import {experience} from './payload/experience'
import Project from './components/project'
import {project} from './payload/project'
import SideProject from './components/sideProject'
import {sideProject} from './payload/sideProject'
import Education from './components/education'
import {education} from './payload/education'
import Etc from './components/etc'
import {etc} from './payload/etc'
import {Container} from 'reactstrap'
// import Introduce from './components/introduce/Introduce';
// import Skill from './components/Skill/Skill';
// import Experience from './components/Experience/Experience';
// import Project from './components/Project/Project';
// import SideProject from './components/SideProject/SideProject';
// import Etc from './components/Etc/Etc';
// import Education from './components/Education/Education';
// import project from './payload/project';
// import education from './payload/education';
// import etc from './payload/etc';
// import sideProject from './payload/sideProject';

function App() {
  // const projectPayload = project
  // const educationPayload = education
  // const etcPayload = etc
  // const sideProjectPayload = sideProject

  return (
    <Container style={Style.global}>
      <Info payload={info} />
      <Introduce payload={introduce} />
      <Skill payload={skill} />
      <Experience payload={experience} />
      <Project payload={project} />
      <SideProject payload={sideProject} />
      <Education payload={education} />
      <Etc payload={etc} />
      {/*<Introduce/>*/}
      {/*<Skill/>*/}
      {/*<Experience/>*/}
      {/*<Project payload={projectPayload}/>*/}
      {/*<SideProject payload={sideProjectPayload}/>*/}
      {/*<Education payload={educationPayload}/>*/}
      {/*<Etc payload={etcPayload}/>*/}
    </Container>
  )
}

export default App
