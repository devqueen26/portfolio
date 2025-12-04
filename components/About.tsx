"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Target, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description:
        "Built with Next.js, React, and Tailwind for optimal performance",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Lightning-quick loading times and perfect on all devices",
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description:
        "Designed to help small businesses attract and retain customers",
    },
    {
      icon: Users,
      title: "Easy to Manage",
      description: "Simple, intuitive interfaces that you can update yourself",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with business acumen to create
            websites that work for small businesses.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Who I Am
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I&apos;m a web developer with 3+ years of hands-on experience
                creating beautiful, functional websites. With a business degree
                background, I understand what drives results for small
                businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                What I Offer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pre-designed, professionally crafted website templates
                specifically built for small businesses. From portfolios to
                service sites, I&apos;ve got you covered. Each template is
                mobile-responsive, SEO-friendly, and ready to customize.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why Choose Me
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Quick setup - launch in days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Affordable pricing tailored for small businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Full customization available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Ongoing support and updates</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-gray-50 hover:bg-blue-50 transition-colors"
                >
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <p className="text-gray-600">Templates</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
