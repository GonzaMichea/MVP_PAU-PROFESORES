import COURSES from './courses.js';

// Mock data - Escala 0-100, ningún postulante seleccionado aún
const mockApplicants = [
  { id: "rol-2020-1", name: "Juan Pérez Contreras", gpa: 85.5, semester: 5, selectedCount: 0,
    academicResume: "/resumes/juan-perez.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 92 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 88 },
      { courseId: "INF-245", preferenceRank: 3, status: "pending", courseGrade: 85 }
    ]
  },
  { id: "rol-2021-2", name: "María González Soto", gpa: 91.2, semester: 4, selectedCount: 0,
    academicResume: "/resumes/maria-gonzalez.pdf",
    applications: [
      { courseId: "INF-210", preferenceRank: 1, status: "pending", courseGrade: 95 },
      { courseId: "INF-239", preferenceRank: 2, status: "pending", courseGrade: 89 }
    ]
  },
  { id: "rol-2020-3", name: "Carlos Ramírez Torres", gpa: 88.7, semester: 6, selectedCount: 0,
    academicResume: "/resumes/carlos-ramirez.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 94 },
      { courseId: "INF-280", preferenceRank: 2, status: "pending", courseGrade: 87 }
    ]
  },
  { id: "rol-2021-4", name: "Ana Silva Morales", gpa: 72.5, semester: 3, selectedCount: 0,
    academicResume: "/resumes/ana-silva.pdf",
    applications: [
      { courseId: "INF-210", preferenceRank: 1, status: "pending", courseGrade: 75 },
      { courseId: "INF-225", preferenceRank: 2, status: "pending", courseGrade: 70 }
    ]
  },
  { id: "rol-2019-5", name: "Valentina Torres Díaz", gpa: 86.3, semester: 7, selectedCount: 0,
    academicResume: "/resumes/valentina-torres.pdf",
    applications: [
      { courseId: "INF-253", preferenceRank: 1, status: "pending", courseGrade: 90 },
      { courseId: "INF-245", preferenceRank: 2, status: "pending", courseGrade: 83 }
    ]
  },
  { id: "rol-2020-6", name: "Diego Pérez Valdés", gpa: 93.8, semester: 8, selectedCount: 0,
    academicResume: "/resumes/diego-perez.pdf",
    applications: [
      { courseId: "INF-280", preferenceRank: 1, status: "pending", courseGrade: 96 },
      { courseId: "INF-253", preferenceRank: 2, status: "pending", courseGrade: 92 },
      { courseId: "INF-239", preferenceRank: 3, status: "pending", courseGrade: 91 }
    ]
  },
  { id: "rol-2021-7", name: "Sofía Morales Gutiérrez", gpa: 78.9, semester: 4, selectedCount: 0,
    academicResume: "/resumes/sofia-morales.pdf",
    applications: [
      { courseId: "INF-225", preferenceRank: 1, status: "pending", courseGrade: 82 }
    ]
  },
  { id: "rol-2022-8", name: "Andrés Vargas Muñoz", gpa: 68.5, semester: 3, selectedCount: 0,
    academicResume: "/resumes/andres-vargas.pdf",
    applications: [
      { courseId: "INF-210", preferenceRank: 1, status: "pending", courseGrade: 71 }
    ]
  },
  { id: "rol-2019-9", name: "Isabella Rojas Fernández", gpa: 90.1, semester: 9, selectedCount: 0,
    academicResume: "/resumes/isabella-rojas.pdf",
    applications: [
      { courseId: "INF-280", preferenceRank: 1, status: "pending", courseGrade: 93 },
      { courseId: "INF-253", preferenceRank: 2, status: "pending", courseGrade: 88 }
    ]
  },
  { id: "rol-2021-10", name: "Mateo Fernández Castro", gpa: 81.4, semester: 5, selectedCount: 0,
    academicResume: "/resumes/mateo-fernandez.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 84 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 79 }
    ]
  },
  { id: "rol-2020-11", name: "Camila López Reyes", gpa: 87.6, semester: 6, selectedCount: 0,
    academicResume: "/resumes/camila-lopez.pdf",
    applications: [
      { courseId: "INF-245", preferenceRank: 1, status: "pending", courseGrade: 91 },
      { courseId: "INF-253", preferenceRank: 2, status: "pending", courseGrade: 85 },
      { courseId: "INF-225", preferenceRank: 3, status: "pending", courseGrade: 86 }
    ]
  },
  { id: "rol-2019-12", name: "Sebastián Castro Herrera", gpa: 89.2, semester: 7, selectedCount: 0,
    academicResume: "/resumes/sebastian-castro.pdf",
    applications: [
      { courseId: "INF-225", preferenceRank: 1, status: "pending", courseGrade: 92 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 87 }
    ]
  },
  { id: "rol-2021-13", name: "Florencia Díaz Núñez", gpa: 76.3, semester: 4, selectedCount: 0,
    academicResume: "/resumes/florencia-diaz.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 78 },
      { courseId: "INF-245", preferenceRank: 2, status: "pending", courseGrade: 75 }
    ]
  },
  { id: "rol-2020-14", name: "Martín Herrera Sandoval", gpa: 84.7, semester: 10, selectedCount: 0,
    academicResume: "/resumes/martin-herrera.pdf",
    applications: [
      { courseId: "INF-280", preferenceRank: 1, status: "pending", courseGrade: 89 },
      { courseId: "INF-253", preferenceRank: 2, status: "pending", courseGrade: 81 }
    ]
  },
  { id: "rol-2019-15", name: "Josefina Núñez Ortiz", gpa: 92.5, semester: 8, selectedCount: 0,
    academicResume: "/resumes/josefina-nunez.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 95 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 90 }
    ]
  },
  { id: "rol-2021-16", name: "Lucas Mendoza Pinto", gpa: 83.1, semester: 5, selectedCount: 0,
    academicResume: "/resumes/lucas-mendoza.pdf",
    applications: [
      { courseId: "INF-210", preferenceRank: 1, status: "pending", courseGrade: 86 },
      { courseId: "INF-225", preferenceRank: 2, status: "pending", courseGrade: 81 },
      { courseId: "INF-245", preferenceRank: 3, status: "pending", courseGrade: 82 }
    ]
  },
  { id: "rol-2020-17", name: "Emilia Soto Vargas", gpa: 94.2, semester: 6, selectedCount: 0,
    academicResume: "/resumes/emilia-soto.pdf",
    applications: [
      { courseId: "INF-253", preferenceRank: 1, status: "pending", courseGrade: 97 },
      { courseId: "INF-239", preferenceRank: 2, status: "pending", courseGrade: 92 }
    ]
  },
  { id: "rol-2022-18", name: "Benjamín Ortiz Lagos", gpa: 74.8, semester: 3, selectedCount: 0,
    academicResume: "/resumes/benjamin-ortiz.pdf",
    applications: [
      { courseId: "INF-225", preferenceRank: 1, status: "pending", courseGrade: 77 }
    ]
  },
  { id: "rol-2019-19", name: "Catalina Reyes Bravo", gpa: 88.9, semester: 9, selectedCount: 0,
    academicResume: "/resumes/catalina-reyes.pdf",
    applications: [
      { courseId: "INF-245", preferenceRank: 1, status: "pending", courseGrade: 93 },
      { courseId: "INF-280", preferenceRank: 2, status: "pending", courseGrade: 85 }
    ]
  },
  { id: "rol-2021-20", name: "Felipe Muñoz Campos", gpa: 82.6, semester: 5, selectedCount: 0,
    academicResume: "/resumes/felipe-munoz.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 85 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 80 },
      { courseId: "INF-253", preferenceRank: 3, status: "pending", courseGrade: 83 }
    ]
  },
  { id: "rol-2020-21", name: "Daniela Rojas Pizarro", gpa: 95.3, semester: 7, selectedCount: 0,
    academicResume: "/resumes/daniela-rojas.pdf",
    applications: [
      { courseId: "INF-210", preferenceRank: 1, status: "pending", courseGrade: 98 },
      { courseId: "INF-239", preferenceRank: 2, status: "pending", courseGrade: 94 }
    ]
  },
  { id: "rol-2021-22", name: "Nicolás Vera Espinoza", gpa: 79.4, semester: 4, selectedCount: 0,
    academicResume: "/resumes/nicolas-vera.pdf",
    applications: [
      { courseId: "INF-245", preferenceRank: 1, status: "pending", courseGrade: 82 },
      { courseId: "INF-225", preferenceRank: 2, status: "pending", courseGrade: 77 }
    ]
  },
  { id: "rol-2020-23", name: "Amanda Torres Ríos", gpa: 91.7, semester: 6, selectedCount: 0,
    academicResume: "/resumes/amanda-torres.pdf",
    applications: [
      { courseId: "INF-280", preferenceRank: 1, status: "pending", courseGrade: 94 },
      { courseId: "INF-253", preferenceRank: 2, status: "pending", courseGrade: 90 }
    ]
  },
  { id: "rol-2019-24", name: "Ricardo Sánchez Mora", gpa: 86.5, semester: 8, selectedCount: 0,
    academicResume: "/resumes/ricardo-sanchez.pdf",
    applications: [
      { courseId: "INF-239", preferenceRank: 1, status: "pending", courseGrade: 89 },
      { courseId: "INF-210", preferenceRank: 2, status: "pending", courseGrade: 84 }
    ]
  },
  { id: "rol-2021-25", name: "Gabriela Méndez Silva", gpa: 77.2, semester: 5, selectedCount: 0,
    academicResume: "/resumes/gabriela-mendez.pdf",
    applications: [
      { courseId: "INF-225", preferenceRank: 1, status: "pending", courseGrade: 80 },
      { courseId: "INF-245", preferenceRank: 2, status: "pending", courseGrade: 75 }
    ]
  }
];

export default mockApplicants;
