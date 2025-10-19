import { z } from "zod";
import { CompanySize, ExperienceLevel, FocusArea } from "@/types/enum";



export const ProfileSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  bio: z.string().optional(),
  image: z.string().url().optional(),
  experienceLevel: z.nativeEnum(ExperienceLevel),
  focusArea: z.array(z.nativeEnum(FocusArea)).min(1, "Select at least one focus area"),
  targetCompanySize: z.nativeEnum(CompanySize),
  resume: z.string().url().optional(),
  targetRoles: z.array(z.string()).min(1, "Add at least one target role"),
  industry: z.array(z.string()).min(1, "Add at least one industry"),
});


// Interface
export type ProfileSchemaType = z.infer<typeof ProfileSchema>;