'use client'


import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Target, TrendingUp, Clock, Star, BookOpen, Users, Award } from "lucide-react";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import QuickAction from './_components/QuickAtion';
import Suggestions from './_components/Suggestions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { dashboardStats } from '@/actions/interview';


const Dashboard = () => {
  const router  = useRouter();
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<{
    totalInterviewCount: number,
    rating: number,
    accuracy: number,
    recentInterviews: any[]
  }>({totalInterviewCount:0, rating: 0, accuracy: 0, recentInterviews: []})



  useEffect(()=>{
    const fetch = async()=>{
      try{
        const response = await dashboardStats();
        // console.log("response: ", response.data);

        setStats(response?.data)
      }catch(err){
        toast("error while fetching dashboard details")
      }
    }

    fetch();
  },[])







  const recentInterviews = [
    { id: 1, type: "Behavioral", score: 85, date: "2 days ago", duration: "25 min" },
    { id: 2, type: "Technical", score: 78, date: "1 week ago", duration: "45 min" },
    { id: 3, type: "System Design", score: 92, date: "2 weeks ago", duration: "60 min" },
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Welcome back, {session?.user?.name}</h1>
                <p className="text-sm text-gray-600">Ready to ace your next interview?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/dashboard/interview-setup">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start Interview
                </Button>
              </Link>
              <Button variant="outline" className="border-2" 
                onClick={async()=>{
                  await signOut({ redirect: false });
                  router.push("/dashboard");
                }}
              >
                Logout
              </Button>
              </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Interviews</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats?.totalInterviewCount}</div>
                  <p className="text-xs text-muted-foreground">+3 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats?.accuracy}%</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats?.rating}</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Interviews</CardTitle>
                <CardDescription>Your latest practice sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stats?.recentInterviews?.map((interview) => (
                    <div key={interview?.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Play className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{interview?.interviewType} Interview</p>
                          <p className="font-medium">{interview?.duration} min</p>
                          {/* <p className="text-sm text-gray-600">{interview?.createdAt} • {interview?.duration}</p> */}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={interview?.rating >= 5 ? "default" : "secondary"}>
                          {interview?.rating}
                        </Badge>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/interview-history">
                    <Button variant="outline" className="w-full">View All Interviews</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Track your improvement across different skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Behavioral Questions</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Technical Skills</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Communication</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Problem Solving</span>
                    <span>71%</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Personalized Suggestions */}
            <Suggestions/>

            {/* Quick Actions */}
            <QuickAction/>

            {/* Achievement */}
            {/* <Card>
              <CardHeader>
                <CardTitle>Latest Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold">Interview Streak!</h3>
                  <p className="text-sm text-gray-600">5 interviews completed this week</p>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
