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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/* ---------------- PLACEHOLDERS ---------------- */

const accounts = [
  "Farmer A",
  "Bank Punjab",
  "Expense Account",
  "Long Term Expense",
]

const interestRows = [
  {
    id: 1,
    date: "2024-04-01",
    narration: "Opening Balance",
    credit: "",
    debit: "",
    balance: "10,000 CR",
    entryType: "CashBook",
    days: 30,
    interest: 125.5,
  },
  {
    id: 2,
    date: "2024-04-10",
    narration: "Cash Received",
    credit: "5,000",
    debit: "",
    balance: "15,000 CR",
    entryType: "Journal",
    days: 20,
    interest: 82.3,
  },
  {
    id: 3,
    date: "2024-04-18",
    narration: "Expense Paid",
    credit: "",
    debit: "2,000",
    balance: "13,000 CR",
    entryType: "CashBook",
    days: 12,
    interest: 41.1,
  },
]

/* ---------------- COMPONENT ---------------- */

export default function InterestPage() {
  const [fromDate, setFromDate] = React.useState("")
  const [toDate, setToDate] = React.useState("")
  const [rate, setRate] = React.useState(15)
  const [account, setAccount] = React.useState<string | undefined>()
  const [checkedIds, setCheckedIds] = React.useState<number[]>(
    interestRows.map((r) => r.id)
  )

  const totalInterest = interestRows.reduce(
    (sum, row) =>
      checkedIds.includes(row.id) ? sum + row.interest : sum,
    0
  )

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#d3d3ff] pt-2 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">
                Interest Calculator
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* From */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>
                  From <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              {/* To */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>
                  To <span className="text-red-500">*</span>
                </Label>
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

              {/* Rate */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>
                  Rate % <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  min={1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3">
                <Button className="flex-1 rounded-xl">
                  Interest
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => {
                    setFromDate("")
                    setToDate("")
                    setAccount(undefined)
                    setRate(15)
                    setCheckedIds([])
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
                {account ?? "Select an Account"} | Opening ₹10,000 CR | Balance ₹13,000 CR
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
                    <TableHead>Entry</TableHead>
                    <TableHead className="text-right">Days</TableHead>
                    <TableHead className="text-right">Interest</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {interestRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.narration}</TableCell>
                      <TableCell className="text-right">
                        {row.credit}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.debit}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.balance}
                      </TableCell>
                      <TableCell>{row.entryType}</TableCell>
                      <TableCell className="text-right">
                        {row.days}
                      </TableCell>
                      <TableCell className="text-right">
                        {row.interest.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          checked={checkedIds.includes(row.id)}
                          onCheckedChange={(checked) =>
                            setCheckedIds((prev) =>
                              checked
                                ? [...prev, row.id]
                                : prev.filter((id) => id !== row.id)
                            )
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-right font-semibold"
                    >
                      Total Interest
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {totalInterest.toFixed(2)}
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
