import { Routes, Route, Link } from "react-router-dom";
import './BrowserRouterPage.css';


const About = () => <h3>This is the About page (inside BrowserRouter)</h3>;
const Contact = () => <h3>This is the Contact page (inside BrowserRouter)</h3>;

const BrowserRouterPage = () => {
  return (
    <div className="gen-con">
      <h2>BrowserRouter</h2>
    
       <p> <strong>BrowserRouter</strong> is the most common type of router in React apps.
        It uses the browser's URL bar to show different pages — without reloading the page.</p>
      

       <p> This is possible because the entire app is wrapped in a top-level <code>&lt;BrowserRouter&gt;</code> in <strong>App.tsx</strong>. 
        It is also called server side routing, in 
        that the server helps the user find the right page</p>
      

      
        <div>
        <nav className="nav">
            <div><Link to="/browser-router/about">About</Link> </div>
          
          <div> <Link to="/browser-router/contact">Contact</Link></div>
         

        </nav>

        <Routes>
         
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Link to="/" className="back-button">← Back to Home</Link>

    </div>
  );
};

export default BrowserRouterPage;
