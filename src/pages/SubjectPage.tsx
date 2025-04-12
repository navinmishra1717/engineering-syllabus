import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import ChapterAccordion from "@/components/ChapterAccordion";
import MarksDistributionChart from "@/components/MarksDistributionChart";
import ReferencesList from "@/components/ReferencesList";
import ChapterTable from "@/components/ChapterTable";
import engineeringData from "@/data/engineeringData";
import { Helmet } from "react-helmet-async";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, BookOpen, Code, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SubjectPage = () => {
  const { facultyId, semesterId, subjectId } = useParams<{
    facultyId: string;
    semesterId: string;
    subjectId: string;
  }>();

  const faculty = engineeringData.find((f) => f.id === facultyId);
  const semester = faculty?.semesters.find((s) => s.id === semesterId);
  const subject = semester?.subjects.find((s) => s.id === subjectId);

  if (!faculty || !semester || !subject) {
    return (
      <Layout title="Subject Not Found">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            The subject you are looking for does not exist.
          </AlertDescription>
        </Alert>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${subject.name} - Semester ${semester.number} - ${faculty.name} - Engineering Syllabus`}</title>
        <meta
          name="description"
          content={`Explore ${subject.name} (${subject.code}) from Semester ${semester.number} of ${faculty.name}. Details about chapters, teaching hours, marks distribution, and study materials.`}
        />
        <meta
          name="keywords"
          content={`${subject.name}, ${subject.code}, engineering subject, ${faculty.name}, semester ${semester.number}, curriculum`}
        />
      </Helmet>
      <Layout
        title={subject.name}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: faculty.name, path: `/faculty/${faculty.id}` },
          {
            name: `Semester ${semester.number}`,
            path: `/faculty/${faculty.id}/semester/${semester.id}`,
          },
          {
            name: subject.name,
            path: `/faculty/${faculty.id}/semester/${semester.id}/subject/${subject.id}`,
          },
        ]}
      >
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-border">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-brand-blue">{subject.code}</Badge>
            <Badge variant="outline">{subject.credits} Credits</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Layers className="h-5 w-5 text-brand-teal mr-2" />
              <span>
                <strong>{subject.chapters.length}</strong> Chapters
              </span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-brand-teal mr-2" />
              <span>
                <strong>
                  {subject.chapters.reduce(
                    (sum, chapter) => sum + chapter.hours,
                    0,
                  )}
                </strong>{" "}
                Teaching Hours
              </span>
            </div>
            <div className="flex items-center">
              <Code className="h-5 w-5 text-brand-teal mr-2" />
              <span>
                <strong>
                  {subject.chapters.reduce(
                    (sum, chapter) => sum + chapter.marks,
                    0,
                  )}
                </strong>{" "}
                Total Marks
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-brand-blue">
              Chapters & Lessons
            </h2>
            <ChapterAccordion chapters={subject.chapters} />
          </div>

          <div className="flex flex-col gap-6">
            <MarksDistributionChart distribution={subject.marksDistribution} />
            <ReferencesList references={subject.references} />
          </div>
        </div>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mb-6 text-brand-blue">
          Chapter Summary Table
        </h2>
        <ChapterTable chapters={subject.chapters} />
      </Layout>
    </>
  );
};

export default SubjectPage;
