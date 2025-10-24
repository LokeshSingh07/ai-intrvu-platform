"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, X } from "lucide-react";




const Resume = () => {


  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Resume
            </CardTitle>
            <CardDescription>Upload your resume for personalized interview questions</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Resume</h3>
                <p className="text-gray-600 mb-4">Drag and drop your resume or click to browse</p>
                <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                </Button>
                <p className="text-sm text-gray-500 mt-2">PDF, DOC, or DOCX up to 10MB</p>
            </div>

            {/* Current Resume */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-600 mr-3" />
                    <div>
                        <p className="font-medium">john_doe_resume.pdf</p>
                        <p className="text-sm text-gray-600">Uploaded 2 days ago • 1.2MB</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View</Button>
                    <Button variant="outline" size="sm">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
};

export default Resume;
