import { Link } from "react-router-dom";
import "./MemoryRouterPage.css";

const MemoryRouterPage = () => {
  return (
    <div className="gen-con">
      <h2> MemoryRouter</h2>
      <p>
        <strong>MemoryRouter</strong> is a special kind of router in React that
        keeps track of the route in memory only — it does not touch the browser's address bar.
      </p>
      <p>
        It is useful in special cases like:
        <ul>
          <li>Testing environments</li>
          <li>Apps that don't need to show URL changes</li>
          <li>Modals or embedded apps</li>
        </ul>
      </p>
      <p>
        Clicking the links in a real MemoryRouter app won’t change the URL, but the UI will still update.
      </p>

      <h4>Code example of using MemoryRouter:</h4>
      <pre>
            {`
        import { MemoryRouter, Routes, Route, Link } from "react-router-dom";

        const About = () => <h3>This is the About page (MemoryRouter demo)</h3>;
        const Contact = () => <h3>This is the Contact page (MemoryRouter demo)</h3>;

        <MemoryRouter>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MemoryRouter>
        `}
      </pre>

      <p>
        In the app file (<code>App.tsx</code>), it would be used like this:
      </p>

      <pre>
{`<MemoryRouter>
  <AppRoutes />
</MemoryRouter>`}
      </pre>

      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default MemoryRouterPage;
