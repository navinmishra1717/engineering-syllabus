import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SemesterCard from "@/components/SemesterCard";
import engineeringData from "@/data/engineeringData";
import { Helmet } from "react-helmet-async";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const FacultyPage = () => {
  const { facultyId } = useParams<{ facultyId: string }>();
  const faculty = engineeringData.find((f) => f.id === facultyId);

  if (!faculty) {
    return (
      <Layout title="Faculty Not Found">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            The faculty you are looking for does not exist.
          </AlertDescription>
        </Alert>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${faculty.name} - Engineering Syllabus`}</title>
        <meta
          name="description"
          content={`Explore the ${faculty.name} curriculum, including all semesters and subjects. ${faculty.description}`}
        />
        <meta
          name="keywords"
          content={`${faculty.name}, engineering, curriculum, semesters, subjects`}
        />
      </Helmet>
      <Layout
        title={faculty.name}
        description={faculty.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: faculty.name, path: `/faculty/${faculty.id}` },
        ]}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {faculty.semesters.map((semester) => (
            <SemesterCard
              key={semester.id}
              facultyId={faculty.id}
              semesterId={semester.id}
              number={semester.number}
              subjectCount={semester.subjects.length}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default FacultyPage;
