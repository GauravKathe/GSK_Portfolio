import React, { useState } from 'react';
import { Button } from '@mui/material'; // Material UI Button
import DownloadIcon from '@mui/icons-material/Download'; // Download Icon

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/GSK RESUME.pdf'; // Path to PDF in the public folder
    link.setAttribute('download', 'GSK RESUME.pdf'); // Set download filename
    document.body.appendChild(link); // Append link to the DOM
    link.click(); // Trigger the click
    document.body.removeChild(link); // Cleanup the DOM
  };

  return (
    <div className="border-b border-neutral-900 pb-4" style={{ textAlign: 'center' }}>
      <h1 className="my-20 text-center text-4xl">
        <span className="text-neutral-500"></span>
      </h1>
      <Button
        variant="contained"
        onClick={handleDownload}
        startIcon={<DownloadIcon />}
        style={{
          background: isHovered ? 'linear-gradient(to right, #2196f3, #9c27b0)' : '#d1c4e9', // Gradient on hover, light purple before hover
          color: 'white', // White text
          padding: '12px 28px',
          fontSize: '18px',
          borderRadius: '25px', // Rounded corners
          textTransform: 'none', // Keep text in normal case
          fontWeight: 'bold',
          boxShadow: isHovered ? '0px 6px 15px rgba(0, 0, 0, 0.3)' : '0px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow change on hover
          transition: 'all 0.3s ease-in-out', // Smooth transition on hover
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
      >
        Download CV
      </Button>
    </div>
  );
};

export default Resume;
