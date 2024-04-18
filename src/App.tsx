import React from 'react';
import * as S from './App.styles'
import Info from './components/info/Info';
import Introduce from './components/introduce/Introduce';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import SideProject from './components/SideProject/SideProject';
import Etc from './components/Etc/Etc';
import Education from './components/Education/Education';
import project from './payload/project';
import education from './payload/education';
import etc from './payload/etc';
import sideProject from './payload/sideProject';

function App() {
  const projectPayload = project
  const educationPayload = education
  const etcPayload = etc
  const sideProjectPayload = sideProject

  return (
    <S.Container>
      <Info />
      <Introduce />
      <Skill />
      <Experience />
      <Project payload={projectPayload} />
      <SideProject payload={sideProjectPayload} />
      <Education payload={educationPayload} />
      <Etc payload={etcPayload} />
    </S.Container>
  );
}

export default App;
