import Header from "./components/Header/Header";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BurialTypesPage from "./pages/burial-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  const App = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
    height: calc(100vh - 72px);
  `;
  return (
    <Router>
      <Header />
      <App>
        <Routes>
          <Route
            exact
            path="/burial-type"
            element={<BurialTypesPage />}
          ></Route>
        </Routes>
      </App>
      <Footer />
    </Router>
  );
}

export default App;
