"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/questions", label: "问题" },
  { href: "/post", label: "发布" },
  { href: "/dashboard", label: "用户中心" },
  { href: "/admin", label: "管理后台" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-950 text-white">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            Give an Insight
            <span className="block text-xs font-normal text-slate-500">
              真实经验咨询
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950",
                pathname === item.href && "bg-slate-100 text-slate-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/questions">
              <Search className="h-4 w-4" />
              浏览问题
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/post">发布问题</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="打开导航"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t bg-white md:hidden">
          <div className="container grid gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm text-slate-700",
                  pathname === item.href && "bg-slate-100 text-slate-950"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
