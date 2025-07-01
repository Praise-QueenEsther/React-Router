import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>These are the following types of  React Router</h2>
      <ul>
        <li><Link to="/browser-router">BrowserRouter</Link></li>
        <li><Link to="/hash-router">HashRouter</Link></li>
        <li><Link to="/memory-router">MemoryRouter</Link></li>
        This is the page showing the comparison of React router and Vanilla router
        <li><Link to="/comparison">Comparison</Link></li>
      </ul>
      
    </div>
  );
};

export default Home;
