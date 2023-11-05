import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="p-8">
        <header className="text-center">
          <h1 className="text-4xl font-semibold text-indigo-700">Portfolio de Aurora</h1>
          <p className="text-gray-600">Investigadora</p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-700">Sobre mí</h2>
          <p className="mt-2 text-gray-800">Soy una apasionada investigadora con experiencia en diversas áreas de estudio. Mi objetivo es contribuir al conocimiento y hacer del mundo un lugar mejor a través de la investigación.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-indigo-700">Proyectos Destacados</h2>
          <ul className="mt-2 space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-indigo-600">Proyecto 1</h3>
              <p className="text-gray-800">Breve descripción del Proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-indigo-600">Proyecto 2</h3>
              <p className="text-gray-800">Breve descripción del Proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App
