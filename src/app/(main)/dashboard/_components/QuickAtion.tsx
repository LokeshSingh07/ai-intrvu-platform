"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { BookOpen, Users } from "lucide-react";
import Link from "next/link";





const QuickAction = () => {


  return (
    <Card>
        <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
            <Link href="/profile">
                <Button variant="outline" className="w-full justify-start">
                    <Avatar className="h-4 w-4 mr-2" />
                    Update Profile
                </Button>
            </Link>
            <Link href="/learning-center">
                <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learning Center
                </Button>
            </Link>
            <Link href="/community">
                <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Community
                </Button>
            </Link>
        </CardContent>
    </Card>
  );
};

export default QuickAction;


