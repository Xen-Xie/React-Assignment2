// src/App.js
import './App.css';
import NavBar from './Components/NavigationSec/NavBar';
import DashboardPage from './Components/Pages/DashboardPage';
import IncidentsPage from './Components/Pages/IncidentsPage';
import LocationsPage from './Components/Pages/LocationsPage';
import ActivitiesPage from './Components/Pages/ActivitiesPage';
import DocumentsPage from './Components/Pages/DocumentsPage';
import Cypher from './Components/Pages/Cypher';
import { Routes, Route, useLocation } from 'react-router-dom';
import NewIncident from './Components/Pages/NewIncident';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/incidents" element={<IncidentsPage />} />
        <Route path="/incidents/new" element={<NewIncident />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/cypher" element={<Cypher />} />
      </Routes>
    </>
  );
}

export default App;
