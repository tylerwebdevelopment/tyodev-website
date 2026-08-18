import { cn } from '@/lib/utils';
import React from 'react'

// Custom Spacing Rules
const SPACING = {
  sm: 'py-16 lg:py-20',
  md: 'py-20 lg:py-32',
  lg: 'py-24 lg:py-40',
} as const;

// Section Props
type SectionProps = {
  // Custom Spacing
  spacing?: keyof typeof SPACING;
  children: React.ReactNode;
  className?: string;
}


const Section = ({
  children,
  className,
  spacing = "md"
} : SectionProps) => {


  return (
    <section className={cn(SPACING[spacing], className)}>
      {children}
    </section>
  )
}

export default Section