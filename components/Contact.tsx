"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourwebsite.com",
      href: "mailto:hello@yourwebsite.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+1 (555) 000-0000",
      href: "https://wa.me/15550000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Your City, Your Country",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s build your online presence together. Choose a template or
            discuss a custom solution.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="block"
              >
                <Card className="border-0 bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                    <p className="font-semibold text-gray-900">{info.value}</p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Purchase?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Browse all templates, get instant access, and start customizing.
            Secure checkout powered by Buy Me A Coffee.
          </p>
          <a
            href="https://buymeacoffee.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 font-semibold h-12 px-8"
            >
              Shop All Templates
            </Button>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">What&apos;s Included?</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Complete source code</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Lifetime access & updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Documentation & setup guide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span>Email support</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">Support & Customization</h4>
            <p className="text-gray-600">
              Need help with setup or customization? I offer affordable customization
              services to tailor any template to your exact needs.
            </p>
            <a href="mailto:hello@yourwebsite.com">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Get Customization Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
