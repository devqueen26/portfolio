"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex py-6 items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2  bg-blue-100 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Professional Web Templates for Your Business
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Beautiful Websites,{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium, ready-to-use web templates designed specifically for small
            businesses. Launch your online presence in days, not months.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#templates">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 h-12 px-8 text-base"
              >
                View Templates
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-gray-300"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>3+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>100% Customizable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
