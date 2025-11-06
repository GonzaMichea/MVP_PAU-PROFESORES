import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentAcademicSemester } from '../utils/semesterUtils';
import './ApplicantCard.css';

const ApplicantCard = ({ applicant, currentCourseId, onSelect, onReject }) => {
  const navigate = useNavigate();
  const currentSemester = getCurrentAcademicSemester();

  // 1. Buscar la postulación que coincida con currentCourseId
  const currentApplication = currentCourseId 
    ? applicant.applications.find((app) => app.courseId === currentCourseId)
    : null;

  // 3. El selectedCount ya viene en el objeto applicant
  const showWarning = applicant.selectedCount >= 2;

  const handleCardClick = (e) => {
    // Evitar navegación si se hace clic en los botones
    if (e.target.tagName === 'BUTTON') {
      return;
    }
    navigate(`/applicant/${applicant.id}`);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(applicant.id, currentCourseId);
    }
  };

  const handleReject = (e) => {
    e.stopPropagation();
    if (onReject) {
      onReject(applicant.id, currentCourseId);
    }
  };

  return (
    <div className="applicant-card" onClick={handleCardClick}>
      <h3 className="applicant-card__name">{applicant.name}</h3>
      <div className="applicant-card__info">
        <p className="applicant-card__semester">
          <strong>Periodo:</strong> {currentSemester}
        </p>
      </div>

      {/* 2. Mostrar el preferenceRank si existe la postulación */}
      {currentApplication && (
        <>
          <p className="applicant-card__course-grade">
            <strong>Nota en el curso:</strong> {currentApplication.courseGrade}/100
          </p>
          <p className="applicant-card__preference">
            <strong>Ranking de postulación:</strong> {currentApplication.preferenceRank}
          </p>
          <p className="applicant-card__status">
            <strong>Estado:</strong>{' '}
            <span className={`status-badge status-badge--${currentApplication.status}`}>
              {currentApplication.status === 'selected' ? 'Seleccionado' :
               currentApplication.status === 'pending' ? 'Pendiente' : 'Rechazado'}
            </span>
          </p>
        </>
      )}

      {/* 4. Mostrar advertencia si tiene 2 o más ayudantías asignadas */}
      {showWarning && (
        <div className="applicant-card__warning">
          ⚠️ Este postulante ya tiene {applicant.selectedCount} ayudantías asignadas
        </div>
      )}

      {/* Botones de acción si se proporcionan las funciones */}
      {onSelect && onReject && currentApplication && (
        <div className="applicant-card__actions">
          <button
            className="applicant-card__button applicant-card__button--select"
            onClick={handleSelect}
            disabled={currentApplication.status === 'selected'}
          >
            {currentApplication.status === 'selected' ? '✓ Seleccionado' : 'Seleccionar'}
          </button>
          <button
            className="applicant-card__button applicant-card__button--reject"
            onClick={handleReject}
            disabled={currentApplication.status === 'rejected'}
          >
            {currentApplication.status === 'rejected' ? '✗ Rechazado' : 'Rechazar'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplicantCard;
