"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, X } from "lucide-react";

const Resume = () => {
  return (
    <Card className="border border-[#12151B]/10 rounded-xl shadow-none">
      <CardHeader>
        <CardTitle className="profile-display flex items-center text-[#12151B]">
          <FileText className="h-5 w-5 mr-2 text-[#3E63DD]" strokeWidth={1.75} />
          Resume
        </CardTitle>
        <CardDescription className="profile-body text-[#6B7280]">
          Upload your resume for personalized interview questions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-[#12151B]/15 rounded-lg p-8 text-center hover:border-[#3E63DD]/40 transition-colors duration-200">
          <FileText className="h-12 w-12 text-[#8A8F9C] mx-auto mb-4" strokeWidth={1.75} />
          <h3 className="profile-display text-lg font-medium text-[#12151B] mb-2">Upload resume</h3>
          <p className="profile-body text-[#6B7280] mb-4">Drag and drop your resume or click to browse</p>
          <Button className="profile-body bg-[#12151B] hover:bg-[#1E222B] text-white rounded-lg">
            <Upload className="h-4 w-4 mr-2" strokeWidth={1.75} />
            Choose file
          </Button>
          <p className="profile-mono text-[11px] tracking-wide uppercase text-[#8A8F9C] mt-3">
            PDF, DOC, or DOCX up to 10MB
          </p>
        </div>

        {/* Current Resume */}
        <div className="mt-4 p-4 bg-[#F1EFEA] rounded-lg flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-5 w-5 text-[#12151B] mr-3" strokeWidth={1.75} />
            <div>
              <p className="profile-body font-medium text-[#12151B]">john_doe_resume.pdf</p>
              <p className="profile-mono text-xs text-[#8A8F9C] mt-0.5">Uploaded 2 days ago · 1.2MB</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="profile-body border border-[#12151B]/15 text-[#12151B] hover:bg-white rounded-lg"
            >
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border border-[#12151B]/15 text-[#12151B] hover:bg-white rounded-lg"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resume;