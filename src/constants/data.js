const paths = [
  { path: '/', item: 'mi panel' },
  { path: '/avanceCiclo', item: 'avance ciclo' },
  { path: '/boleta', item: 'boleta' },
  { path: '/cambiarClave', item: 'cambiar clave' },
  { path: '/cambiarEmail', item: 'cambiar email' },
  { path: '/kardex', item: 'kardex' },
  { path: '/login', item: 'login' }
]


const students = [
  { 
    name: 'jose armando', 
    lastName: 'crescencio rico',
    noControl: '21010001',
    escolarInfo: {
      carrera: 'informatica',
      planEstudios: '(a) IINF-2010-220 DE 260 CRÉDITOS',
      especialidad: 'ADMINISTRACION Y GESTION DE SEGURIDAD DE LA INFORMACION',
      situacionVigencia: 'vigente',
      promedio: '86',
      creditos: '90',
      ingreso: '(2211) 2211 ENEJUN2021',
      periodosConvalidados: '0',
      periodoActual: 'Semestre 5 (2231) ENEJUN2023',
      tutor: 'Armando Crescencio Gonzalez'
    },
    personalInfo: {
      curp: 'CERA020630HVZRCRA8',
      nacimiento: '2002-06-30',
      direccion: 'JOSE MARIA CRESCENCIO S/N MONTE GRANDE ORIZABA CP 94420',
      telFijo: '2727219922',
      cell: '2721305556',
      email: 'armandocrescencio343@gmail.com',
      procedencia: '(185) CENTRO DE BACHILLERATO TECNOLOGICO INDUSTRIAL Y DE SERVICIOS NUM. 142, (30101) ORIZABA'
    }
  }
]

export {
  paths,
  students
}