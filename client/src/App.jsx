import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import AddPage from './pages/AddPage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add-page" element={<AddPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
