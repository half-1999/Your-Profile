import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import WorkExperiencePage from "./WorkExperiencePage";
import ContactPage from "./ContactPage";

function LandingPage() {
  return (
    <div className="py-5">
      <div className="bg-white p-4 rounded-md shadow-2xl mb-2">
        <h2 className="text-xl font-semibold">Landing Page</h2>
        <AboutPage />
        <ProjectsPage />
        <WorkExperiencePage />
        <ContactPage />
      </div>
    </div>
  );
}

export default LandingPage;
