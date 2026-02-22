import { useState } from 'react';
import { useGetProvidersSortedByPayment } from '../hooks/useQueries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Users, AlertCircle, Mail, Phone, MessageSquare, DollarSign, Award } from 'lucide-react';
import type { VirtualAssistantProvider } from '../backend';

export function ProvidersPage() {
  const { data: providers, isLoading, error } = useGetProvidersSortedByPayment();
  const [selectedProvider, setSelectedProvider] = useState<VirtualAssistantProvider | null>(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
          <Users className="w-10 h-10 text-primary" />
          Virtual Assistant Providers
        </h1>
        <p className="text-lg text-muted-foreground">
          Connect with top-rated providers ranked by competitive pricing
        </p>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Failed to load providers. Please try again later.
          </AlertDescription>
        </Alert>
      )}

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-10 w-full" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : providers && providers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <Card
              key={provider.id}
              className="hover:shadow-lg transition-all border-2 hover:border-primary/50 relative overflow-hidden"
            >
              {index < 3 && (
                <div className="absolute top-4 right-4">
                  <Badge variant="default" className="gap-1 shadow-md">
                    <Award className="w-3 h-3" />
                    Top {index + 1}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl pr-16">{provider.name}</CardTitle>
                <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-3">
                  <DollarSign className="w-5 h-5" />
                  <span>${provider.paymentPerClient}</span>
                  <span className="text-sm text-muted-foreground font-normal">per client</span>
                </div>
                <CardDescription className="text-base leading-relaxed min-h-[4rem]">
                  {provider.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setSelectedProvider(provider)}
                  className="w-full gap-2"
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Contact Provider
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              No providers available at the moment.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Contact Dialog */}
      <Dialog open={!!selectedProvider} onOpenChange={() => setSelectedProvider(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Contact {selectedProvider?.name}</DialogTitle>
            <DialogDescription>
              Get in touch with this provider to discuss your virtual assistant needs
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-2 text-primary font-semibold text-xl">
              <DollarSign className="w-6 h-6" />
              <span>${selectedProvider?.paymentPerClient}</span>
              <span className="text-sm text-muted-foreground font-normal">per client</span>
            </div>
            
            <div className="p-4 rounded-lg bg-accent/20 border border-accent/30">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Information
              </h4>
              <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                {selectedProvider?.contactInfo}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm text-muted-foreground">
                {selectedProvider?.description}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setSelectedProvider(null)}
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
