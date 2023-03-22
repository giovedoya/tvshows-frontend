import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Show from "./views/Show";
import Edit from "./views/Edit";
import New from "./views/New";
import Navbar from "./components/Navbar";

function App() {
  return (
<div class="p-4">
  <Navbar />
  <h1 class="text-2xl font-bold text-center mt-8 mb-4">TV Shows App</h1>
  <Routes class="max-w-md mx-auto mt-4">
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<New />} />
    <Route path="/shows/:showId" element={<Show />} />
    <Route path="/edit/:showId" element={<Edit />} />
  </Routes>
</div>



  );
}

export default App;
