
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home/Homepage.js'
import Events from './pages/Events.js';
import EventPage from './pages/EventPage.js';
import NotFound from './pages/NotFound';
import Director from './pages/Director';
import Header from './components/Layout.js';
import Footer from './components/Footer.js';
import Prik_Inf from './pages/Prikladnaya_inf.js';
import Napravlenie from './pages/Napravlenie';
import AdminPage from "./Admin/AdminPage.js";
import Authorization from "./pages/authorization/AuthorizationPaje.js";
import { check } from "./http/userAPI.js";
import DepartmensList from "./pages/Departments/DepartmenstList.js";
import DepartmentPage from "./pages/Departments/DepartmentPage.js";



function App() {



    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='admin/*' element={<AdminPage/>}/>
          <Route path='events' element={<Events />} />
          <Route path='events/event/:id' element={<EventPage />} />
          <Route path='dir' element={<Director />} />
          <Route path='department' element={<DepartmentPage/>}/>
          <Route path='prik_inf' element={<Prik_Inf />}/>
          <Route path='napr' element={<Napravlenie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </>

    );
}

export default App;
