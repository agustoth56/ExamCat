import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WelcomePage from './Welcome';
import Menu from './Menu';
import Login from './Login';
import Dashboard from './Dashboard';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<><WelcomePage/></>} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<><Menu/><Dashboard/></>} />
            </Routes>
        </Router>
    );
}
export default Main;