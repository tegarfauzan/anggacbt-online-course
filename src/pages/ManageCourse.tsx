import Sidebar from "../components/sidebar/Sidebar";
import MainContent from "../components/maincontent/MainContent";

export default function ManageCourse() {
  return (
    <div className="bg-white flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
