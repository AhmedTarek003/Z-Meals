import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import { themeMood } from "./rtk/slices/darkmoodSlice";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  // Add Class To Body To Know The Theme
  const theme = useSelector(themeMood);
  if (theme) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
  return (
    <div className="App" id={theme ? "dark" : "light"}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:cate" element={<CategoryPage />} />
        <Route path="/search/:search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
