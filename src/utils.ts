import {
  Data,
  Grade,
  Project,
  Skill,
  User,
  Vacancy,
  VacancyProgress,
} from '@/types'

export const getGradeByUser = (user: User, data: Data): Grade => {
  const vacancy = data.vacancies.find(
    ({ id }) => id === user.vacancyId,
  ) as Vacancy
  const vacancyProgress = data.vacanciesProgresses.find(
    ({ vacancyId }) => vacancyId === vacancy.id,
  ) as VacancyProgress
  const grades = data.grades.filter(({ id }) =>
    vacancyProgress.gradesIds.some(gradeId => id === gradeId),
  ) as Grade[]
  return grades.find(
    grade => !!(grade.experience - user.totalExperience),
  ) as Grade
}

export const getVacancyByUser = (user: User, data: Data): Vacancy => {
  return data.vacancies.find(({ id }) => user.vacancyId === id) as Vacancy
}

export const getVacancyProgressByVacancy = (
  vacancy: Vacancy,
  data: Data,
): VacancyProgress => {
  return data.vacanciesProgresses.find(
    ({ vacancyId }) => vacancyId === vacancy.id,
  ) as unknown as VacancyProgress
}

export const getSkillByUser = (user: User, data: Data): Skill[] =>
  data.skills.filter(({ id }) => user.skillsIds.includes(id))

export const getCurrentProjectByUser = (
  user: User,
  data: Data,
): Project | null =>
  data.projects.find(({ id }) => user.currentProjectId === id) || null