import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import ProductPage from "./Pages/ProductPage";
import RegisterPage from "./Pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import LearnMore from "./Pages/LearnMorePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProtectedRoute Component={ProductPage} />} />
          <Route path="/products/detail/:id" element={<ProtectedRoute Component={ProductDetailPage} />} />
          <Route path="/about" element={<ProtectedRoute Component={AboutPage} />} />
          <Route path="/contacts" element={<ProtectedRoute Component={ContactPage} />} />
          <Route path="/about/learn-more" element={<ProtectedRoute Component={LearnMore} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
