import {z} from "zod"
import {
  FocusArea,
  CompanySize,
  ExperienceLevel,
  InterviewType,
  DifficultyLevel,
  Duration,
  InterviewMode,
  JobPosition,
} from "@/types/enum";



export const InterviewSetupSchema = z.object({
    interviewType: z.nativeEnum(InterviewType),
    difficultyLevel:z.nativeEnum(DifficultyLevel),
    duration: z.nativeEnum(Duration),
    interviewMode: z.nativeEnum(InterviewMode),
    jobPosition: z.nativeEnum(JobPosition),
    jobDescription: z.string(),
    experienceLevel: z.nativeEnum(ExperienceLevel),
    techStack: z.array(z.string()).min(1),
    targetCompanySize: z.nativeEnum(CompanySize).optional()

})




export type InterviewSetupType = z.infer<typeof InterviewSetupSchema>