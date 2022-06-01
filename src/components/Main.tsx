import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WelcomePage from './Welcome';
import Login from './Login';
import Dashboard from './Dashboard';

const Main = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<><WelcomePage/></>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<><Dashboard/></>} />
            </Routes>
        </Router>
    );
}
export default Main;