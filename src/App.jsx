import React from 'react'
import { Route } from 'wouter'
import SearchResults from './Pages/SerchResults/SearchResult'
import Home from './Pages/Home'
import { GifsContextProvider } from './Context/GifsContext'

import './App.css'

function App () {
  return (
    <>
      <GifsContextProvider>
        <Route
          component={Home}
          path='/buscador-de-gifs/'
        />

        <Route
          component={SearchResults}
          path='/buscador-de-gifs/:keyword/:rating?/:lang?'
        />
      </GifsContextProvider>
    </>

  )
}

export default App
