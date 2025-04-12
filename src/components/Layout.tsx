import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: {
    name: string;
    path: string;
  }[];
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  breadcrumbs = [],
}) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-brand-blue text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">Engineering Syllabus</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {breadcrumbs.length > 0 && (
          <nav className="mb-6 animate-fade-in">
            <ul className="flex flex-wrap">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="breadcrumb-item">
                  {index < breadcrumbs.length - 1 ? (
                    <Link to={crumb.path} className="hover:text-primary">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span>{crumb.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="animate-fade-in">{children}</div>
      </main>

      <footer className="bg-brand-dark text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Engineering Syllabus</p>
              <p className="text-sm text-gray-300">
                Your complete guide to engineering curriculum
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Engineering Syllabus. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
