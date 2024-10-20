import React, { useState } from 'react';
import { Button } from '@mui/material'; // Material UI Button
import DownloadIcon from '@mui/icons-material/Download'; // Download Icon

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/GSK RESUME.pdf'; // Path to PDF
    link.setAttribute('download', 'GSK RESUME.pdf'); // Set download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Cleanup
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
          background: isHovered 
            ? 'linear-gradient(to right, #2196f3, #9c27b0)' // Hover state: Blue to Purple
            : 'linear-gradient(to right, #9575cd, #5c6bc0)', // Default: Darker Purple to Blue
          color: 'white',
          padding: '12px 28px',
          fontSize: '18px',
          borderRadius: '25px',
          textTransform: 'none',
          fontWeight: 'bold',
          boxShadow: isHovered 
            ? '0px 6px 15px rgba(0, 0, 0, 0.3)' 
            : '0px 4px 12px rgba(0, 0, 0, 0.2)', // Adjust shadow on hover out
          transition: 'all 0.3s ease-in-out',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Download CV
      </Button>
    </div>
  );
};

export default Resume;
