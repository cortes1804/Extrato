import React from 'react';
import Routes from "./routes";
import Home from './Pages/Home/home';

export default function App() {
  return (
    <div>
      <Routes>
        <Routes path="/" element={<Home />} />
      </Routes>
    </div>
  );
}


