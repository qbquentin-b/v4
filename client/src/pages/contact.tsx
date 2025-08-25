import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import { MapPin, Phone, Mail, Facebook, Car, Bus, Accessibility, Map } from "lucide-react";
import { z } from "zod";

const contactFormSchema = insertContactMessageSchema;
type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors de l'envoi de votre message.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nous contacter
            </h1>
            <p className="text-lg text-gray-600 animation-delay-200 animate-fade-in-up">
              Une question ? Un besoin spécifique ? N'hésitez pas à nous écrire
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-sm hover-lift animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom complet" 
                              className="rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="votre.email@exemple.com" 
                              className="rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sujet *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Objet de votre message" 
                              className="rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Décrivez votre demande..."
                              className="rounded-xl resize-none"
                              rows={6}
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Map and Address */}
            <div className="space-y-6 animate-fade-in-right">
              {/* Map Placeholder */}
              <Card className="shadow-sm hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Nous trouver
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Map className="text-gray-400 text-3xl mb-2 mx-auto animate-float" />
                      <p className="text-gray-600">Carte interactive</p>
                      <p className="text-sm text-gray-500">47 Avenue du Royaume-Uni, 80090 Amiens</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card className="shadow-sm hover-lift animate-fade-in-right animation-delay-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Accès
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Car className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">En voiture</p>
                      <p className="text-gray-600 text-sm">Parking gratuit disponible</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Bus className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Transport public</p>
                      <p className="text-gray-600 text-sm">Arrêt bus ligne 3 - Royaume-Uni</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Accessibility className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Accessibilité</p>
                      <p className="text-gray-600 text-sm">Cabinet accessible PMR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gradient-to-br from-primary/5 to-transparent hover-lift animate-fade-in-right animation-delay-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Suivez-nous</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <a 
                      href="https://facebook.com/CabinetSomErgo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors hover-scale"
                    >
                      <Facebook size={16} />
                      <span className="text-sm font-medium">Cabinet Som'Ergo</span>
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Retrouvez nos actualités, conseils et témoignages sur notre page Facebook
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <p className="text-gray-600">03 XX XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">contact@somergo.fr</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adresse</p>
                      <p className="text-gray-600">47 Avenue du Royaume-Uni<br />80090 Amiens</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
