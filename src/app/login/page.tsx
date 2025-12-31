"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import heroImage from "@/components/ui/photos/bg.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { on } from "events";

export default function LoginPage() {
  const router = useRouter();
  const handleClick = () => {
    // Logic here (e.g., analytics logging)
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-black flex">
      {/* Main container */}
      <div className="flex w-full">

        {/* LEFT PANEL — hidden on mobile */}
        <div className="hidden lg:flex lg:w-[60%] bg-[#1f1f1f] items-center justify-center p-12">
          <div className="w-full max-w-[520px]">
            <Card className="overflow-hidden border-0 bg-[#1f1f1f] rounded-2xl">
              <div className="relative h-96 bg-[#1f1f1f]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 text-white">
                  <h4 className="text-2xl tracking-tight">LINEAGE</h4>
                  <h5 className="text-sm tracking-tight">INVESTMENTS</h5>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT PANEL — full width on mobile */}
        <div className="w-full lg:w-[40%] bg-black flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-[360px]">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-center mb-4">
                  MSC login
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Secure entry for verified partners
                </p>

                <div className="space-y-4">
                  

                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3"
                    onClick={handleClick}
                  >
                    <span>Login with Google</span>

                    
                  </Button>

                  <Link href="/sign-up">
                    
                    <Button className="w-full">Sign-up</Button>
                  </Link>
                

                  
                </div>

                <p className="text-xs text-center text-muted-foreground mt-6">
                  Terms &amp; Conditions apply. System activity is logged for security.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
