import { iInfo } from '../components/info/iInfo'
import { EnvelopeFill, Github, TelephoneFill } from 'react-bootstrap-icons'

const info: iInfo.Payload = {
  profileImage: process.env.PUBLIC_URL + '/profile.jpg',
  name: '김영록',
  engName: 'Kim Young Rok',
  contact: [
    {
      content: '010-6342-3413',
      icon: <TelephoneFill />,
    },
    {
      content: 'shim99887@gmail.com',
      icon: <EnvelopeFill />,
      link: 'mailto:shim99887@gmail.com',
    },
    {
      content: 'https://github.com/shim99887',
      icon: <Github />,
      link: 'https://github.com/shim99887',
    },
  ],
  // phoneNumber: '010-6342-3413',
  // githubUrl: 'https://github.com/shim99887',
  // email: 'shim99887@gmail.com'
}

export default info
