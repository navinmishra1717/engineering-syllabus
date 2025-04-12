
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";
import { Link } from "react-router-dom";

interface FacultyCardProps {
  id: string;
  name: string;
  description: string;
  semesterCount: number;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  id,
  name,
  description,
  semesterCount,
}) => {
  return (
    <Link to={`/faculty/${id}`}>
      <Card className="h-full card-hover overflow-hidden border-2 border-muted hover:border-brand-teal transition-all">
        <CardHeader className="bg-gradient-to-br from-brand-blue to-brand-teal text-white">
          <div className="flex items-center space-x-2">
            <Book className="h-5 w-5" />
            <CardTitle className="text-xl">{name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-muted-foreground line-clamp-4">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t bg-muted/50 p-4">
          <Badge variant="secondary">{semesterCount} Semesters</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FacultyCard;
