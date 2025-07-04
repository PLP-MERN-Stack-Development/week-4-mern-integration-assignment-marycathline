// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Navbar from './components/Navbar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
          {/* Optional: Add edit view */}
          <Route path="/edit/:id" element={<CreatePost editMode={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
