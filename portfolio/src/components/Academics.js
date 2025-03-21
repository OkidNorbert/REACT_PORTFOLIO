import React, { useState } from 'react';
import AcademicInputs from './AcademicInputs';
import '../styles/Academics.css';

const Academics = () => {
    const [academicResults, setAcademicResults] = useState([
        {
            year: 1,
            semester: 2,
            gpa: 4.24,
            courses: [
                { name: 'Data Structures and Algorithms', mark: 77, cu: 4, gp: 4.5 },
                { name: 'Computer Organisation and Architecture', mark: 75, cu: 3, gp: 4.5 },
                { name: 'Probability and Statistics', mark: 63, cu: 3, gp: 3.0 },
                { name: 'Database Design and Applications', mark: 79, cu: 4, gp: 4.5 },
                { name: 'Local Area Computer Networking', mark: 71, cu: 3, gp: 4.0 },
                { name: 'Understanding The New Testament', mark: 72, cu: 3, gp: 4.0 },
                { name: 'Health and Wholeness', mark: 80, cu: 3, gp: 5.0 }
            ]
        }
    ]);

    const calculateGPA = (courses) => {
        const totalWeightedPoints = courses.reduce((sum, course) => sum + (course.cu * course.gp), 0);
        const totalCU = courses.reduce((sum, course) => sum + course.cu, 0);
        return (totalWeightedPoints / totalCU).toFixed(2);
    };

    const handleAddResult = (newResult) => {
        const updatedResults = [...academicResults];
        updatedResults[0].courses.push({
            name: newResult.name,
            mark: parseInt(newResult.mark),
            cu: parseInt(newResult.cu),
            gp: parseFloat(newResult.gp)
        });
        
        // Recalculate GPA
        updatedResults[0].gpa = calculateGPA(updatedResults[0].courses);
        
        setAcademicResults(updatedResults);
    };

    const totalCU = academicResults[0].courses.reduce((sum, course) => sum + course.cu, 0);

    return (
        <section id="academics" className="academics-section">
            <div className="section-header">
                <h2><span className="gradient-text">Academic Results</span></h2>
                <div className="semester-info">
                    <div className="info-item">
                        <span className="label">Year</span>
                        <span className="value">1</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Semester</span>
                        <span className="value">2</span>
                    </div>
                    <div className="info-item highlight">
                        <span className="label">GPA</span>
                        <span className="value">{academicResults[0].gpa}</span>
                    </div>
                </div>
            </div>

            <div className="results-table">
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Mark</th>
                            <th>Credit Units</th>
                            <th>Grade Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {academicResults[0].courses.map((course, index) => (
                            <tr key={index}>
                                <td>{course.name}</td>
                                <td className="mark">{course.mark}</td>
                                <td className="cu">{course.cu}</td>
                                <td className="gp">{course.gp.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total Credit Units</td>
                            <td colSpan="3" className="total">
                                {totalCU}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <AcademicInputs onAddResult={handleAddResult} />
        </section>
    );
};

export default Academics; 