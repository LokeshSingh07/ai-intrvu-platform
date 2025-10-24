/*
  Warnings:

  - The values [EASY,MEDIUM,HARD] on the enum `DifficultyLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [15 Minutes,30 Minutes,45 Minutes,60 Minutes,90 Minutes,120 Minutes] on the enum `Duration` will be removed. If these variants are still used in the database, this will fail.
  - The values [SYSTEM DESIGN] on the enum `FocusArea` will be removed. If these variants are still used in the database, this will fail.
  - The values [textChat] on the enum `InterviewMode` will be removed. If these variants are still used in the database, this will fail.
  - The values [BEHAVIORAL,TECHNICAL,SYSTEM DESIGN] on the enum `InterviewType` will be removed. If these variants are still used in the database, this will fail.
  - The values [Frontend Developer,Backend Developer,Fullstack Developer,Tester,System Designer,Data Scientist,DevOps Engineer] on the enum `JobPosition` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `sessionId` on the `InterviewSession` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "DifficultyLevel_new" AS ENUM ('easy', 'medium', 'hard');
ALTER TABLE "InterviewSession" ALTER COLUMN "difficultyLevel" TYPE "DifficultyLevel_new" USING ("difficultyLevel"::text::"DifficultyLevel_new");
ALTER TYPE "DifficultyLevel" RENAME TO "DifficultyLevel_old";
ALTER TYPE "DifficultyLevel_new" RENAME TO "DifficultyLevel";
DROP TYPE "public"."DifficultyLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Duration_new" AS ENUM ('15', '30', '45', '60', '90', '120');
ALTER TABLE "InterviewSession" ALTER COLUMN "duration" TYPE "Duration_new" USING ("duration"::text::"Duration_new");
ALTER TYPE "Duration" RENAME TO "Duration_old";
ALTER TYPE "Duration_new" RENAME TO "Duration";
DROP TYPE "public"."Duration_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FocusArea_new" AS ENUM ('FRONTEND', 'BACKEND', 'TESTER', 'system-design', 'DSA');
ALTER TABLE "User" ALTER COLUMN "focusArea" TYPE "FocusArea_new"[] USING ("focusArea"::text::"FocusArea_new"[]);
ALTER TYPE "FocusArea" RENAME TO "FocusArea_old";
ALTER TYPE "FocusArea_new" RENAME TO "FocusArea";
DROP TYPE "public"."FocusArea_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "InterviewMode_new" AS ENUM ('text-chat', 'voice', 'video');
ALTER TABLE "InterviewSession" ALTER COLUMN "interviewMode" TYPE "InterviewMode_new" USING ("interviewMode"::text::"InterviewMode_new");
ALTER TYPE "InterviewMode" RENAME TO "InterviewMode_old";
ALTER TYPE "InterviewMode_new" RENAME TO "InterviewMode";
DROP TYPE "public"."InterviewMode_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "InterviewType_new" AS ENUM ('behavioral', 'technical', 'system-design');
ALTER TABLE "InterviewSession" ALTER COLUMN "interviewType" TYPE "InterviewType_new" USING ("interviewType"::text::"InterviewType_new");
ALTER TYPE "InterviewType" RENAME TO "InterviewType_old";
ALTER TYPE "InterviewType_new" RENAME TO "InterviewType";
DROP TYPE "public"."InterviewType_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "JobPosition_new" AS ENUM ('frontend-developer', 'backend-developer', 'fullstack-developer', 'tester', 'system-designer', 'data-scientist', 'devops-engineer');
ALTER TABLE "InterviewSession" ALTER COLUMN "jobPosition" TYPE "JobPosition_new" USING ("jobPosition"::text::"JobPosition_new");
ALTER TYPE "JobPosition" RENAME TO "JobPosition_old";
ALTER TYPE "JobPosition_new" RENAME TO "JobPosition";
DROP TYPE "public"."JobPosition_old";
COMMIT;

-- AlterTable
ALTER TABLE "InterviewSession" DROP COLUMN "sessionId";
