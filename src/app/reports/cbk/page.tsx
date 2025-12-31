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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

/* ---------------- PLACEHOLDER DATA ---------------- */

const groupedCashBookData: Record<
  string,
  {
    id: number
    date: string
    name: string
    entryType: "CREDIT" | "DEBIT"
    amount: number
  }[]
> = {
  "04/01/2024": [
    {
      id: 1,
      date: "2024-04-01",
      name: "Farmer A",
      entryType: "CREDIT",
      amount: 5000,
    },
    {
      id: 2,
      date: "2024-04-01",
      name: "Expense",
      entryType: "DEBIT",
      amount: 1200,
    },
  ],
  "04/02/2024": [
    {
      id: 3,
      date: "2024-04-02",
      name: "Bank Deposit",
      entryType: "CREDIT",
      amount: 3000,
    },
  ],
}

const cashInHandByDate: Record<string, string> = {
  "04/01/2024": "3,800 CR",
  "04/02/2024": "6,800 CR",
}

/* ---------------- COMPONENT ---------------- */

export default function CbkReportPage() {
  const [fromDate, setFromDate] = React.useState("")
  const [toDate, setToDate] = React.useState("")

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#d3d3ff] pt-2 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">
                Cash Book Report
              </CardTitle>
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
              <CardTitle className="text-xl">Data</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Cr.</TableHead>
                    <TableHead className="text-right">Dr.</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Object.keys(groupedCashBookData).map((date) => (
                    <React.Fragment key={date}>
                      {groupedCashBookData[date].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell className="text-right">
                            {row.entryType === "CREDIT"
                              ? row.amount.toFixed(2)
                              : ""}
                          </TableCell>
                          <TableCell className="text-right">
                            {row.entryType === "DEBIT"
                              ? row.amount.toFixed(2)
                              : ""}
                          </TableCell>
                          <TableCell />
                        </TableRow>
                      ))}

                      {/* CASH IN HAND ROW */}
                      <TableRow className="italic bg-muted/40">
                        <TableCell />
                        <TableCell className="font-medium">
                          Cash In Hand
                        </TableCell>
                        <TableCell colSpan={2} />
                        <TableCell className="text-right font-medium">
                          ₹ {cashInHandByDate[date] ?? "-"}
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
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
