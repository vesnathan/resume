import ClientWrapper from "./ClientWrapper";
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: '360px',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export const metadata = {
  title: "Nate Loudon - Web Developer",
  description: "Personal profile site for Nate Loudon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //

  return (
    <html lang="en">
      <body className="bg-[#2c2d2]">
        {" "}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
