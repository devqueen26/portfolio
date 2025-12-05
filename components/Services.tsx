"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, Globe, Mail, Palette, Star, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Website Template Sales",
      icon: Package,
      price: "One-time fee",
      description: "Ready-to-use Next.js templates for DIY business owners",
      offerings: [
        "Code-only templates",
        "Code + deployment guides",
        "Template bundles",
        "Premium add-ons (animations, forms, booking)"
      ],
      highlight: false
    },
    {
      id: 2,
      title: "One-Time Website Setup",
      icon: Globe,
      price: "One-time fee",
      description: "Full website deployment & optimization (your main upsell)",
      offerings: [
        "Deploy to Cloudflare Pages, Netlify, or Hostinger",
        "Domain & DNS setup with SSL/HTTPS",
        "Website performance optimization",
        "SEO meta setup & sitemap configuration"
      ],
      highlight: true
    },
    {
      id: 3,
      title: '"Get Listed on Google" Service',
      icon: Star,
      price: "One-time fee",
      description: "High-demand local SEO service for small businesses",
      offerings: [
        "Google Business Profile optimization",
        "Maps & reviews setup",
        "Google Search Console submission",
        "Sitemap & indexing request"
      ],
      highlight: false
    },
    {
      id: 4,
      title: "Google Workspace + Domain Setup",
      icon: Mail,
      price: "Setup fee",
      description: "Professional email & domain configuration (no ongoing work)",
      offerings: [
        "Domain purchase & setup",
        "Google Workspace creation",
        "Professional email setup (name@business.com)",
        "MX, SPF, DKIM, DMARC configuration"
      ],
      highlight: false
    },
    {
      id: 5,
      title: "Customization Services",
      icon: Palette,
      price: "One-time or hourly",
      description: "Tailor templates to client brand & needs",
      offerings: [
        "Brand colors, fonts & imagery",
        "Extra pages (About, Services, FAQ)",
        "Photo galleries & animations",
        "Booking & contact form integration"
      ],
      highlight: false
    },
    {
      id: 6,
      title: "Business Starter Package",
      icon: Zap,
      price: "Fixed fee",
      description: "Complete done-for-you package (highest value)",
      offerings: [
        "Domain + Google Workspace setup",
        "Website template + customization",
        "Hosting setup & Google Business Profile",
        "SEO-ready launch"
      ],
      highlight: true
    }
  ];

  return (
    <section id="services" className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Flexible, scalable services designed for small businesses. Choose what works for you—from 
            templates to complete setup packages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  service.highlight 
                    ? "lg:col-span-1 border-2 border-blue-500 shadow-lg" 
                    : "border-slate-200"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-bl">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <Badge variant="secondary" className="text-xs">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.offerings.map((offering, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Additional Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Palette className="w-5 h-5 text-blue-600" />
                Digital Assets Add-On
              </h4>
              <p className="text-slate-700 text-sm mb-3">
                Create a cohesive brand package for small businesses:
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>✓ Logo design (minimal style)</li>
                <li>✓ Social media banners</li>
                <li>✓ Brand color palette</li>
                <li>✓ Favicon + Apple icon packs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Optional Recurring (Premium Add-Ons)
              </h4>
              <p className="text-slate-700 text-sm mb-3">
                High-ticket add-ons if you want recurring revenue:
              </p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>✓ Monthly content updates</li>
                <li>✓ Monthly SEO reports</li>
                <li>✓ Google Workspace admin support</li>
                <li>✓ Domain management advisory</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            All services are one-time fees with no ongoing maintenance required. You own everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Templates
            </Button>
            <Button size="lg" variant="outline">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
