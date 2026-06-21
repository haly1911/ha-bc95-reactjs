import PopupModal from "./components/PopupModal";
import SearchBar from "./components/SearchBar";
import StudentInfo from "./components/StudentInfo";
import StudentList from "./components/StudentList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-slate-900">Quản lý sinh viên</h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <StudentInfo />
        <section className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold mb-6">Danh sách sinh viên</h2>
            {/* Search bar */}
            <SearchBar />
            {/* Table */}
            <StudentList />
          </div>
        </section>
      </div>
      <PopupModal />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
