import './MiPanel.css'

// const useStudent = () => {
  // const [studentInfo, setStudentInfo] = useState()

  // students.forEach(({name,lastName,noControl,escolarInfo,personalInfo}) => (
 

  //   console.log(escolarInfo, personalInfo)
  // ))

  // const profileInfo
  // const personalInfo
  // const escolarInfoj

  // return {
    // profileInfo,
    // personalInfo,
    // escolarInfo
  // }

// }


// eslint-disable-next-line react/prop-types
function StudentInfo ({name, noControl, profileImg}) {
  return (
    <article className='student__info'>
      <h2 className='student__name'>{name}</h2>
      <span className='student__num-control'>{noControl}</span>
      <figure className="student__img-content">
        <img className='student__img' src={profileImg} alt="" />
      </figure>
    </article>
  )
}

// eslint-disable-next-line react/prop-types
function EscolarInfo ({ carrera, planEstudios, ing, vigencia, promedio, creditos, ingreso, noPeriodosConvalidados, periodoActual, tutor}) {
  return (
    <article className='panel__escolar-info'>
      <h3>Informacion escolar</h3>
      <p>Carrera: <span>{carrera}</span></p>
      <p>Plan de estudios: <span>{planEstudios}</span></p>
      <p>Ingenieria: <span>{ing}</span></p>
      <p>Situacion de vigencia: <span>{vigencia}</span></p>
      <p>Promedio: <span>{promedio}</span></p>
      <p>Creditos acumulados: <span>{creditos}</span></p>
      <p>Periodo de ingreso: <span>{ingreso}</span></p>
      <p>No. Periodos convalidados: <span>{noPeriodosConvalidados}</span></p>
      <p>Periodo actual: <span>{periodoActual}</span></p>
      <p>Tutor: <span>{tutor}</span></p>
    </article>
  )
}

// eslint-disable-next-line react/prop-types
function PersonalInfo ({curp, nacimiento, direccion, tell, celular, email, procedencia}) {
  return (
    <article className='panel__personal-info'>
      <h3>Informacion personal</h3>
      <p>CURP: <span> </span></p>
      <p>Fecha de nacimiento: <span> </span></p>
      <p>Direccion: <span> </span></p>
      <p>Telefono fijo: <span> </span></p>
      <p>Celular: <span> </span></p>
      <p>Email: <span> </span></p>
      <p>Escuela de procedencia: <span> </span></p>
    </article>
  )
}

export default function MiPanel() {
  return (
    <section className='panel__content padding__section'>
      <StudentInfo 
        name='Jose armando crescencio rico' 
        noControl='21010001' 
        profileImg='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000' 
      /> 
      <EscolarInfo /> 
      <PersonalInfo />
    </section>
  )
}
