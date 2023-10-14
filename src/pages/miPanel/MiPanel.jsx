import './MiPanel.css'
import userProfile from '../../assets/images/user-img.png'
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
      <figure className="student__img-content">
        <img className='student__img' src={profileImg} alt="student-img" />
      </figure>
      <section className="student__data">
        <h2 className='student__name'>{name}</h2>
        <p className='student__control'>
          Numero de control: <span>{noControl}</span>
        </p>
      </section>
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
      <p>CURP: <span>{curp}</span></p>
      <p>Fecha de nacimiento: <span>{nacimiento}</span></p>
      <p>Direccion: <span>{direccion}</span></p>
      <p>Telefono fijo: <span>{tell}</span></p>
      <p>Celular: <span>{celular}</span></p>
      <p>Email: <span>{email}</span></p>
      <p>Escuela de procedencia: <span>{procedencia}</span></p>
    </article>
  )
}


// eslint-disable-next-line react/prop-types
function StudentTikects ({ tikets }) {
  return (
    <section>
      <h3>Tikects generados</h3>
      <p>Sin tikects generados: <span>{tikets}</span></p>
    </section>
  )
}

export default function MiPanel() {
  return (
    <section className='panel padding__section'>
      <article className="panel__content">
        <StudentInfo
          name='Jose armando crescencio rico'
          noControl='21010001'
          profileImg={userProfile}
        />
        <section className="panel__info">
          <EscolarInfo 
            carrera='ING. Informatica.' 
            creditos='5' 
            ing='Informatica' 
            ingreso='20/20/200' 
            noPeriodosConvalidados='0' 
            periodoActual='agosto-diciembre' 
            promedio='90' 
            tutor='armadno cr' 
            vigencia='hola mundo' 
            planEstudios='hola mundo'
          /> 
          <PersonalInfo 
            celular='2721304444' 
            curp='sfdaq254afw4' 
            direccion='jose sin numero' 
            email='jose@email.com' 
            nacimiento='22/34/3000' 
            procedencia='cbtas'  
            tell='2721232342'
          />
          <StudentTikects 
            tikets='0'
          />
        </section>
      </article>
    </section>
  )
}
