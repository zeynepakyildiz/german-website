import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import KunstPage from './components/KunstPage';
import GeschichtePage from './components/GeschichtePage';
import EssenPage from './components/EssenPage';
import NwPage from './components/NwPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LecturesPage from './components/LecturesPage';
import LectureOnePage from './components/LecturePages/LectureOnePage';
import LectureTwoPage from './components/LecturePages/LectureTwoPage';
import LectureThreePage from './components/LecturePages/LectureThreePage';
import LectureFourPage from './components/LecturePages/LectureFourPage';
import LectureFivePage from './components/LecturePages/LectureFivePage';
import ForumPage from './components/ForumPage';

function App() {
  return (
    <Router>
      <Navbar className="nav" />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kunst" element={<KunstPage />} />
          <Route path="/geschichte" element={<GeschichtePage />} />
          <Route path="/essen" element={<EssenPage />} />
          <Route path="/naturwissenschaft" element={<NwPage />} />
          <Route path="/lectures" element={<LecturesPage />} />
          <Route path="/lecture-one" element={<LectureOnePage />} />
          <Route path="/lecture-two" element={<LectureTwoPage />} />
          <Route path="/lecture-three" element={<LectureThreePage />} />
          <Route path="/lecture-four" element={<LectureFourPage />} />
          <Route path="/lecture-five" element={<LectureFivePage />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
