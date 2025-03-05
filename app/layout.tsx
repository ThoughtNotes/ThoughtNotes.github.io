import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Thought Notes – Transform Your Ideas into Clear Notes with AI",
    description: "Give voice to your thoughts with Thought Notes: write or record a draft and let the AI generate a title and structure for you. Sign up now for early access!",
    keywords: [
      "AI note taker",
      "note-taking app",
      "AI note writing",
      "note organization",
      "smart notes",
      "AI note management",
      "effective note-taking",
      "AI for students and professionals",
      "best note-taking app",
    ],
    openGraph: {
      title: "Thought Notes – Organize Your Ideas with AI",
      description:
        "With Thought Notes, your drafts turn into clear, useful notes thanks to artificial intelligence.",
      url: "https://thoughtnotes.com",
      type: "website",
      images: [
        {
          url: "https://thoughtnotes.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Thought Notes – Take Notes with AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Thought Notes – Organize Your Ideas with AI",
      description:
        "With Thought Notes, your drafts turn into clear, useful notes thanks to artificial intelligence.",
      images: ["https://thoughtnotes.com/twitter-image.jpg"],
    },
    robots: "index, follow",
    canonical: "https://thoughtnotes.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
         <html lang="en" suppressHydrationWarning className="scroll-smooth">
         <head>
            <script type="application/ld+json">
                {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "name": "Thought Notes",
                  "operatingSystem": "Web",
                  "applicationCategory": "Productivity",
                  "description": "Write or record a note and let Thought Notes' AI automatically generate a clear title and logical structure.",
                  "url": "https://", // set correct URL
                  "image": "https://thoughtnotes.com/og-image.jpg",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.00",
                    "priceCurrency": "EUR",
                    "availability": "https://schema.org/PreOrder",
                    "seller": {
                      "@type": "Organization",
                      "name": "Thought Notes"
                    }
                  }
                })}
            </script>
            </head>
     <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
