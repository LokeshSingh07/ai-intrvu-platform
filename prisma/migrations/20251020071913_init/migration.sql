/*
  Warnings:

  - The values [STARTUP,SMALL,ENTERPRISE] on the enum `CompanySize` will be removed. If these variants are still used in the database, this will fail.
  - The values [JUNIOR,MID,SENIOR,LEAD] on the enum `ExperienceLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [FRONTEND,BACKEND,TESTER,system-design,DSA] on the enum `FocusArea` will be removed. If these variants are still used in the database, this will fail.
  - The values [text-chat] on the enum `InterviewMode` will be removed. If these variants are still used in the database, this will fail.
  - The values [system-design] on the enum `InterviewType` will be removed. If these variants are still used in the database, this will fail.
  - The values [frontend-developer,backend-developer,fullstack-developer,system-designer,data-scientist,devops-engineer] on the enum `JobPosition` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CompanySize_new" AS ENUM ('startup', 'small', 'enterprise');
ALTER TABLE "User" ALTER COLUMN "targetCompanySize" TYPE "CompanySize_new" USING ("targetCompanySize"::text::"CompanySize_new");
ALTER TYPE "CompanySize" RENAME TO "CompanySize_old";
ALTER TYPE "CompanySize_new" RENAME TO "CompanySize";
DROP TYPE "public"."CompanySize_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "ExperienceLevel_new" AS ENUM ('junior', 'mid', 'senior', 'lead');
ALTER TABLE "User" ALTER COLUMN "experienceLevel" TYPE "ExperienceLevel_new" USING ("experienceLevel"::text::"ExperienceLevel_new");
ALTER TABLE "InterviewSession" ALTER COLUMN "experienceLevel" TYPE "ExperienceLevel_new" USING ("experienceLevel"::text::"ExperienceLevel_new");
ALTER TYPE "ExperienceLevel" RENAME TO "ExperienceLevel_old";
ALTER TYPE "ExperienceLevel_new" RENAME TO "ExperienceLevel";
DROP TYPE "public"."ExperienceLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FocusArea_new" AS ENUM ('frontend', 'backend', 'tester', 'system_design', 'dsa');
ALTER TABLE "User" ALTER COLUMN "focusArea" TYPE "FocusArea_new"[] USING ("focusArea"::text::"FocusArea_new"[]);
ALTER TYPE "FocusArea" RENAME TO "FocusArea_old";
ALTER TYPE "FocusArea_new" RENAME TO "FocusArea";
DROP TYPE "public"."FocusArea_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "InterviewMode_new" AS ENUM ('text_chat', 'voice', 'video');
ALTER TABLE "InterviewSession" ALTER COLUMN "interviewMode" TYPE "InterviewMode_new" USING ("interviewMode"::text::"InterviewMode_new");
ALTER TYPE "InterviewMode" RENAME TO "InterviewMode_old";
ALTER TYPE "InterviewMode_new" RENAME TO "InterviewMode";
DROP TYPE "public"."InterviewMode_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "InterviewType_new" AS ENUM ('behavioral', 'technical', 'system_design');
ALTER TABLE "InterviewSession" ALTER COLUMN "interviewType" TYPE "InterviewType_new" USING ("interviewType"::text::"InterviewType_new");
ALTER TYPE "InterviewType" RENAME TO "InterviewType_old";
ALTER TYPE "InterviewType_new" RENAME TO "InterviewType";
DROP TYPE "public"."InterviewType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "JobPosition_new" AS ENUM ('frontend_developer', 'backend_developer', 'fullstack_developer', 'tester', 'system_designer', 'data_scientist', 'devops_engineer');
ALTER TABLE "InterviewSession" ALTER COLUMN "jobPosition" TYPE "JobPosition_new" USING ("jobPosition"::text::"JobPosition_new");
ALTER TYPE "JobPosition" RENAME TO "JobPosition_old";
ALTER TYPE "JobPosition_new" RENAME TO "JobPosition";
DROP TYPE "public"."JobPosition_old";
COMMIT;
