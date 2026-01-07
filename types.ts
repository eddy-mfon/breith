import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}
