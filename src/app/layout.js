// import { Geist, Geist_Mono } from "next/font/google";

import { Roboto } from "next/font/google";


import "./globals.css";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // todos los pesos
  style: ["normal", "italic"], // opcional, si quieres cursivas
  variable: "--font-roboto",   // se usa como CSS variable para Tailwind
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Transportes Danfer",
  description: "Transporte de cargar en México",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${roboto.className}`}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Transportes Danfer",
              "url": "https://www.transportesdanfer.com",
              "logo": "https://www.transportesdanfer.com/logo.png"
            })
          }}
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
