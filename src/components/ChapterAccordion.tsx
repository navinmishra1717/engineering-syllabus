
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chapter } from "@/data/engineeringData";
import { BookOpen, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChapterAccordionProps {
  chapters: Chapter[];
}

const ChapterAccordion: React.FC<ChapterAccordionProps> = ({ chapters }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {chapters.map((chapter, index) => (
        <AccordionItem key={chapter.id} value={chapter.id}>
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-md">
            <div className="flex items-center space-x-3 text-left">
              <Badge variant="outline" className="bg-brand-blue text-white border-none">
                {index + 1}
              </Badge>
              <span className="font-medium">{chapter.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{chapter.hours} Teaching Hours</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <BookOpen className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{chapter.marks} Marks</span>
              </div>
            </div>

            <h4 className="font-medium text-sm uppercase text-muted-foreground mb-2 mt-4">
              Lessons
            </h4>
            <div className="space-y-2">
              {chapter.lessons.map((lesson) => (
                <Card key={lesson.id} className="bg-muted/30 border-muted">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 mr-2 mt-1 text-brand-teal shrink-0" />
                      <div>
                        <h5 className="font-medium text-sm">{lesson.title}</h5>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ChapterAccordion;
