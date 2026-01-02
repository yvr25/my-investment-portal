"use client"

import * as React from "react"
import TopBar from "../top-bar/page"

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

import { Trash2 } from "lucide-react"

const BASE_YEAR = "Base Year"

export default function FiscalYear() {
  const [startYear, setStartYear] = React.useState("")
  const [endYear, setEndYear] = React.useState("")
  const [selectedFiscalYear, setSelectedFiscalYear] = React.useState("")

  // Placeholder data
  const [fiscalYears, setFiscalYears] = React.useState([
    { fiscal_year: BASE_YEAR },
    { fiscal_year: "2023-2024" },
    { fiscal_year: "2024-2025" },
  ])

  const handleStartYearChange = (value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      const year = parseInt(value)
      setStartYear(value)
      setEndYear(!isNaN(year) && year >= 2000 ? String(year + 1) : "")
    }
  }

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#F0FFF0]">
        <div className="pt-2 px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* LEFT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/75">
            <CardHeader>
              <CardTitle className="text-xl">Add New Fiscal Year</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Year</Label>
                  <Input
                    placeholder="2000 - 2999"
                    value={startYear}
                    onChange={(e) => handleStartYearChange(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>End Year</Label>
                  <Input value={endYear} disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Copy Closing Balance From</Label>
                <Select
                  value={selectedFiscalYear}
                  onValueChange={setSelectedFiscalYear}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fiscal Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {fiscalYears.map((item) => (
                      <SelectItem
                        key={item.fiscal_year}
                        value={item.fiscal_year}
                      >
                        {item.fiscal_year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full rounded-xl">
                Add New Fiscal Year
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/75">
            <CardHeader>
              <CardTitle className="text-xl">Data</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Fiscal Year</TableHead>
                    <TableHead className="text-center">Del</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {fiscalYears.map((item) => (
                    <TableRow key={item.fiscal_year}>
                      <TableCell>{item.fiscal_year}</TableCell>

                      <TableCell className="text-center">
                        {item.fiscal_year !== BASE_YEAR && (
                          <Button
                            size="icon"
                            variant="destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
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
