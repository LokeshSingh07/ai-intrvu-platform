import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 50 interviews/month",
        "Basic AI analysis",
        "Standard templates",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 interviews/month",
        "Advanced AI analysis",
        "Custom question sets",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited interviews",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Advanced security",
        "Custom training"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap');
        .price-display { font-family: 'Space Grotesk', sans-serif; }
        .price-body { font-family: 'IBM Plex Sans', sans-serif; }
        .price-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="price-mono text-xs tracking-[0.18em] uppercase text-[#3E63DD] mb-4">
            Pricing
          </div>
          <h2 className="price-display text-4xl md:text-5xl font-bold text-[#12151B] mb-6 leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="price-body text-lg text-[#6B7280] leading-relaxed">
            Choose the plan that fits your team. Start with a free trial and scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl transition-shadow duration-300 ${
                plan.popular
                  ? 'border-2 border-[#12151B] shadow-[0_20px_60px_-15px_rgba(18,21,27,0.2)]'
                  : 'border border-[#12151B]/10 shadow-none hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <Badge className="price-mono absolute -top-3 left-1/2 -translate-x-1/2 bg-[#35D0BA] text-[#12151B] text-[10px] tracking-wide uppercase px-4 py-1 rounded-full font-medium">
                  Most popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6 pt-9">
                <CardTitle className="price-display text-xl font-semibold text-[#12151B] mb-4">{plan.name}</CardTitle>
                <div className="price-display text-4xl font-bold text-[#12151B] mb-2">
                  {plan.price === "Custom" ? plan.price : (
                    <>
                      <span className="text-base font-normal text-[#8A8F9C] align-top">$</span>
                      {plan.price}
                      {plan.period && <span className="price-body text-base font-normal text-[#8A8F9C]">/{plan.period}</span>}
                    </>
                  )}
                </div>
                <p className="price-body text-sm text-[#6B7280]">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[#3E63DD] mr-3 flex-shrink-0" strokeWidth={2.25} />
                      <span className="price-body text-sm text-[#374151]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`price-body w-full py-3 rounded-lg font-semibold ${
                    plan.popular
                      ? 'bg-[#12151B] hover:bg-[#1E222B] text-white'
                      : 'border border-[#12151B]/15 bg-white text-[#12151B] hover:bg-[#FAF8F4]'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact sales" : "Start free trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="price-mono text-xs text-[#8A8F9C] tracking-wide">
            All plans include a 14-day free trial · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;