import "@/styles/globals.css";
import { Metadata } from "next";

import Layout from "@/components/layout/Layout";
import { Providers } from "@/components/provider/Providers";
import { map } from "zod";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <Providers>
        <body>
          <Layout>{children}</Layout>
        </body>
      </Providers>
    </html>
  );
}
