// app/components/SessionProviderWrapper.tsx
'use client';

import { SessionProvider } from 'next-auth/react';

interface SessionProviderWrapperProps {
  session: any; // You can specify the type based on your needs
  children: React.ReactNode;
}

const SessionProviderWrapper: React.FC<SessionProviderWrapperProps> = ({ session, children }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
