"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Star, BookOpen, Users } from "lucide-react";




const Suggestions = () => {


  const suggestions = [
    { title: "Practice STAR Method", icon: Star, color: "bg-yellow-500" },
    { title: "Technical Questions", icon: BookOpen, color: "bg-blue-500" },
    { title: "Behavioral Skills", icon: Users, color: "bg-green-500" },
    { title: "System Design", icon: Target, color: "bg-purple-500" },
  ];



  return (
    <Card>
        <CardHeader>
            <CardTitle>Recommended for You</CardTitle>
            <CardDescription>Based on your recent performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className={`h-8 w-8 ${suggestion.color} rounded-full flex items-center justify-center`}>
                      <suggestion.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{suggestion.title}</span>
                  </div>
            ))}
        </CardContent>
    </Card>
  );
};

export default Suggestions;


