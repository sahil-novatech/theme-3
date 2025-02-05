"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { FaArrowUp } from "react-icons/fa";

const GoTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Button
          onClick={scrollToTop}
          isIconOnly
          radius="full"
          title="Go to Top"
          aria-label="Go to Top"
          className="fixed bottom-6 right-6 z-50 text-white bg-black shadow-lg"
        >
          <FaArrowUp size={20} />
        </Button>
      )}
    </>
  );
};

export default GoTop;