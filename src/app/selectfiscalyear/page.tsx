"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function SelectFiscalYear() {
  const [isOpen, setIsOpen] = useState(false);
  const [fiscalYear, setFiscalYear] = useState('2024-2025');
  const [options, setOptions] = useState(['2023-2024', '2024-2025', '2025-2026']); 

  useEffect(() => {
    const savedYear = localStorage.getItem('fiscalYear');
    if (savedYear) setFiscalYear(savedYear);
  }, []);

  const handleSave = () => {
    localStorage.setItem('fiscalYear', fiscalYear);
    setIsOpen(false);
    window.location.reload(); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* Using asChild lets the DialogTrigger pass its functionality 
          to the div, which will then inherit Bootstrap's dropdown styling.
      */}
      <DialogTrigger asChild>
        <div className="w-full cursor-pointer">
          Select Fiscal Year
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Select Fiscal Year</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <select
            value={fiscalYear}
            onChange={(e) => setFiscalYear(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            {options.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}