import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Wow from "@/components/Wow";
import GoTop from "@/components/GoTop";
import QueryProvider from "@/services/QueryProvider";
import { Suspense } from "react";
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
              <Suspense fallback={<FullPageLoader />}>
                <ProgressProvider>
                  <div className="relative flex flex-col p-3">
                    <div className="my-3 ">
                      {children}
                    </div>
                    <Wow />
                    <GoTop />
                  </div>
                </ProgressProvider>
              </Suspense>
          </QueryProvider>
        </Providers>
      </body>
    </html>
  );
}
