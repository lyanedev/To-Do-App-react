import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { NavBar } from "./components/NavBar";
import { Home } from "./pages/home/Home";
import { Add } from "./pages/add/Add";
import { Search } from "./pages/search/Search";
import { Todo } from "./pages/todo/Todo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
          <Route path="/todos/:id" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
