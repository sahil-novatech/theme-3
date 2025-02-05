'use client';

import { useEffect } from 'react';
import 'animate.css';

const Wow = () => {
  useEffect(() => {
    // Dynamically import WOW.js on the client side
    const initializeWow = async () => {
      const WOW = (await import('wowjs')).WOW;
      const wow = new WOW({
        live: false, // Perform animations only on first render
      });
      wow.init();
    };

    initializeWow();
  }, []);

  return null;
};

export default Wow;