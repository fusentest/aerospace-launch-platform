import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Zap, Rocket, Crown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  icon: React.ReactNode;
  badge?: string;
  features: {
    name: string;
    included: boolean;
  }[];
  cta: string;
  highlighted?: boolean;
}

const Subscription = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for getting started',
      price: billingCycle === 'monthly' ? 29 : 290,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      icon: <Zap className="h-6 w-6" />,
      features: [
        { name: 'Up to 5 missions tracked', included: true },
        { name: 'Basic analytics dashboard', included: true },
        { name: 'Email support', included: true },
        { name: 'Real-time notifications', included: false },
        { name: 'Advanced reporting', included: false },
        { name: 'API access', included: false },
      ],
      cta: 'Get Started',
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For growing teams',
      price: billingCycle === 'monthly' ? 79 : 790,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      icon: <Rocket className="h-6 w-6" />,
      badge: 'POPULAR',
      features: [
        { name: 'Up to 50 missions tracked', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Real-time notifications', included: true },
        { name: 'Advanced reporting', included: true },
        { name: 'API access', included: false },
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      price: billingCycle === 'monthly' ? 299 : 2990,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      icon: <Crown className="h-6 w-6" />,
      features: [
        { name: 'Unlimited missions tracked', included: true },
        { name: 'Custom analytics & dashboards', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Real-time notifications', included: true },
        { name: 'Advanced reporting & insights', included: true },
        { name: 'Full API access', included: true },
      ],
      cta: 'Contact Sales',
    },
  ];

  const faqs = [
    {
      question: 'Can I change my plan anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Pro and Enterprise plans include a 14-day free trial. No credit card required.'
    },
    {
      question: 'What if I need more missions tracked?',
      answer: 'Contact our sales team for custom plans. We can accommodate organizations of any size.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel anytime. Your access continues until the end of your billing period.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold glow-cyan">AeroLaunch</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect plan for your mission control needs
            </p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-4 bg-card/50 border border-border/50 rounded-lg p-2">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${
                    billingCycle === 'annual'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Annual
                </button>
                {billingCycle === 'annual' && (
                  <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
                    Save 17%
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/50 md:scale-105'
                    : 'bg-card/50 border-border/50 hover:border-border'
                } backdrop-blur-sm`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground border-0">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary-foreground'}`}>
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>

                  {/* Features List */}
                  <div className="space-y-3 pt-6 border-t border-border/50">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-foreground' : 'text-muted-foreground/50'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Comparison */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-16">
            <CardHeader>
              <CardTitle>Detailed Feature Comparison</CardTitle>
              <CardDescription>See what's included in each plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Starter</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Pro</th>
                      <th className="text-center py-3 px-4 font-semibold text-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Missions Tracked', starter: '5', pro: '50', enterprise: 'Unlimited' },
                      { name: 'Analytics Dashboard', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                      { name: 'Real-time Notifications', starter: '✗', pro: '✓', enterprise: '✓' },
                      { name: 'Advanced Reporting', starter: '✗', pro: '✓', enterprise: '✓' },
                      { name: 'API Access', starter: '✗', pro: '✗', enterprise: '✓' },
                      { name: 'Support', starter: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated' },
                      { name: 'Team Members', starter: '1', pro: 'Up to 5', enterprise: 'Unlimited' },
                      { name: 'Custom Integration', starter: '✗', pro: '✗', enterprise: '✓' },
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-border/30 hover:bg-secondary/5">
                        <td className="py-3 px-4 text-foreground font-medium">{row.name}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{row.starter}</td>
                        <td className="py-3 px-4 text-center text-foreground font-medium">{row.pro}</td>
                        <td className="py-3 px-4 text-center text-foreground font-medium">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="bg-card/50 border-border/50 backdrop-blur-sm hover:border-border/75 transition-colors">
                  <CardHeader className="cursor-pointer">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50 backdrop-blur-sm">
              <CardContent className="pt-12 pb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to launch?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Start with any plan and upgrade anytime. All plans include a 14-day free trial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => navigate('/profile')}
                  >
                    View Your Profile
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/')}
                  >
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
