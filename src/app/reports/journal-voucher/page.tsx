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

type JVEntry = {
  id: number
  id_jb: string
  date: string
  name: string
  entryType: "CREDIT" | "DEBIT"
  amount: number
}

const journalData: JVEntry[] = [
  {
    id: 1,
    id_jb: "JB-001",
    date: "2024-04-01",
    name: "Farmer A",
    entryType: "DEBIT",
    amount: 5000,
  },
  {
    id: 2,
    id_jb: "JB-001",
    date: "2024-04-01",
    name: "Cash Account",
    entryType: "CREDIT",
    amount: 5000,
  },
  {
    id: 3,
    id_jb: "JB-002",
    date: "2024-04-03",
    name: "Expense Account",
    entryType: "DEBIT",
    amount: 1200,
  },
  {
    id: 4,
    id_jb: "JB-002",
    date: "2024-04-03",
    name: "Bank",
    entryType: "CREDIT",
    amount: 1200,
  },
]

/* ---------------- COMPONENT ---------------- */

export default function JournalVoucherPage() {
  const [fromDate, setFromDate] = React.useState("")
  const [toDate, setToDate] = React.useState("")

  /* Group by Journal Voucher */
  const groupedData = React.useMemo(() => {
    return journalData.reduce<Record<string, JVEntry[]>>((acc, row) => {
      acc[row.id_jb] = acc[row.id_jb] || []
      acc[row.id_jb].push(row)
      return acc
    }, {})
  }, [])

  const calculateTotals = (rows: JVEntry[]) => {
    let credit = 0
    let debit = 0

    rows.forEach((r) => {
      if (r.entryType === "CREDIT") credit += r.amount
      if (r.entryType === "DEBIT") debit += r.amount
    })

    return { credit, debit }
  }

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#d3d3ff] pt-2 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">
                Journal Voucher Report
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>From</Label>
                <Input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>To</Label>
                <Input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

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
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {Object.keys(groupedData).map((jbId) => {
                    const totals = calculateTotals(groupedData[jbId])

                    return (
                      <React.Fragment key={jbId}>
                        {groupedData[jbId].map((row) => (
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
                          </TableRow>
                        ))}

                        {/* TOTAL ROW */}
                        <TableRow className="bg-muted/50 font-semibold">
                          <TableCell colSpan={2}>
                            Total for {jbId}
                          </TableCell>
                          <TableCell className="text-right">
                            ₹ {totals.credit.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right">
                            ₹ {totals.debit.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    )
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
