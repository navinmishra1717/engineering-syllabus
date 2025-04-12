
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe } from "lucide-react";

interface ReferencesListProps {
  references: {
    books: string[];
    websites: string[];
  };
}

const ReferencesList: React.FC<ReferencesListProps> = ({ references }) => {
  return (
    <Card className="border-2 border-muted h-full">
      <CardHeader>
        <CardTitle className="text-xl">Study Materials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="flex items-center mb-2 font-medium text-brand-blue">
            <BookOpen className="h-4 w-4 mr-2" />
            Recommended Books
          </h3>
          <ul className="space-y-2">
            {references.books.map((book, index) => (
              <li key={index} className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-brand-teal text-muted-foreground">
                {book}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center mb-2 font-medium text-brand-blue">
            <Globe className="h-4 w-4 mr-2" />
            Online Resources
          </h3>
          <ul className="space-y-2">
            {references.websites.map((website, index) => (
              <li key={index} className="pl-6 break-all">
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teal hover:underline"
                >
                  {website}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferencesList;
