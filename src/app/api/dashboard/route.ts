// app/api/dashboard/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.user?.email) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: User not logged in", data: null },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: User ID missing in session", data: null },
        { status: 401 }
      );
    }

    // Run everything in parallel — none of these depend on each other
    const [
      totalInterviews,
      ratedSessions,
      totalAnswers,
      correctAnswers,
      recentInterviews,
    ] = await Promise.all([
      prisma.interviewSession.count({ where: { userId } }),

      prisma.interviewSession.findMany({
        where: { userId, rating: { not: null } },
        select: { rating: true },
      }),

      prisma.question.count({
        where: { interviewSession: { userId } },
      }),

      prisma.question.count({
        where: { interviewSession: { userId }, isCorrect: true },
      }),

      prisma.interviewSession.findMany({
        where: { userId },
        take: 4,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    // rating is String? in the schema — parse defensively
    const parsedRatings = ratedSessions
      .map((s) => Number(s.rating))
      .filter((r) => !isNaN(r));

    const averageRating =
      parsedRatings.length > 0
        ? Number(
            (parsedRatings.reduce((sum, val) => sum + val, 0) / parsedRatings.length).toFixed(1)
          )
        : null;

    const accuracy =
      totalAnswers > 0 ? Number(((correctAnswers / totalAnswers) * 100).toFixed(2)) : null;

    const result = {
      totalInterviewCount: totalInterviews,
      rating: averageRating,
      accuracy,
      recentInterviews,
    };

    return NextResponse.json(
      { success: true, message: "Interview sessions fetched successfully", data: result },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in dashboardStats ->", err);
    return NextResponse.json(
      { success: false, message: "Internal server error", data: null },
      { status: 500 }
    );
  }
}