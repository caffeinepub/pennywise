import { useNavigate } from '@tanstack/react-router';
import { Building2, Users, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground mb-6 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Professional Virtual Assistant Marketplace</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
          Connect with Top Virtual
          <br />
          Assistant Providers
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover trusted brands and connect with professional virtual assistant providers
          ranked by their competitive rates and quality service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate({ to: '/providers' })}
            className="gap-2 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            Find Providers
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate({ to: '/brands' })}
            className="gap-2 text-lg px-8"
          >
            <Building2 className="w-5 h-5" />
            View Brands
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pennywise?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Trusted Brands</CardTitle>
              <CardDescription>
                Browse verified brands that work with professional virtual assistant providers
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Top Providers</CardTitle>
              <CardDescription>
                Connect with virtual assistant providers ranked by competitive pricing and quality
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Quick Contact</CardTitle>
              <CardDescription>
                Easily reach out to providers with transparent contact information and rates
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Find Your Perfect Match?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Explore our curated list of virtual assistant providers and start building
          your dream team today.
        </p>
        <Button
          size="lg"
          onClick={() => navigate({ to: '/providers' })}
          className="gap-2 text-lg px-8 shadow-lg hover:shadow-xl transition-shadow"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
