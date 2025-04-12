import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SubjectCard from "@/components/SubjectCard";
import engineeringData from "@/data/engineeringData";
import { Helmet } from "react-helmet-async";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const SemesterPage = () => {
  const { facultyId, semesterId } = useParams<{
    facultyId: string;
    semesterId: string;
  }>();

  const faculty = engineeringData.find((f) => f.id === facultyId);
  const semester = faculty?.semesters.find((s) => s.id === semesterId);

  if (!faculty || !semester) {
    return (
      <Layout title="Semester Not Found">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            The semester you are looking for does not exist.
          </AlertDescription>
        </Alert>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`Semester ${semester.number} - ${faculty.name} - Engineering Syllabus`}</title>
        <meta
          name="description"
          content={`Browse all subjects in Semester ${semester.number} of the ${faculty.name} curriculum. Complete details about credits, chapters, and teaching hours.`}
        />
        <meta
          name="keywords"
          content={`${faculty.name}, semester ${semester.number}, engineering subjects, curriculum`}
        />
      </Helmet>
      <Layout
        title={`Semester ${semester.number}`}
        description={`Subjects offered in Semester ${semester.number} of ${faculty.name}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: faculty.name, path: `/faculty/${faculty.id}` },
          {
            name: `Semester ${semester.number}`,
            path: `/faculty/${faculty.id}/semester/${semester.id}`,
          },
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {semester.subjects.map((subject) => {
            const totalHours = subject.chapters.reduce(
              (sum, chapter) => sum + chapter.hours,
              0,
            );

            return (
              <SubjectCard
                key={subject.id}
                facultyId={faculty.id}
                semesterId={semester.id}
                subjectId={subject.id}
                name={subject.name}
                code={subject.code}
                credits={subject.credits}
                chapterCount={subject.chapters.length}
                totalHours={totalHours}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default SemesterPage;
