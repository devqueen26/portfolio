"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: "Agency Showcase",
      description: "Perfect for creative agencies and freelancers",
      image: "🎨",
      tags: ["Agency", "Portfolio", "Modern"],
      demo: "https://yourgithub.io/agency-template",
      github: "https://github.com/yourusername/agency-template",
      price: "$29",
    },
    {
      id: 2,
      name: "Service Business",
      description: "Ideal for local service providers and consultants",
      image: "🔧",
      tags: ["Services", "Business", "Clean"],
      demo: "https://yourgithub.io/service-template",
      github: "https://github.com/yourusername/service-template",
      price: "$29",
    },
    {
      id: 3,
      name: "E-Commerce Basics",
      description: "Simple shop template for small online retailers",
      image: "🛍️",
      tags: ["Shop", "E-Commerce", "Store"],
      demo: "https://yourgithub.io/shop-template",
      github: "https://github.com/yourusername/shop-template",
      price: "$39",
    },
    {
      id: 4,
      name: "Restaurant & Cafe",
      description: "Showcasing menus, locations, and bookings",
      image: "🍽️",
      tags: ["Restaurant", "Food", "Booking"],
      demo: "https://yourgithub.io/restaurant-template",
      github: "https://github.com/yourusername/restaurant-template",
      price: "$29",
    },
    {
      id: 5,
      name: "SaaS Landing",
      description: "Launch your software with a stunning landing page",
      image: "🚀",
      tags: ["SaaS", "Landing", "Tech"],
      demo: "https://yourgithub.io/saas-template",
      github: "https://github.com/yourusername/saas-template",
      price: "$39",
    },
    {
      id: 6,
      name: "Personal Blog",
      description: "Share your expertise with a professional blog",
      image: "📝",
      tags: ["Blog", "Content", "Simple"],
      demo: "https://yourgithub.io/blog-template",
      github: "https://github.com/yourusername/blog-template",
      price: "$19",
    },
  ];

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Website Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from professionally designed templates built to convert
            visitors into customers. All templates are fully responsive and
            customizable.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
            >
              {/* Image Section */}
              <div className="h-48 bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {template.image}
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {template.name}
                  </h3>
                  <span className="text-lg font-bold text-blue-600">
                    {template.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex gap-3 pt-0">
                <a
                  href={template.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </a>
                <a
                  href={template.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gray-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Can&apos;t find exactly what you need? I create custom templates
            too.
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Custom Template
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
