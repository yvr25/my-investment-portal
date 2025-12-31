"use client"

import * as React from "react"
import TopBar from "../top-bar/page"
import { Trash2 } from "lucide-react"

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

export default function NarrationPage() {
  const [input, setInput] = React.useState({
    act_type: "",
    naration: "",
  })

  // Placeholder data
  const [typeData, setTypeData] = React.useState([
    { id_type: 1, act_type: "ASSET" },
    { id_type: 2, act_type: "LIABILITY" },
  ])

  const [narationData, setNarationData] = React.useState([
    { id_naration: 1, naration: "CASH" },
    { id_naration: 2, naration: "BANK" },
  ])

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-[#F0FFF0]">
        <div className="pt-2 px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* LEFT PANEL — ACCOUNT TYPE */}
          <Card className="rounded-2xl shadow-lg shadow-black/75">
            <CardHeader>
              <CardTitle className="text-xl">
                Account Type
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label>New Account Type</Label>
                  <Input
                    value={input.act_type}
                    onChange={(e) =>
                      setInput((prev) => ({
                        ...prev,
                        act_type: e.target.value,
                      }))
                    }
                    placeholder="Enter account type"
                  />
                </div>

                <Button className="rounded-xl">
                  Add
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-center">Del</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {typeData.map((row) => (
                    <TableRow key={row.id_type}>
                      <TableCell>{row.act_type}</TableCell>
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

          {/* RIGHT PANEL — NARATION */}
          <Card className="rounded-2xl shadow-lg shadow-black/75">
            <CardHeader>
              <CardTitle className="text-xl">
                Naration
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-end gap-3">
                <div className="flex-1 space-y-2">
                  <Label>New Naration</Label>
                  <Input
                    value={input.naration}
                    onChange={(e) =>
                      setInput((prev) => ({
                        ...prev,
                        naration: e.target.value,
                      }))
                    }
                    placeholder="Enter naration"
                  />
                </div>

                <Button className="rounded-xl">
                  Add
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Naration</TableHead>
                    <TableHead className="text-center">Del</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {narationData.map((row) => (
                    <TableRow key={row.id_naration}>
                      <TableCell>{row.naration}</TableCell>
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
