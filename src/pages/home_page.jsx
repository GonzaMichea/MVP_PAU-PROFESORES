import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import mockApplicants from '../data/mockApplicants';
import '../stylesheets/Dashboard.css';

function HomePage() {
  const navigate = useNavigate();

  // Calcular estadísticas por curso
  const courseStats = Object.keys(COURSES).map(courseId => {
    const course = COURSES[courseId];
    const applicantsCount = mockApplicants.filter(applicant =>
      applicant.applications.some(app => app.courseId === courseId)
    ).length;

    return {
      ...course,
      applicantsCount
    };
  });

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard del Profesor</h1>
      <p className="dashboard-subtitle">
        Selecciona un curso para gestionar las postulaciones de ayudantía
      </p>

      <div className="courses-grid">
        {courseStats.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <div className="course-card__header">
              <h2>{course.id}</h2>
              <span className="course-card__semester">{course.semester}</span>
            </div>
            <h3 className="course-card__name">{course.name}</h3>
            <div className="course-card__info">
              <p><strong>Profesor:</strong> {course.professor}</p>
              <p><strong>Créditos:</strong> {course.credits}</p>
              <p><strong>Ayudantes necesarios:</strong> {course.requiredAssistants}</p>
            </div>
            <div className="course-card__stats">
              <span className="applicants-badge">
                {course.applicantsCount} postulante{course.applicantsCount !== 1 ? 's' : ''}
              </span>
            </div>
            <button className="course-card__button">
              Ver Postulantes →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
