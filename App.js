import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import './services/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
    return (
        <div>
          <Router>
            <HeaderComponent />
            <Routes>
              <Route path="/" element={<ListEmployeeComponent />} />
              <Route path="/ems" element={<ListEmployeeComponent />} />
              <Route path="/create-employee" element={<CreateEmployeeComponent />} />
              <Route path="/edit-employee/:id" element={<CreateEmployeeComponent />} />
            </Routes>
            <FooterComponent />
          </Router>
        </div>
        );
      }
      
      export default App;