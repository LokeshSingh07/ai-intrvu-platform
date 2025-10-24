"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import  { Target } from "lucide-react";



const SidebarProfile = () => {



  return (
    <div className="space-y-6">
        {/* Interview Goals */}
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Interview Goals
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select defaultValue="mid">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                        <SelectItem value="lead">Lead/Manager (8+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                    <Label htmlFor="targetCompany">Target Company Size</Label>
                    <Select defaultValue="medium">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                        <SelectItem value="small">Small (51-200 employees)</SelectItem>
                        <SelectItem value="medium">Medium (201-1000 employees)</SelectItem>
                        <SelectItem value="large">Large (1000+ employees)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                    <Label>Focus Areas</Label>
                    <div className="space-y-2 mt-2">
                        {['Technical Skills', 'Behavioral Questions', 'System Design', 'Leadership'].map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                            <Checkbox id={area} defaultChecked={area === 'Technical Skills'} />
                            <Label htmlFor={area} className="text-sm">{area}</Label>
                        </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
            <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Basic Info</span>
                        <Badge variant="default">Complete</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Resume</span>
                        <Badge variant="default">Complete</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Job Preferences</span>
                        <Badge variant="default">Complete</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">Goals</span>
                        <Badge variant="secondary">Incomplete</Badge>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <p className="text-2xl font-bold text-green-600">85%</p>
                    <p className="text-sm text-gray-600">Profile Complete</p>
                </div>
            </CardContent>
        </Card>

        {/* Save Button */}
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Save Changes
        </Button>
    </div>
  );
};

export default SidebarProfile;
