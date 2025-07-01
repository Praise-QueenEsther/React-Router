import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./HashRouterPage.css";



const HashRouterPage = () => {

  return (
    <div className="gen-con">
        <div>
      <h2>HashRouter</h2>
      <p>
        <strong>HashRouter</strong> uses the <code>#</code> in the URL, like <code>/#/hash-router/about</code>.
      </p>
      <p>
        It is useful for static hosting environments that don’t support real server routing (e.g., GitHub Pages).
      </p>
      
        <h4>Code example of using HashRouter:</h4>
        <pre>
              {`
              import { HashRouter, Routes, Route, Link } from "react-router-dom";
              const About = () => <h3>This is the About page (inside simulated HashRouter demo)</h3>;
              const Contact = () => <h3>This is the Contact page (inside simulated HashRouter demo)</h3>;
              const HashRouterPage = () => {
              return(
              <HashRouter>
              <nav className="nav">
                      <Link to="/hash-router/about">About</Link>
                      <Link to="/hash-router/contact">Contact</Link>
                    </nav>
                    
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </HashRouter>)}

              App.tsx may be:  
              // <HashRouter>
                  //   <AppRoutes />
                  // </HashRouter> 
                  as the top level router
              `}
        </pre>
      
      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
    </div>
  );
};

export default HashRouterPage;
