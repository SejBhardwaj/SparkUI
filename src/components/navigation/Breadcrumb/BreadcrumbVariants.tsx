import React from 'react';
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';

export const SlashBreadcrumb: React.FC<Omit<BreadcrumbProps, 'separator'>> = (props) => (
  <Breadcrumb separator="/" {...props} />
);

export const ChevronBreadcrumb: React.FC<Omit<BreadcrumbProps, 'separator'>> = (props) => (
  <Breadcrumb separator="›" {...props} />
);

export const DotBreadcrumb: React.FC<Omit<BreadcrumbProps, 'separator'>> = (props) => (
  <Breadcrumb separator="•" {...props} />
);

export const ArrowBreadcrumb: React.FC<Omit<BreadcrumbProps, 'separator'>> = (props) => (
  <Breadcrumb separator="→" {...props} />
);
