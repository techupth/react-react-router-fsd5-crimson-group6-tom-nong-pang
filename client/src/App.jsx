import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/viewproduct/:id" element={<ViewProductPage />} />
          <Route path="/createproduct" element={<CreateProductPage />} />
          <Route path="/editproduct" element={<EditProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
