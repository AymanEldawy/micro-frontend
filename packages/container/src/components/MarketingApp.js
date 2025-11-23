import React, { useEffect, useRef } from 'react';
const MarketingApp = () => {
  console.log(React);
  
  const ref = useRef(null);

  useEffect(() => {
    
    if (ref.current) {
      import('marketing/MarketingApp').then((module) => {
        const { mount } = module;
        mount(ref.current);
      });
    }
  }, []); // Run once on mount

  return <div ref={ref} className="h-full w-full" />;
};

export default MarketingApp;