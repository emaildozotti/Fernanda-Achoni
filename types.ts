import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
}

export interface MethodologyStep {
  title: string;
  description: React.ReactNode;
}

export interface PainPoint {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}