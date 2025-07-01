import { Link } from "react-router-dom";
import "./ComparisonPage.css";

const ComparisonPage = () => {
  return (
    <div className="genCon">
      <h2>Comparison between React Router and Vanilla JavaScript Routing</h2>

      <section>
        <h3> React Router</h3>
        <ul>
          <li>Uses components like <code>&lt;Routes&gt;</code> and <code>&lt;Route&gt;</code>.</li>
          <li>URL updates automatically and links don"t reload the page.</li>
          <li>Works well with modern SPAs (Single Page Applications).</li>
          <li>Code is organized and easier to manage.</li>
        </ul>

        <pre>
            {`// Example with React Router:
            import { Routes, Route, Link } from "react-router-dom";

            <Link to="/about">Go to About</Link>

            <Routes>
            <Route path="/about" element={<About />} />
            </Routes>`}
        </pre>
      </section>

      <section>
        <h3>Vanilla JavaScript Routing</h3>
        <ul>
          <li> Everything is managed manually</li>
          <li>logic is written to show/hide pages with JavaScript.</li>
          <li>It is Harder to manage as the app grows.</li>
        </ul>

        <pre>
            {`// Example with Vanilla JS:
            window.addEventListener('hashchange', () => {
            const route = location.hash;
            if (route === '#about') {
                showAboutPage();
            } else {
                showHomePage();
            }
            });`}
        </pre>
      </section>

      <p><strong> In Summary,</strong> React Router is easier, cleaner, and faster than Vanilla Router</p>

      <Link to="/" className="back-button">← Back to Home</Link>
    </div>
  );
};

export default ComparisonPage;
