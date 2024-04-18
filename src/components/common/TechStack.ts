export const TechStack = {
  Java: 'Java',
  Kotlin: 'Kotlin',
  React: 'React',
  SpringBoot: 'Spring Boot',
  Mysql: 'Mysql',
  JPA: 'JPA',
  Vue: 'Vue.js',
  MyBatis: 'MyBatis',
  MongoDb: 'Mongo DB',
  Jenkins: 'Jenkins',
  TypeScript: 'TypeScript',
} as const

export type TechStack = (typeof TechStack)[keyof typeof TechStack]
