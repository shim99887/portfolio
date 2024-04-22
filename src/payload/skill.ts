import { iSkill } from '../components/Skill/iSkill'

export const skill: iSkill.Payload = {
  list: [
    {
      group: 'Frontend',
      list: ['React', 'React Native', 'TypeScript'],
    },
    {
      group: 'Backend',
      list: [
        'Java',
        'Kotlin',
        'Spring Boot',
        'JPA',
        'Mysql',
        'Mybatis',
        'Kafka',
      ],
    },
    {
      group: 'Utility',
      list: ['Slack', 'Git', 'Notion', 'IDEA', 'Jenkins'],
    },
  ],
}
