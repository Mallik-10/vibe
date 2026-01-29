"use client";

import { AlertOctagon, RotateCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background p-4 text-foreground">
      
      {/* Background Animated Orbs (Using your global.css moveInCircle) */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="animate-first absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-second absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Main Error Card */}
      <div className="w-full max-w-100 border-2 border-border bg-card p-8 shadow-xl rounded-[var(--radius)]">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <AlertOctagon size={40} />
          </div>
          
          <h1 className="font-sans text-3xl font-black uppercase tracking-tighter">
            System Failure
          </h1>
          <p className="mt-2 text-balance text-muted-foreground font-medium">
            An unexpected error occurred. The requested operation could not be completed at this time.
          </p>
        </div>

        <hr className="my-8 border-border/30" />

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="group flex w-full items-center justify-center gap-2 border-2 border-border bg-primary px-6 py-4 font-mono font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:shadow-none"
          >
            <RotateCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            REBOOT SYSTEM
          </button>

          <Link 
            href="/"
            className="flex w-full items-center justify-center gap-2 border-2 border-border bg-secondary px-6 py-4 font-mono font-bold text-secondary-foreground shadow-sm transition-all hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:shadow-none"
          >
            <ArrowLeft size={20} />
            RETURN TO BASE
          </Link>
        </div>

        {/* Subtle Decorative Footer */}
        <div className="mt-8 flex justify-between font-mono text-[10px] uppercase opacity-40">
          <span>Err_Log_V4.0</span>
          <span>Terminal: {new Date().getHours()}:{new Date().getMinutes()}</span>
        </div>
      </div>

      {/* Responsive Footer text */}
      <p className="mt-8 font-mono text-xs text-muted-foreground">
        Ready for manual override.
      </p>
    </div>
  );
}