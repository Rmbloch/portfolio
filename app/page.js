import React, { Suspense } from 'react'
import Main from './components/Main'
import About from './components/About'
import Loading from './components/Loading'
import Project from './components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
        <About />
        <Project />
      </main>
    </div>
  )
}