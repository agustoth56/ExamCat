import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WelcomePage from './Welcome';
import Login from './Login';
import Dashboard from './Dashboard';
import Categories from './Categories';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/dashboard/categories" element={<Categories/>} />
            </Routes>
        </Router>
    );
}
export default Main;