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

export default function AccountsPage() {
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
    <div className=" min-h-screen bg-[#ede8d0] ">
      
      <div className=" pt-2 px-6 grid  grid-cols-1 lg:grid-cols-[35%_65%] gap-4">
        {/* LEFT PANEL */}
        <Card className="rounded-2xl shadow-lg shadow-black/50">
          <CardHeader>
            <CardTitle className="text-xl">Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] items-center gap-3">
              <Label className="font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Please enter full account name" />
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] items-center gap-3">
              <Label>Address (Pind)</Label>
              <Input placeholder="Please enter address" />
            </div>

            {/* Account Type */}
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] items-center gap-3">
              <Label className="font-medium">
                Account type <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Please Select Account type" />
                </SelectTrigger>
                <SelectContent>
                  {accountTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Opening Balance */}
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] items-center gap-3">
              <Label>Opening Balance</Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={balance}
                  onChange={(e) => handleBalanceChange(e.target.value)}
                  placeholder="0.00"
                />
                <Select defaultValue="CR">
                  <SelectTrigger className="w-[90px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CR">CR</SelectItem>
                    <SelectItem value="DR">DR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Add Button */}
            <div className="pt-4">
              <Button className="w-full rounded-xl">Add</Button>
            </div>
          </CardContent>
        </Card>

        {/* RIGHT PANEL */}
        <Card className="rounded-2xl shadow-lg shadow-black/50">
          <CardHeader>
            <CardTitle className="text-xl">Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Address (Pind)</TableHead>
                  <TableHead>Account type</TableHead>
                  <TableHead className="text-right">
                    Opening Balance
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>Account {i + 1}</TableCell>
                    <TableCell>Village {i + 1}</TableCell>
                    <TableCell>
                      {accountTypes[i % accountTypes.length]}
                    </TableCell>
                    <TableCell className="text-right">
                      {(Math.random() * 10000).toFixed(2)} CR
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}
