import Home from "./pages/Home";
import Anime from "./pages/Anime";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"
import DetailOverlay from "./components/ui/DetailOverlay";
import AnimeDetails from "./pages/AnimeDetails";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Anime" element={<Anime/>}/>
          <Route path="/Anime/:mediaId" element={<AnimeDetails/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
