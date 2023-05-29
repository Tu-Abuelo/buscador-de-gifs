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
          path='./'
        />

        <Route
          component={SearchResults}
          path='./:keyword/:rating?/:lang?'
        />
      </GifsContextProvider>
    </>

  )
}

export default App
