"use client";

import { useEffect } from "react";
import "./globals.css";

import { appWindow } from "@tauri-apps/api/window";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 h-20 w-screen" data-tauri-drag-region>
          <nav data-tauri-drag-region>
            <Link href="/">HOME</Link>
            <Link href="/">HOME</Link>
            <Link href="/">HOME</Link>
            <Link href="/">HOME</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
