"use client"

import { XCircle } from "lucide-react";

export function InlineError({ message = "Data fetch failed" }: { message?: string }) {
  return (
    <div className="flex flex-col items-start gap-3 border-2 border-border bg-card p-4 shadow-sm rounded-[var(--radius)] w-full max-w-[280px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive text-destructive-foreground">
        <XCircle size={24} />
      </div>
      <div className="space-y-1">
        <h4 className="font-sans font-bold text-sm uppercase tracking-wider">Error</h4>
        <p className="font-mono text-xs text-muted-foreground leading-tight">{message}</p>
      </div>
      <button 
        onClick={() => window.location.reload()}
        className="mt-2 text-[10px] font-bold uppercase underline decoration-2 underline-offset-4 hover:text-primary transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}