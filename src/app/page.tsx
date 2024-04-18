'use client'

import Info from '@/app/components/info/Info'
import * as S from './page.styles'
import Introduce from '@/app/components/introduce/Introduce'
import Skill from '@/app/components/Skill/Skill'
import Experience from '@/app/components/Experience/Experience'
import Project from '@/app/components/Project/Project'
import project from '@/app/payload/project'
import Education from '@/app/components/Education/Education'
import education from '@/app/payload/education'
import etc from '@/app/payload/etc'
import Etc from '@/app/components/Etc/Etc'
import sideProject from '@/app/payload/sideProject'
import SideProject from '@/app/components/SideProject/SideProject'

export default function Home() {
  const projectPayload = project
  const educationPayload = education
  const etcPayload = etc
  const sideProjectPayload = sideProject
  return (
    <main>
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
    </main>
  )
}
