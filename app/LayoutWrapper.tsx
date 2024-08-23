'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import PublicLayout from "./publicLayout";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = ['/', '/features', '/upgrade', '/about'].includes(pathname);

  if (isPublicRoute) {
    return <PublicLayout>{children}</PublicLayout>;
  }

  return <>{children}</>;
}