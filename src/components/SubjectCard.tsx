
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface SubjectCardProps {
  facultyId: string;
  semesterId: string;
  subjectId: string;
  name: string;
  code: string;
  credits: number;
  chapterCount: number;
  totalHours: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  facultyId,
  semesterId,
  subjectId,
  name,
  code,
  credits,
  chapterCount,
  totalHours,
}) => {
  return (
    <Link to={`/faculty/${facultyId}/semester/${semesterId}/subject/${subjectId}`}>
      <Card className="h-full card-hover border-2 border-muted hover:border-brand-teal transition-all">
        <CardHeader className="bg-gradient-to-br from-brand-teal to-brand-blue/70 text-white">
          <div className="flex flex-col">
            <Badge variant="outline" className="self-start mb-2 bg-white/20 text-white border-white/30">
              {code}
            </Badge>
            <CardTitle className="text-xl">{name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center text-muted-foreground mb-2">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>{chapterCount} Chapters</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>{totalHours} Teaching Hours</span>
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/50 p-4">
          <Badge className="bg-brand-teal">{credits} Credits</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SubjectCard;
