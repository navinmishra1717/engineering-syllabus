
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Chapter } from "@/data/engineeringData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChapterTableProps {
  chapters: Chapter[];
}

const ChapterTable: React.FC<ChapterTableProps> = ({ chapters }) => {
  const totalHours = chapters.reduce((sum, chapter) => sum + chapter.hours, 0);
  const totalMarks = chapters.reduce((sum, chapter) => sum + chapter.marks, 0);

  return (
    <Card className="border-2 border-muted">
      <CardHeader>
        <CardTitle className="text-xl">Chapter Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead className="w-[100px]">Chapter</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right">Hours</TableHead>
                <TableHead className="text-right">Marks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chapters.map((chapter, index) => (
                <TableRow key={chapter.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{chapter.title}</TableCell>
                  <TableCell className="text-right">{chapter.hours}</TableCell>
                  <TableCell className="text-right">{chapter.marks}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50 font-medium">
                <TableCell colSpan={2} className="text-right">
                  Total
                </TableCell>
                <TableCell className="text-right">{totalHours}</TableCell>
                <TableCell className="text-right">{totalMarks}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterTable;
