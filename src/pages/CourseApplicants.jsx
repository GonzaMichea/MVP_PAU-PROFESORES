import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockApplicants from '../data/mockApplicants';
import { COURSES } from '../data/courses';
import ApplicantCard from '../components/ApplicantCard';
import '../stylesheets/CourseApplicants.css';

function CourseApplicants() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = COURSES[courseId];

  // Estado de los postulantes
  const [applicants, setApplicants] = useState(mockApplicants);

  // Estados de filtros
  const [minCourseGrade, setMinCourseGrade] = useState('');
  const [selectedPreferenceRank, setSelectedPreferenceRank] = useState('');
  const [sortBy, setSortBy] = useState('courseGrade'); // courseGrade, gpa, preferenceRank

  if (!course) {
    return (
      <div className="course-applicants">
        <h2>Curso no encontrado</h2>
        <button onClick={() => navigate('/')} className="back-button">
          ← Volver
        </button>
      </div>
    );
  }

  // Filtrar postulantes que aplicaron a este curso
  let courseApplicants = applicants
    .map(applicant => {
      const application = applicant.applications.find(app => app.courseId === courseId);
      if (!application) return null;
      return { ...applicant, currentApplication: application };
    })
    .filter(applicant => applicant !== null);

  // Aplicar filtros
  courseApplicants = courseApplicants.filter(applicant => {
    const minGrade = minCourseGrade === '' ? 0 : Number(minCourseGrade);
    const meetsGrade = applicant.currentApplication.courseGrade >= minGrade;
    const meetsRank = selectedPreferenceRank === '' || 
                     applicant.currentApplication.preferenceRank === parseInt(selectedPreferenceRank);
    return meetsGrade && meetsRank;
  });

  // Ordenar
  courseApplicants.sort((a, b) => {
    if (sortBy === 'courseGrade') {
      return b.currentApplication.courseGrade - a.currentApplication.courseGrade;
    } else if (sortBy === 'preferenceRank') {
      return a.currentApplication.preferenceRank - b.currentApplication.preferenceRank;
    }
    return 0;
  });

  // Funciones de selección
  const handleSelectApplicant = (applicantId, courseId) => {
    const applicant = applicants.find(app => app.id === applicantId);
    
    if (!applicant) return;

    if (applicant.selectedCount < 2) {
      const updatedApplicants = JSON.parse(JSON.stringify(applicants));
      const applicantInCopy = updatedApplicants.find(app => app.id === applicantId);
      const applicationToUpdate = applicantInCopy.applications.find(
        app => app.courseId === courseId
      );
      
      if (applicationToUpdate) {
        const wasNotSelected = applicationToUpdate.status !== 'selected';
        applicationToUpdate.status = 'selected';
        
        if (wasNotSelected) {
          applicantInCopy.selectedCount += 1;
        }
        
        setApplicants(updatedApplicants);
      }
    } else {
      alert('Este postulante ya tiene 2 ayudantías');
    }
  };

  const handleRejectApplicant = (applicantId, courseId) => {
    const updatedApplicants = JSON.parse(JSON.stringify(applicants));
    const applicantInCopy = updatedApplicants.find(app => app.id === applicantId);
    
    if (applicantInCopy) {
      const applicationToUpdate = applicantInCopy.applications.find(
        app => app.courseId === courseId
      );
      
      if (applicationToUpdate) {
        const wasSelected = applicationToUpdate.status === 'selected';
        applicationToUpdate.status = 'rejected';
        
        if (wasSelected) {
          applicantInCopy.selectedCount -= 1;
        }
        
        setApplicants(updatedApplicants);
      }
    }
  };

  const selectedCount = courseApplicants.filter(
    app => app.currentApplication.status === 'selected'
  ).length;

  return (
    <div className="course-applicants">
      <button onClick={() => navigate('/')} className="back-button">
        ← Volver
      </button>

      <div className="course-header">
        <div>
          <h1>{courseId} - {course.name}</h1>
          <p className="course-info">
            Profesor: {course.professor} | Semestre: {course.semester} | 
            Ayudantes necesarios: {course.requiredAssistants}
          </p>
        </div>
        <div className="selection-status">
          <span className={selectedCount >= course.requiredAssistants ? 'complete' : 'incomplete'}>
            {selectedCount} / {course.requiredAssistants} seleccionados
          </span>
        </div>
      </div>

      <div className="filters-section">
        <h3>Filtros y Ordenamiento</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <label>Nota mínima en el curso:</label>
            <input
              type="number"
              min="0"
              max="100"
              value={minCourseGrade}
              onChange={(e) => setMinCourseGrade(e.target.value)}
              placeholder="Ingrese nota (0-100)"
            />
          </div>

          <div className="filter-group">
            <label>Ranking de preferencia:</label>
            <select
              value={selectedPreferenceRank}
              onChange={(e) => setSelectedPreferenceRank(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="1">1ra opción</option>
              <option value="2">2da opción</option>
              <option value="3">3ra opción</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Ordenar por:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="courseGrade">Nota en el curso</option>
              <option value="preferenceRank">Ranking de preferencia</option>
            </select>
          </div>
        </div>
      </div>

      <div className="applicants-results">
        <p className="results-count">
          Mostrando {courseApplicants.length} postulantes
        </p>

        {courseApplicants.length > 0 ? (
          <div className="applicants-grid">
            {courseApplicants.map((applicant) => (
              <ApplicantCard
                key={applicant.id}
                applicant={applicant}
                currentCourseId={courseId}
                onSelect={handleSelectApplicant}
                onReject={handleRejectApplicant}
              />
            ))}
          </div>
        ) : (
          <p className="no-results">No hay postulantes que cumplan con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}

export default CourseApplicants;
