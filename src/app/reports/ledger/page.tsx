"use client"

import * as React from "react"
import TopBar from "../../top-bar/page"

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
  TableFooter,
} from "@/components/ui/table"

/* ------------------ PLACEHOLDER DATA ------------------ */

const accounts = [
  "Farmer A",
  "Bank Punjab",
  "Expense Account",
  "Long Term Expense",
]

const ledgerRows = [
  {
    id: 1,
    date: "2024-04-01",
    narration: "Opening Balance",
    credit: 0,
    debit: 0,
    balance: "10,000 CR",
  },
  {
    id: 2,
    date: "2024-04-05",
    narration: "Cash Received",
    credit: 5000,
    debit: 0,
    balance: "15,000 CR",
  },
  {
    id: 3,
    date: "2024-04-10",
    narration: "Expense Paid",
    credit: 0,
    debit: 2000,
    balance: "13,000 CR",
  },
]

/* ------------------ COMPONENT ------------------ */

export default function LedgerPage() {
  const [fromDate, setFromDate] = React.useState("")
  const [toDate, setToDate] = React.useState("")
  const [account, setAccount] = React.useState<string | undefined>()

  const creditTotal = ledgerRows.reduce((t, r) => t + r.credit, 0)
  const debitTotal = ledgerRows.reduce((t, r) => t + r.debit, 0)

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#d3d3ff] pt-2 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">Ledger</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* From */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>From</Label>
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              {/* To */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>To</Label>
                <Input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              {/* Account */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label className="font-medium">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Select value={account} onValueChange={setAccount}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    {accounts.map((a) => (
                      <SelectItem key={a} value={a}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <Button className="flex-1 rounded-xl">
                  Display
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => {
                    setFromDate("")
                    setToDate("")
                    setAccount(undefined)
                  }}
                >
                  Clear
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">
                {account ?? "Select an Account"} | Opening: ₹10,000 CR | Balance: ₹13,000 CR
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Narration</TableHead>
                    <TableHead className="text-right">Cr.</TableHead>
                    <TableHead className="text-right">Dr.</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {ledgerRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.narration}</TableCell>
                      <TableCell className="text-right">
                        {row.credit ? row.credit.toFixed(2) : ""}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.debit ? row.debit.toFixed(2) : ""}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.balance}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2} className="font-semibold">
                      Total
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {creditTotal.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {debitTotal.toFixed(2)}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
