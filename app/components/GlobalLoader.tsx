"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When pathname changes → page navigation started
    setLoading(true);

    // Simulate render time (you can adjust or remove timeout)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms looks smooth

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-teal-600 border-t-transparent" />
    </div>
  );
}
