import { motion } from "motion/react";
import { Container } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { Route, Routes, useLocation } from "react-router-dom";
import CXNavbar from "./components/layout/CXNavbar.tsx";
import { AppIntlProvider } from "./contexts/IntlContext.tsx";
import { AppThemeProvider } from "./contexts/ThemeContext.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Services from "./pages/Services.tsx";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <CXNavbar />

      <main className="py-4 py-lg-5">
        <Container>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: "1rem" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </Container>
      </main>

      <footer className="app-footer py-4">
        <Container className="text-center">
          <div className="mb-0">
            <FormattedMessage id="app.footer.copyright" />
          </div>
        </Container>
      </footer>
    </>
  );
}

const App = () => {
  return (
    <AppIntlProvider>
      <AppThemeProvider>
        <div className="app-shell">
          <AppContent />
        </div>
      </AppThemeProvider>
    </AppIntlProvider>
  );
}

export default App;
