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

export default function UserPage() {
  const [startYear, setStartYear] = React.useState("")
  const [endYear, setEndYear] = React.useState("")
  const [selectedFiscalYear, setSelectedFiscalYear] = React.useState("")

  // Placeholder data
  const [levels, setLevels] = React.useState([
    { level: 'Level 1' },
    { level: "Level 2" },
    { level: "Level 3" },
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
              <CardTitle className="text-xl">Add user account</CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Please enter Gmail account for new user</Label>
                  <Input
                    placeholder="Enter email for invite"
                    value={startYear}
                    onChange={(e) => handleStartYearChange(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Permistion Level</Label>
                  <Select
                  value={selectedFiscalYear}
                  onValueChange={setSelectedFiscalYear}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Set permission level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((item) => (
                      <SelectItem
                        key={item.level}
                        value={item.level}
                      >
                        {item.level }
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
              </div>

              <Button className="w-full rounded-xl">
                Send Invite
              </Button>
            </CardContent>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="rounded-2xl shadow-lg shadow-black/75">
            <CardHeader>
              <CardTitle className="text-xl">All Users by Level</CardTitle>
            </CardHeader>

            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead className="text-center">Del</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {levels.map((item) => (
                    <TableRow key={item.level}>
                      <TableCell>Name</TableCell>

                      <TableCell >
                        abc@gmail.com
                      </TableCell>
                      <TableCell>level-x</TableCell>
                      <TableCell className="text-center">
                        <Button
                            size="icon"
                            variant="destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>

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
