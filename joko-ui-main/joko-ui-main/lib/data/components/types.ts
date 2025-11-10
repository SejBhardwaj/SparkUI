import React from 'react';

// Type definitions for components
export interface ComponentVariant {
  id: string;
  name: string;
  code: string;
  contributor?: string;
}

export interface ComponentType {
  slug: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  variants: ComponentVariant[];
  pagination?: {
    enabled: boolean;
    itemsPerPage: number;
    showPageNumbers?: boolean;
    showInfo?: boolean;
  };
}

export interface ComponentCategory {
  slug: string;
  name: string;
  icon?: React.ReactNode;
  description: string;
  components: ComponentType[];
}
