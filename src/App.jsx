import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modul from "./Application/Component/Modul";
import Cuestionario from "./Application/Component/components/cuestionarioscreen/cuestionario";
import TestResult from "./Application/Component/components/testResult/TestResult.jsx";
import Registro from "./Application/Component/components/formulario/Registro.jsx";
import CuestionarioPreference from "./Application/Component/components/cuestionarioscreen/cuestionario-preference.jsx";
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Modul />} />
      <Route exact path="/register" element={<Registro />} />
      <Route exact path="/test-intelligence" element={<Cuestionario />} />
      <Route exact path="/test" element={<CuestionarioPreference />} />
      <Route exact path="/results" element={<TestResult />} />
    </Routes>
  </Router>
);

export default App;
