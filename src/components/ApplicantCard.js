import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { getCurrentAcademicSemester } from '../utils/semesterUtils';
import './ApplicantCard.css';

const ApplicantCard = ({ applicant, currentCourseId, onSelect, onReject }) => {
  const navigate = useNavigate();
  const currentSemester = getCurrentAcademicSemester();
  const [showModal, setShowModal] = useState(false);

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

  const handleViewResume = (e) => {
    e.stopPropagation();
    if (applicant.academicResume) {
      setShowModal(true);
    }
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  return (
    <div className="applicant-card" onClick={handleCardClick}>
      <div className="applicant-card__header">
        <h3 className="applicant-card__name">{applicant.name}</h3>
        {applicant.academicResume && (
          <button
            className="applicant-card__resume-button"
            onClick={handleViewResume}
            title="Ver resumen académico"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </button>
        )}
      </div>
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

      {/* Modal para visualizar PDF - Renderizado fuera del componente usando Portal */}
      {showModal && ReactDOM.createPortal(
        <div className="pdf-modal" onClick={handleCloseModal}>
          <div className="pdf-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="pdf-modal__close" onClick={handleCloseModal}>
              ✕
            </button>
            <iframe
              src={applicant.academicResume}
              className="pdf-modal__iframe"
              title={`Resumen Académico - ${applicant.name}`}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ApplicantCard;
