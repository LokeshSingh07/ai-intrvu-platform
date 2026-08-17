"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Star, BookOpen, Users } from "lucide-react";




const Suggestions = () => {


  const suggestions = [
    { title: "Practice the STAR method", icon: Star },
    { title: "Technical questions", icon: BookOpen },
    { title: "Behavioral skills", icon: Users },
    { title: "System design", icon: Target },
  ];



  return (
    <Card className="border border-[#12151B]/10 rounded-xl shadow-none">
        <CardHeader>
            <CardTitle className="dash-display text-[#12151B]">Recommended for you</CardTitle>
            <CardDescription className="dash-body text-[#6B7280]">Based on your recent performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-[#12151B]/10 rounded-lg hover:bg-[#FAF8F4] transition-colors cursor-pointer">
                    <div className="h-8 w-8 bg-[#3E63DD]/10 rounded-full flex items-center justify-center shrink-0">
                      <suggestion.icon className="h-4 w-4 text-[#3E63DD]" strokeWidth={1.75} />
                    </div>
                    <span className="dash-body text-sm font-medium text-[#12151B]">{suggestion.title}</span>
                  </div>
            ))}
        </CardContent>
    </Card>
  );
};

export default Suggestions;