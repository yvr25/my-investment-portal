"use client"

import * as React from "react"
import TopBar from "../top-bar/page"
import { Trash2, ArrowUpDown } from "lucide-react"

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

import { Calendar28 } from "@/components/calendar28"

const naration = ["Cash", "Hisab kita", "Desial", "Pesticide"]

const entryTypes = ["Receipt/Debit", "Payment/Credit"]

type RowData = {
  name: string
  naration: string
  amount: string
}

export default function CashBook() {
  const [balance, setBalance] = React.useState("0.00")
  const [filterText, setFilterText] = React.useState("")
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc")

  const handleBalanceChange = (value: string) => {
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setBalance(value)
    }
  }

  // Mock table data
  const rows: RowData[] = React.useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        name: `Account ${i + 1}`,
        naration: naration[i % naration.length],
        amount: `${(Math.random() * 10000).toFixed(2)} CR`,
      })),
    []
  )

  const filteredAndSortedRows = React.useMemo(() => {
    return rows
      .filter((row) =>
        row.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .sort((a, b) => {
        const result = a.name.localeCompare(b.name)
        return sortOrder === "asc" ? result : -result
      })
  }, [rows, filterText, sortOrder])

  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-[#ede8d0]">
        <div className="pt-2 px-6 grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50 mb-4">
            <CardHeader>
              <CardTitle className="text-xl">Cash Book</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">

              <div className="grid sm:grid-cols-[160px_1fr] gap-3">
                <Label>Date *</Label>
                <Calendar28 />
              </div>

              <div className="grid sm:grid-cols-[160px_1fr] gap-3">
                <Label>Entry type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select Entry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {entryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-[160px_1fr] gap-3">
                <Label>Name *</Label>
                <Input placeholder="Please enter full account name" />
              </div>

              <div className="grid sm:grid-cols-[160px_1fr] gap-3">
                <Label>Naration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select Naration" />
                  </SelectTrigger>
                  <SelectContent>
                    {naration.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-[160px_1fr] gap-3">
                <Label>Amount</Label>
                <Input
                  value={balance}
                  onChange={(e) => handleBalanceChange(e.target.value)}
                  placeholder="0.00"
                />
              </div>

              <Button className="w-full rounded-xl">Add</Button>
            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50 mb-4">
            <CardHeader>
              <CardTitle className="text-xl">
                2023-05-05 | Credit | Cash In Hand: ₹500002 DR | Total: ₹2 DR
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">

              {/* FILTER INPUT */}
              <Input
                placeholder="Filter by account name..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="max-w-sm"
              />

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      className="cursor-pointer select-none"
                      onClick={() =>
                        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                      }
                    >
                      <div className="flex items-center gap-1">
                        Name
                        <ArrowUpDown className="w-4 h-4 opacity-60" />
                      </div>
                    </TableHead>
                    <TableHead>Naration</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Del</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {filteredAndSortedRows.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.naration}</TableCell>
                      <TableCell className="text-right">
                        {row.amount}
                      </TableCell>
                      <TableCell>
                        <Button
                                                    size="icon"
                                                    variant="destructive"
                                                  >
                                                    <Trash2 className="h-1 w-2" />
                                                  </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {filteredAndSortedRows.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-6">
                        No matching records found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  )
}
