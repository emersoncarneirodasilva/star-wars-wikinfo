import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navigation";
import Film from "./pages/films/Film";
import Films from "./pages/films/Films";
import Person from "./pages/people/Person";
import People from "./pages/people/People";
import Vehicle from "./pages/vehicles/Vehicle";
import Vehicles from "./pages/vehicles/Vehicles";
import Starship from "./pages/starships/Starship";
import Starships from "./pages/starships/Starships";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between vh-100">
        <Navbar />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/films/:id" element={<Film />} />
              <Route path="/people" element={<People />} />
              <Route path="/people/:id" element={<Person />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/vehicles/:id" element={<Vehicle />} />
              <Route path="/starships/" element={<Starships />} />
              <Route path="/starships/:id" element={<Starship />} />              
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
