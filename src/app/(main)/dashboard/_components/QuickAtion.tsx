"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, UserCircle } from "lucide-react";
import Link from "next/link";





const QuickAction = () => {


  return (
    <Card className="border border-[#12151B]/10 rounded-xl shadow-none">
        <CardHeader>
            <CardTitle className="dash-display text-[#12151B]">Quick actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
            <Link href="/profile">
                <Button variant="outline" className="dash-body w-full justify-start border-[#12151B]/15 text-[#12151B] hover:bg-[#FAF8F4] rounded-lg">
                    <UserCircle className="h-4 w-4 mr-2 text-[#6B7280]" strokeWidth={1.75} />
                    Update profile
                </Button>
            </Link>
            <Link href="/learning-center">
                <Button variant="outline" className="dash-body w-full justify-start border-[#12151B]/15 text-[#12151B] hover:bg-[#FAF8F4] rounded-lg">
                    <BookOpen className="h-4 w-4 mr-2 text-[#6B7280]" strokeWidth={1.75} />
                    Learning center
                </Button>
            </Link>
            <Link href="/community">
                <Button variant="outline" className="dash-body w-full justify-start border-[#12151B]/15 text-[#12151B] hover:bg-[#FAF8F4] rounded-lg">
                    <Users className="h-4 w-4 mr-2 text-[#6B7280]" strokeWidth={1.75} />
                    Community
                </Button>
            </Link>
        </CardContent>
    </Card>
  );
};

export default QuickAction;