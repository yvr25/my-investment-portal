"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import TopBar from "../top-bar/page"

const accountTypes = [
  "Farmer",
  "Bank",
  "Yearly Expense A/c",
  "Long term Expense A/c",
]

export default function Dashboard() {
  const [balance, setBalance] = React.useState("0.00")

  const handleBalanceChange = (value: string) => {
    // allow only numbers with 2 decimal places, no negatives
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setBalance(value)
    }
  }

  return (
    <>
    <TopBar />
    <div className=" min-h-screen bg-[#ede8d0]">
        </div>
    </>
  )
}
