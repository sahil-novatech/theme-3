import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "../providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Wow from "@/components/Wow";
import GoTop from "@/components/GoTop";
import QueryProvider from "@/services/QueryProvider";
import { Suspense } from "react";
import { GlobalProvider } from "@/context/GlobalContext";
import { LoginModalProvider } from "@/context/LoginModalContext";
import QueryLoader, { FullPageLoader } from "@/components/Loader";
import ProgressProvider from "@/components/ProgressBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <QueryProvider>
            <QueryLoader />
            <LoginModalProvider>  
              <GlobalProvider>
                <Suspense fallback={<FullPageLoader />}>
                  <ProgressProvider>
                    <div className="relative flex flex-col p-3">
                      <Header />
                      <div className="my-3 ">
                        {children}
                      </div>
                      <Footer />
                      <Wow />
                      <GoTop />
                    </div>
                  </ProgressProvider>
                </Suspense>
              </GlobalProvider>
            </LoginModalProvider>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
