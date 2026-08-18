// Tailwind-merge, clsx prevents class conflicts
import { cn } from "@/lib/utils";


import React from "react";
// Setup Container Props
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
// Create Container
const Container = ({ children, className = "" }: ContainerProps) => {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-6 lg:px-10 xl:px-12', className)}>{children}</div>;
};

export default Container;
