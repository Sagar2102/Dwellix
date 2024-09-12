import type { Metadata } from "next";
import { Nunito } from "next/font/google"; // Import Nunito from Google Fonts
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./components/providers/ToasterProvider";

const nunito = Nunito({
  subsets: ["latin"], // Specify the subset if needed
  weight: [ "200", "300", "400", "500", "600", "700", "800", "900"], // List each weight explicitly
  variable: "--font-nunito", // Define a custom CSS variable
});

export const metadata: Metadata = {
  title: "Dwellix",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <ClientOnly>
          <ToasterProvider />
          {/* <Modal isOpen={true} title="Hello World" actionLabel="Submit"/> */}
          <RegisterModal />
        <Navbar />
        </ClientOnly>
        
        {children}
      </body>
    </html>
  );
}
