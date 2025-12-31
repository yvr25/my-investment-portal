"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster, toast } from "sonner";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BusinessPage() {
  const [businessName, setBusinessName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [otp, setOtp] = useState("");

  // Auto-generate display name
  useEffect(() => {
    if (!businessName) return;

    const generated = businessName
      .trim()
      .split(/\s+/)
      .map(word => word[0]?.toUpperCase())
      .join("")
      .slice(0, 4);

    setDisplayName(generated);
  }, [businessName]);

  const handleVerify = () => {
    if (otp === "123") {
      toast.success("Verified");
      setDialogOpen(false);
      setOtp("");
    } else {
      toast.error("Please enter correct code");
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 space-y-6">

              {/* Business Info */}
              <div className="space-y-4">
                <div>
                  <Label className="m-1">Legal Business Name *</Label>
                  <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger asChild>
                      <Input
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Enter legal business name"
                      />
                    </TooltipTrigger>
                  <TooltipContent className="max-w-[300px] text-sm">
                    <p>
                    Please enter exact Legal Business name. This will later used to verify,
                    if you wish to use trading (Mandi) platform. You will not be able to
                    change this after 30 Days of registration.
                    </p>
                  </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                  {   /// end of textfield ///
                  }
                </div>

                <div>
                  <Label className="m-1">Legal Business License</Label>
                  <Input placeholder="Enter license number" />
                </div>

                <div>
                  <Label className="m-1">Business Display Name *</Label>
                  <Input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Business display name"
                  />
                </div>
              </div>

              <Separator />

              {/* Contact Info */}
              <div className="space-y-4">
                <div>
                  <Label>Primary Email</Label>
                  <Input value="xyz@gmail.com" disabled />
                </div>

                <div>
                  <Label className="my-1">Legal Business Address</Label>
                  <Input placeholder="Enter business address" />
                </div>

                <div className="space-y-2">
                  <Label className="my-1">Back-up Email *</Label>
                  <div className="flex gap-3">
                    <Input placeholder="Enter backup email" />
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(true)}
                    >
                      Verify it
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="my-1">Primary Phone *</Label>
                  <div className="flex gap-3">
                    <Input placeholder="Enter phone number" />
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(true)}
                    >
                      Verify it
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-1 flex flex-col sm:flex-row gap-4 justify-end">
                <Button variant="outline">Sign-out</Button>
                
                <Link href="/dashboard" passHref>
      <Button asChild>
        <span>Proceed to portal</span>
      </Button>
    </Link>
              </div>

            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="rounded-2xl shadow-lg flex items-center justify-center">
            <CardContent className="p-12">
              <h2 className="text-2xl font-semibold text-center">
                Coming up
              </h2>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* OTP DIALOG */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verify</DialogTitle>
          </DialogHeader>

          <p className="text-sm text-muted-foreground">
            Please enter OTP/Code sent to your email/Phone
          </p>

          <Input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter code"
            className="mt-4"
          />

          <div className="mt-6 flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => {
                setDialogOpen(false);
                setOtp("");
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleVerify}>Verify</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
