
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start with a free trial and scale as you grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border shadow-lg'} transition-all duration-300 hover:shadow-xl`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-1">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {plan.price === "Custom" ? plan.price : (
                    <>
                      <span className="text-sm font-normal text-gray-600">$</span>
                      {plan.price}
                      {plan.period && <span className="text-lg font-normal text-gray-600">/{plan.period}</span>}
                    </>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'border-2 border-gray-300 hover:border-blue-400 bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
