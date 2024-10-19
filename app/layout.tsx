// app/layout.tsx

import type { Metadata } from "next";
import { Nunito } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import { getServerSession } from "next-auth"; // Import the getServerSession
import SessionProviderWrapper from "./components/SessionProviderWrapper"; // Import the wrapper

const nunito = Nunito({
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], 
  variable: "--font-nunito", 
});

export const metadata: Metadata = {
  title: "Dwellix",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(); // Get the session
  const currentUser = await getCurrentUser(); // Get current user data

  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <ClientOnly>
          <SessionProviderWrapper session={session}> {/* Wrap children with SessionProvider */}
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
            {children} {/* Render children here */}
          </SessionProviderWrapper>
        </ClientOnly>
      </body>
    </html>
  );
}
