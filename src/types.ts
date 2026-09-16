export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'kitchen' | 'demolition' | 'prep' | 'waste';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TrustCommitment {
  id: string;
  title: string;
  description?: string;
  iconName: 'home' | 'neighbors' | 'order';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
}
