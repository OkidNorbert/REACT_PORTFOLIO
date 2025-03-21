import React, { useState } from 'react';
import '../styles/AcademicInputs.css';

const AcademicInputs = ({ onAddResult }) => {
  const [newResult, setNewResult] = useState({
    name: '',
    mark: '',
    cu: '',
    gp: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddResult({
      ...newResult,
      mark: parseInt(newResult.mark),
      cu: parseInt(newResult.cu),
      gp: parseFloat(newResult.gp)
    });
    setNewResult({
      name: '',
      mark: '',
      cu: '',
      gp: ''
    });
  };

  const calculateGP = (mark) => {
    if (!mark) return '';
    mark = parseInt(mark);
    if (isNaN(mark)) return '';
    if (mark >= 80) return 5.0;
    if (mark >= 75) return 4.5;
    if (mark >= 70) return 4.0;
    if (mark >= 65) return 3.5;
    if (mark >= 60) return 3.0;
    if (mark >= 55) return 2.5;
    if (mark >= 50) return 2.0;
    return 0.0;
  };

  const handleMarkChange = (e) => {
    const mark = e.target.value;
    setNewResult({
      ...newResult,
      mark,
      gp: calculateGP(mark)
    });
  };

  return (
    <div className="academic-inputs">
      <div className="inputs-header">
        <div className="header-icon">
          <svg viewBox="0 0 24 24">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
        </div>
        <h3>Add New Course Result</h3>
      </div>

      <form onSubmit={handleSubmit} className="inputs-form">
        <div className="input-grid">
          <div className="form-group">
            <label htmlFor="name">Course Name</label>
            <input
              id="name"
              type="text"
              value={newResult.name}
              onChange={(e) => setNewResult({...newResult, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mark">Mark</label>
            <input
              id="mark"
              type="number"
              min="0"
              max="100"
              value={newResult.mark}
              onChange={handleMarkChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cu">Credit Units</label>
            <input
              id="cu"
              type="number"
              min="1"
              max="6"
              value={newResult.cu}
              onChange={(e) => setNewResult({...newResult, cu: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gp">Grade Points</label>
            <input
              id="gp"
              type="number"
              step="0.5"
              min="0"
              max="5"
              value={newResult.gp}
              onChange={(e) => setNewResult({...newResult, gp: e.target.value})}
              placeholder="Auto-calculated from mark"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          <span>Add Result</span>
          <svg className="button-icon" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AcademicInputs; 