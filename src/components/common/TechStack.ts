export const techStack = {
  React: 'React',
  ReactNative: 'React Native',
  TypeScript: 'TypeScript',
  SpringBoot: 'Spring Boot',
  Kotlin: 'Kotlin',
  Java: 'Java',
  Jpa: 'JPA',
  Intellij: 'Intellij',
  Notion: 'Notion',
  Slack: 'Slack',
} as const

export type TechStack = typeof techStack[keyof typeof techStack]