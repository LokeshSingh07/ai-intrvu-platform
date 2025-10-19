
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Clock, Shield, Target, Users, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced natural language processing evaluates responses for technical skills, communication, and cultural fit."
    },
    {
      icon: Clock,
      title: "Real-Time Feedback",
      description: "Get instant insights and recommendations during the interview process to make informed decisions."
    },
    {
      icon: Shield,
      title: "Bias-Free Assessment",
      description: "Eliminate unconscious bias with objective, data-driven evaluation criteria and standardized scoring."
    },
    {
      icon: Target,
      title: "Custom Skill Testing",
      description: "Tailor interviews to specific roles with customizable question sets and competency frameworks."
    },
    {
      icon: Users,
      title: "Collaborative Hiring",
      description: "Enable team-based evaluation with shared scorecards and centralized candidate management."
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect with your existing ATS and HR tools for a streamlined workflow and data synchronization."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our AI Interview Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage the power of artificial intelligence to revolutionize your hiring process 
            and build stronger, more diverse teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
