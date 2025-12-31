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

const balancesData = [
  {
    id: 1,
    name: "Farmer A",
    openingBal: "10,000 CR",
    balance: "13,000 CR",
  },
  {
    id: 2,
    name: "Bank Punjab",
    openingBal: "25,000 DR",
    balance: "22,500 DR",
  },
  {
    id: 3,
    name: "Expense Account",
    openingBal: "0.00",
    balance: "2,000 DR",
  },
]

/* ---------------- COMPONENT ---------------- */

export default function BalancesPage() {
  const [date, setDate] = React.useState("")

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#d3d3ff] pt-2 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/50">
            <CardHeader>
              <CardTitle className="text-xl">
                Balances
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              {/* Date */}
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] items-center gap-3">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  onClick={() => setDate("")}
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
                Data
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">
                      Opening Balance
                    </TableHead>
                    <TableHead className="text-right">
                      Balance
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {balancesData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell className="text-right">
                        ₹ {row.openingBal}
                      </TableCell>
                      <TableCell className="text-right">
                        ₹ {row.balance}
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
