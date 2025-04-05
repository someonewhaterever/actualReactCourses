import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import CoursesList from "./pages/CoursesList";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import "./styles/main.scss";


const courses = [
  { id: 1, title: "React с нуля", author: "Иван Иванов" },
  { id: 2, title: "Node.js для новичков", author: "Петр Петров" },
  { id: 3, title: "JS полный курс", author: "Анна Сидорова" },
];

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesList courses={courses} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;
