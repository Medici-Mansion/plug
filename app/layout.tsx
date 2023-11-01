import "./globals.css";

import Link from "next/link";
import WindowHeader from "@/components/window/window-header";
import Setup from "@/components/window/setup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-teal-300/10">
      <body className="flex bg-transparent h-full min-h-[100dvh] p-[2px]">
        <div className="hidden md:flex flex-col border-r-[1px]">
          <WindowHeader className="pl-16">SIDEBAR SECTION</WindowHeader>
        </div>
        <main className="grow">
          <WindowHeader className="pl-16 md:pl-0 w-full">
            <Link draggable={false} className="" href="/">
              HOME
            </Link>
            <Link draggable={false} className="" href="/">
              HOME
            </Link>
            <Link draggable={false} className="" href="/">
              HOME
            </Link>
            <Link draggable={false} className="" href="/">
              HOME
            </Link>
          </WindowHeader>
          {children}
        </main>
        <Setup />
      </body>
    </html>
  );
}
