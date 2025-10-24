'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  Volume2,
  MessageSquare,
  Loader2,
  Play,
  PhoneOff,
} from "lucide-react";
import { toast } from "sonner";
import { vapi } from "@/lib/vapi.sdk";
import { Separator } from "@/components/ui/separator";




enum CallStatus{
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED'
}

interface SavedMessage{
  role: 'user' | 'system' | 'assistant';
  content: string;
}


export default function LiveInterview() {
  const router = useRouter();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)
  const [messages, setMessages] = useState<SavedMessage[]>([])
  
  

  useEffect(()=>{
    const onCallStart = ()=> setCallStatus(CallStatus.ACTIVE)
    const onCallEnd = ()=> setCallStatus(CallStatus.FINISHED)

    const onMessage = (message: any)=>{
      if(message?.type == 'transcript' && message?.transcript == 'final'){
        const newMessage = {role: message?.role, content: message?.transcript}
        setMessages((prev)=> [...prev, newMessage]);
      }
    }

    const onSpeechStart = ()=> setIsSpeaking(true);
    const onSpeechEnd = ()=> setIsSpeaking(false);

    const onError = (error: Error)=> {console.log("error : ", error)}


    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('message', onMessage);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);
    vapi.on('error', onError);

    
    return ()=>{
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('message', onMessage);
      vapi.off('speech-start', onSpeechStart);
      vapi.off('speech-end', onSpeechEnd);
      vapi.off('error', onError);
    }

  },[])



  useEffect(()=>{
    if(callStatus === CallStatus.FINISHED){
      router.push("/dashboard");
    }

  },[messages, callStatus])


  const handleCall = async ()=>{
    try {
      setCallStatus(CallStatus.CONNECTING);
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);

      // await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID, {
      //   variableValues: {
      //     username: "Lokesh",
      //     jobPosition: "Frontend Developer",
      //     techStack: "React, Next.js, TypeScript",
      //     difficultyLevel: "Medium"
      //   },
      // });
    }
    catch (err) {
      console.error("Call start failed:", err);
      setCallStatus(CallStatus.INACTIVE);
    } 
  }
  
  const handleDisconnect = async ()=>{
    setCallStatus(CallStatus.FINISHED);
    await vapi.stop();
  }

  const lastestMessage = messages[messages.length-1]?.content;
  const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || CallStatus.FINISHED





  return (
<div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-xl shadow-lg border rounded-2xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold">
            🎤 AI Mock Interview
          </CardTitle>
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant={
                callStatus === CallStatus.ACTIVE
                  ? "default"
                  : callStatus === CallStatus.CONNECTING
                  ? "secondary"
                  : "outline"
              }
            >
              {callStatus}
            </Badge>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-6 pt-6">
          {/* Call Control Buttons */}
          <div className="flex justify-center">
            {isCallInactiveOrFinished ? (
              <Button
                size="lg"
                onClick={handleCall}
                disabled={callStatus === CallStatus.CONNECTING}
                className="gap-2"
              >
                {callStatus === CallStatus.CONNECTING ? (
                  <>
                    <Loader2 className="animate-spin" size={18} /> Connecting...
                  </>
                ) : (
                  <>
                    <Play size={18} /> Start Interview
                  </>
                )}
              </Button>
            ) : (
              <Button
                size="lg"
                variant="destructive"
                onClick={handleDisconnect}
                className="gap-2"
              >
                <PhoneOff size={18} /> End Interview
              </Button>
            )}
          </div>

          {/* Speaking Indicator */}
          {callStatus === CallStatus.ACTIVE && (
            <div className="flex flex-col items-center space-y-3">
              <div
              >
                {isSpeaking ? (
                  <Mic className="text-green-500" size={30} />
                ) : (
                  <MicOff className="text-muted-foreground" size={30} />
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {isSpeaking ? "AI is speaking..." : "Listening..."}
              </p>
            </div>
          )}

          {/* Transcript Section */}
          {messages.length > 0 && (
            <div className="border rounded-lg bg-muted/40 p-4 space-y-3 max-h-60 overflow-y-auto">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-3 py-2 max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!messages.length && callStatus === CallStatus.ACTIVE && (
            <div className="text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
              <MessageSquare size={18} />
              Waiting for messages...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
