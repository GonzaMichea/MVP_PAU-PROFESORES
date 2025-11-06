import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockApplicants from '../data/mockApplicants';
import { COURSES } from '../data/courses';
import { getCurrentAcademicSemester } from '../utils/semesterUtils';
import './ApplicantDetail.css';

const ApplicantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentSemester = getCurrentAcademicSemester();
  
  // Buscar el postulante por id
  const applicant = mockApplicants.find((app) => app.id === id);

  // Si no se encuentra el postulante, mostrar mensaje
  if (!applicant) {
    return (
      <div className="applicant-detail applicant-detail--not-found">
        <h2>Postulante no encontrado</h2>
        <p>No se encontró ningún postulante con el ID: {id}</p>
        <button onClick={() => navigate('/')} className="applicant-detail__back-button">
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="applicant-detail">
      <button onClick={() => navigate('/')} className="applicant-detail__back-button">
        ← Volver
      </button>

      <div className="applicant-detail__header">
        <h1 className="applicant-detail__name">{applicant.name}</h1>
        {applicant.selectedCount >= 2 && (
          <span className="applicant-detail__status applicant-detail__status--warning">
            {applicant.selectedCount} ayudantías asignadas
          </span>
        )}
      </div>

      <div className="applicant-detail__info-section">
        <h2>Información General</h2>
        <div className="applicant-detail__info-grid">
          <div className="applicant-detail__info-item">
            <strong>ROL:</strong>
            <span>{applicant.id}</span>
          </div>
          <div className="applicant-detail__info-item">
            <strong>Periodo:</strong>
            <span>{currentSemester}</span>
          </div>
          <div className="applicant-detail__info-item">
            <strong>Ayudantías Actuales:</strong>
            <span>{applicant.selectedCount}</span>
          </div>
        </div>
      </div>

      <div className="applicant-detail__applications-section">
        <h2>Postulaciones ({applicant.applications.length})</h2>
        
        {applicant.selectedCount >= 2 && (
          <div className="applicant-detail__warning">
            ⚠️ Este postulante ya tiene {applicant.selectedCount} ayudantías asignadas
          </div>
        )}

        <div className="applicant-detail__applications-list">
          {applicant.applications.map((app, index) => {
            const course = COURSES[app.courseId];
            return (
              <div className="applicant-detail__application-card">
                <div className="applicant-detail__application-header">
                  <div>
                    <h3>{app.courseId}</h3>
                    {course && <p className="applicant-detail__course-name">{course.name}</p>}
                  </div>
                  <span className={`applicant-detail__app-status applicant-detail__app-status--${app.status}`}>
                    {app.status === 'selected' ? 'Seleccionado' : 
                     app.status === 'pending' ? 'Pendiente' : 'Rechazado'}
                  </span>
                </div>
                <div className="applicant-detail__application-info">
                  <p className="applicant-detail__course-grade">
                    <strong>Nota en el curso:</strong> {app.courseGrade}/100
                  </p>
                  <p className="applicant-detail__preference">
                    <strong>Ranking de preferencia:</strong> {app.preferenceRank}
                    {app.preferenceRank === 1 ? ' (Primera opción)' : 
                     app.preferenceRank === 2 ? ' (Segunda opción)' : 
                     ' (Tercera opción)'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
