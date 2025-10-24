"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Plus, X, User, Briefcase, Target } from "lucide-react";
import { useState } from "react";



const JobPreference = () => {

    const [selectedRoles, setSelectedRoles] = useState<string[]>(['Software Engineer', 'Frontend Developer']);
    const [selectedIndustries, setSelectedIndustries] = useState<string[]>(['Technology', 'Fintech']);

    const roles = [
        'Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
        'Data Scientist', 'Product Manager', 'UX Designer', 'DevOps Engineer',
        'Mobile Developer', 'QA Engineer', 'Technical Lead', 'Engineering Manager'
    ];

    const industries = [
        'Technology', 'Fintech', 'Healthcare', 'E-commerce', 'Gaming',
        'Media', 'Education', 'Automotive', 'Real Estate', 'Consulting'
    ];

    const handleRoleToggle = (role: string) => {
        setSelectedRoles(prev => 
        prev.includes(role) 
            ? prev.filter(r => r !== role)
            : [...prev, role]
        );
    };

    const handleIndustryToggle = (industry: string) => {
        setSelectedIndustries(prev => 
        prev.includes(industry) 
            ? prev.filter(i => i !== industry)
            : [...prev, industry]
        );
    };


  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center">
            <Briefcase className="h-5 w-5 mr-2" />
                  Job Preferences
            </CardTitle>
            <CardDescription>Select roles and industries you&apos;re interested in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <Label className="text-base font-medium">Target Roles</Label>
                <p className="text-sm text-gray-600 mb-3">Choose the positions you&apos;re preparing for</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedRoles.map((role) => (
                      <Badge key={role} variant="default" className="px-3 py-1">
                        {role}
                        <button
                          onClick={() => handleRoleToggle(role)}
                          className="ml-2 text-white hover:text-gray-200"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                </div>
                <Select onValueChange={(value) => handleRoleToggle(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Add a role" />
                    </SelectTrigger>
                    <SelectContent>
                        {roles.filter(role => !selectedRoles.includes(role)).map((role) => (
                            <SelectItem key={role} value={role}>{role}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className="text-base font-medium">Industries</Label>
                <p className="text-sm text-gray-600 mb-3">Select industries you&apos;re targeting</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {selectedIndustries.map((industry) => (
                    <Badge key={industry} variant="secondary" className="px-3 py-1">
                        {industry}
                        <button
                          onClick={() => handleIndustryToggle(industry)}
                          className="ml-2 hover:text-gray-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                    </Badge>
                    ))}
                </div>
                <Select onValueChange={(value) => handleIndustryToggle(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Add an industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.filter(industry => !selectedIndustries.includes(industry)).map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
    </Card>
  );
};

export default JobPreference;
