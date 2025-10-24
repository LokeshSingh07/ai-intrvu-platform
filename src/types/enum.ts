// types/interview.ts

export enum FocusArea {
  FRONTEND = "frontend",
  BACKEND = "backend",
  TESTER = "tester",
  SYSTEM_DESIGN = "system_design",
  DSA = "dsa",
}

export enum CompanySize {
  STARTUP = "startup",
  SMALL = "small",
  ENTERPRISE = "enterprise",
}

export enum ExperienceLevel {
  JUNIOR = "junior",
  MID = "mid",
  SENIOR = "senior",
  LEAD = "lead",
}

export enum InterviewType {
  BEHAVIORAL = "behavioral",
  TECHNICAL = "technical",
  SYSTEM_DESIGN = "system_design",
}

export enum DifficultyLevel {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum Duration {
  MIN_15 = 15,
  MIN_30 = 30,
  MIN_45 = 45,
  MIN_60 = 60,
  MIN_90 = 90,
  MIN_120 = 120,
}

export enum InterviewMode {
  TEXT_CHAT = "text_chat",
  VOICE = "voice",
  VIDEO = "video",
}

export enum JobPosition {
  FRONTEND_DEVELOPER = "frontend_developer",
  BACKEND_DEVELOPER = "backend_developer",
  FULLSTACK_DEVELOPER = "fullstack_developer",
  TESTER = "tester",
  SYSTEM_DESIGNER = "system_designer",
  DATA_SCIENTIST = "data_scientist",
  DEVOPS_ENGINEER = "devops_engineer",
}
