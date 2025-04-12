import React from "react";
import Layout from "@/components/Layout";
import FacultyCard from "@/components/FacultyCard";
import engineeringData from "@/data/engineeringData";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          {"Engineering Syllabus - Engineering Faculties And Curriculum"}
        </title>
        <meta
          name="description"
          content="Explore engineering faculties, semesters, subjects, and curriculum details. A comprehensive resource for engineering students."
        />
        <meta
          name="keywords"
          content="engineering, curriculum, faculties, semesters, subjects, education"
        />
      </Helmet>
      <Layout
        title="Explore Engineering Faculties And Curriculum"
        description="Browse through various engineering faculties and their detailed curriculum"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringData.map((faculty) => (
            <FacultyCard
              key={faculty.id}
              id={faculty.id}
              name={faculty.name}
              description={faculty.description}
              semesterCount={faculty.semesters.length}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Index;
