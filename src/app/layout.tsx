import type { Metadata } from "next";
import { Space_Grotesk, Inter, Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vennu Manikanta Pavan — Full Stack Developer & AI/ML Engineer",
  description:
    "Portfolio of Vennu Manikanta Pavan — B.Tech CSE (AI & ML) undergraduate at CMR Institute of Technology, Hyderabad. Full-stack developer and AI/ML engineer crafting intelligent digital solutions, real-time analytics platforms, and deep learning architectures.",
  keywords: [
    "Vennu Manikanta Pavan",
    "Manikanta Pavan",
    "Pavan Vennu",
    "Full Stack Developer",
    "AI & ML Engineer",
    "Machine Learning",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TensorFlow",
    "CryptoSphere",
    "TraceLens",
    "Portfolio",
  ],
  authors: [{ name: "Vennu Manikanta Pavan" }],
  openGraph: {
    title: "Vennu Manikanta Pavan — Full Stack Developer & AI/ML Engineer",
    description:
      "Full-stack web development, machine learning pipelines, and intelligent systems by Vennu Manikanta Pavan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vennu Manikanta Pavan — Full Stack Developer & AI/ML Engineer",
    description:
      "Full-stack web development, machine learning pipelines, and intelligent systems by Vennu Manikanta Pavan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} ${josefinSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-void text-cloud overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
