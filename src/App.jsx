import { AvanceCiclo, Boleta, CambiarClave, CambiarEmail, Kardex, Login, MiPanel, NotFound } from './pages'
import { Nav } from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<MiPanel />} />
        <Route path='/avanceciclo' element={<AvanceCiclo />} />
        <Route path='/boleta' element={<Boleta />} />
        <Route path='/cambiarclave' element={<CambiarClave />} />
        <Route path='/cambiaremail' element={<CambiarEmail />} />
        <Route path='kardex' element={<Kardex />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
