// Utilidad para obtener el semestre académico actual según el formato USM Valparaíso
// Primer Semestre: Marzo - Julio
// Segundo Semestre: Agosto - Diciembre

export const getCurrentAcademicSemester = () => {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() devuelve 0-11, sumamos 1 para 1-12
  const year = now.getFullYear();

  // Enero y Febrero se consideran del año académico anterior (vacaciones de verano)
  if (month >= 3 && month <= 7) {
    return `Primer Semestre ${year}`;
  } else if (month >= 8 && month <= 12) {
    return `Segundo Semestre ${year}`;
  } else {
    // Enero y Febrero (vacaciones de verano, pero se asocian al año actual)
    return `Primer Semestre ${year}`;
  }
};
