// src/App.js
import './App.css'
import NavBar from './Components/NavBar'
import DashboardPage from './Components/Pages/DashboardPage'
import IncidentsPage from './Components/Pages/IncidentsPage'
import LocationsPage from './Components/Pages/LocationsPage'
import ActivitiesPage from './Components/Pages/ActivitiesPage'
import DocumentsPage from './Components/Pages/DocumentsPage'
import Cypher from './Components/Pages/Cypher'
import { Routes, Route } from 'react-router-dom' // No BrowserRouter here

function App() {
  return (
    <>
      <NavBar />
      <Routes> {/* Routes can work without BrowserRouter wrapper because it's in main.jsx */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/incidents" element={<IncidentsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/cypher" element={<Cypher />} />
      </Routes>
    </>
  )
}

export default App