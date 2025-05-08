import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import One from '../src/pro'; // Corrected import path
import Sample from '../src/pro1';
// import Order from '../src/pro1'; // Uncomment when needed
// import Sum from '../src/components/navbar'; // Typo fixed: components, navbar

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,     // Offset from the original trigger point
      delay: 100,      // Delay before the animation starts
      duration: 800,   // Duration of the animation
      easing: 'ease-in-out', // Easing function
      once: true,      // Animation should happen only once
      mirror: false,   // No mirror effect
    });

    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/pro1" element={<Sample />} />
        {/* <Route path="/pro1" element={<Order />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
