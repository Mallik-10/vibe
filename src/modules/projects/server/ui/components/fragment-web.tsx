import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Fragment } from "@/generated/prisma";
import { ExternalLink, RefreshCcwIcon, Clock, RefreshCw, ChevronRight } from "lucide-react";
import { useState } from "react";


interface Props {
  data: Fragment;
}


export function FragmentView({ data }: Props) {
  const [fragmentKey, setFragmentKey] = useState(0);
  const [copied, setCopied] = useState(false);
  const E2B_TIMEOUT_MINUTES = 5

  const onRefresh = () => {
    setFragmentKey((prev) => prev + 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.sandboxUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isExpired = (): boolean=> {
    const createdDate = new Date(data.createdAt).getTime();
    const now = new Date().getTime();
    const diffInMinutes = (now - createdDate) / (1000 * 60);
    return diffInMinutes > E2B_TIMEOUT_MINUTES;
  };


  return (
    isExpired() ? 
        <div className="min-h-screen flex items-center justify-center bg-accent- p-4 font-sans">
            {/* Main Card */}
            <div className="relative group max-w-md w-full">
                {/* Decorative Background Glow */}
                <div className="absolute -inset-1 bg-linear-to-r from-accent to- rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                {/* Icon Header */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-slate-800 rounded-full ring-8 ring-slate-800/50">
                    <Clock className="w-10 h-10 text-cyan-400 animate-pulse" />
                    </div>
                </div>
        
                {/* Text Content */}
                <div className="text-center space-y-3">
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                    Preview Session Expired
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                    For your security, preview links are temporary. This session ended 
                    because of inactivity or the time limit was reached.
                    </p>
                </div>
        
                {/* Divider */}
                <div className="my-8 border-t border-slate-800" />
        
                {/* Action Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-3 px-6 rounded-xl transition-all active:scale-[0.98]">
                    <RefreshCw size={18} />
                    Renew Access
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800 text-slate-400 hover:text-white py-3 px-6 rounded-xl transition-all text-sm font-medium group">
                    Return to main page
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                {/* Footer Note */}
                <p className="mt-6 text-center text-[11px] uppercase tracking-widest text-slate-600 font-bold">
                    Reference ID: #PX-99201
                </p>
                </div>
            </div>
        </div> 
        :
        <div className="flex flex-col w-full h-full">
        <div className="p-2 border-b bg-sidebar flex items-center gap-x-2">
            <Button size="sm" variant="outline" onClick={onRefresh}>
            <RefreshCcwIcon />
            </Button>
            <Hint text="Click to Copy link" side="bottom" align="center">
            <Button
                size="sm"
                variant="outline"
                onClick={handleCopy}
                disabled={!data.sandboxUrl || copied}
                className="flex-1 justify-start text-center font-normal"
            >
                <span className="truncate">{data.sandboxUrl}</span>
            </Button>
            </Hint>
            <Hint text="Open in a new tab" side="bottom" align="start">
            <Button
                size="sm"
                variant="outline"
                disabled={!data.sandboxUrl}
                onClick={() => {
                if (!data.sandboxUrl) return;
                window.open(data.sandboxUrl, "_blank");
                }}
            >
                <ExternalLink />
            </Button>
            </Hint>
        </div>
        <iframe
            key={fragmentKey}
            className="h-full w-full"
            sandbox="allow-forms allow-scripts allow-same-origin"
            loading="lazy"
            src={data.sandboxUrl}
        />
        </div>
  );
}
