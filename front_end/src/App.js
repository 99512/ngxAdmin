import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../src/layout/navbar"
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Fix the import statement
import AddUser from './Person/AddUser';
import ViewUser from './Person/viewUser';
import EditUser from './Person/editUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addPerson' element={<AddUser />} />
          <Route path='/editPerson/:id' element={<EditUser />} />
          <Route path='/viewPerson/:id' element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
