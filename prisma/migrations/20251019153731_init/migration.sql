-- CreateEnum
CREATE TYPE "FocusArea" AS ENUM ('FRONTEND', 'BACKEND', 'TESTER', 'SYSTEM DESIGN', 'DSA');

-- CreateEnum
CREATE TYPE "CompanySize" AS ENUM ('STARTUP', 'SMALL', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('JUNIOR', 'MID', 'SENIOR', 'LEAD');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('BEHAVIORAL', 'TECHNICAL', 'SYSTEM DESIGN');

-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Duration" AS ENUM ('15 Minutes', '30 Minutes', '45 Minutes', '60 Minutes', '90 Minutes', '120 Minutes');

-- CreateEnum
CREATE TYPE "InterviewMode" AS ENUM ('textChat', 'voice', 'video');

-- CreateEnum
CREATE TYPE "JobPosition" AS ENUM ('Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Tester', 'System Designer', 'Data Scientist', 'DevOps Engineer');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT,
    "resume" TEXT,
    "verifyCode" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "industry" TEXT[],
    "targetRoles" TEXT[],
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "targetCompanySize" "CompanySize" NOT NULL,
    "focusArea" "FocusArea"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewSession" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "interviewType" "InterviewType" NOT NULL,
    "difficultyLevel" "DifficultyLevel" NOT NULL,
    "duration" "Duration" NOT NULL,
    "interviewMode" "InterviewMode" NOT NULL,
    "jobPosition" "JobPosition" NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "techStack" TEXT[],
    "faceMoveCount" TEXT,
    "feedback" TEXT,
    "rating" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InterviewSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "interviewSessionId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "correctAnswer" TEXT NOT NULL,
    "userAnswer" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "InterviewSession" ADD CONSTRAINT "InterviewSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_interviewSessionId_fkey" FOREIGN KEY ("interviewSessionId") REFERENCES "InterviewSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
