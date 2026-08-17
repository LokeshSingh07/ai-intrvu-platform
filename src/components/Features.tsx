'use client'
import { Brain, Clock, Shield, Target, Users, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-powered analysis",
      description: "Natural language processing evaluates responses for technical skill, communication, and fit."
    },
    {
      icon: Clock,
      title: "Real-time feedback",
      description: "Get instant insight and recommendations during the interview, not days after."
    },
    {
      icon: Shield,
      title: "Bias-free assessment",
      description: "Objective, data-driven scoring criteria replace unconscious bias with a standardized rubric."
    },
    {
      icon: Target,
      title: "Custom skill testing",
      description: "Tailor interviews to a role with custom question sets and competency frameworks."
    },
    {
      icon: Users,
      title: "Collaborative hiring",
      description: "Team-based evaluation with shared scorecards and centralized candidate records."
    },
    {
      icon: Zap,
      title: "Seamless integration",
      description: "Connects to your existing ATS and HR tools, so data syncs without manual entry."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap');
        .feat-display { font-family: 'Space Grotesk', sans-serif; }
        .feat-body { font-family: 'IBM Plex Sans', sans-serif; }
        .feat-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="feat-mono text-xs tracking-[0.18em] uppercase text-[#3E63DD] mb-4">
            Why teams switch
          </div>
          <h2 className="feat-display text-4xl md:text-5xl font-bold text-[#12151B] mb-6 leading-tight">
            Built for how hiring
            <br />
            actually happens
          </h2>
          <p className="feat-body text-lg text-[#6B7280] leading-relaxed">
            Every interview scored the same way, every candidate treated
            fairly, and every result where your team can actually find it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 border-t border-l border-[#12151B]/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 border-r border-b border-[#12151B]/10 hover:bg-[#FAF8F4] transition-colors duration-200"
            >
              {/* accent line that draws in on hover, ties the card back to the brand color */}
              <span className="absolute top-0 left-0 h-[2px] w-0 bg-[#3E63DD] group-hover:w-full transition-all duration-300 ease-out" />

              <div className="w-10 h-10 rounded-lg bg-[#3E63DD]/[0.08] flex items-center justify-center mb-5 group-hover:bg-[#3E63DD]/[0.12] transition-colors">
                <feature.icon className="w-5 h-5 text-[#3E63DD]" strokeWidth={1.75} />
              </div>
              <h3 className="feat-display text-lg font-semibold text-[#12151B] mb-3">
                {feature.title}
              </h3>
              <p className="feat-body text-[#6B7280] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;