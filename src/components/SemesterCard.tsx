
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface SemesterCardProps {
  facultyId: string;
  semesterId: string;
  number: number;
  subjectCount: number;
}

const SemesterCard: React.FC<SemesterCardProps> = ({
  facultyId,
  semesterId,
  number,
  subjectCount,
}) => {
  return (
    <Link to={`/faculty/${facultyId}/semester/${semesterId}`}>
      <Card className="h-full card-hover border-2 border-muted hover:border-brand-teal transition-all">
        <CardHeader className="bg-gradient-to-r from-brand-teal to-brand-blue text-white">
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-white text-brand-blue rounded-full h-8 w-8 flex items-center justify-center font-bold">
              {number}
            </span>
            <span>Semester {number}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-brand-teal" />
              <span>{subjectCount} Subjects</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SemesterCard;
