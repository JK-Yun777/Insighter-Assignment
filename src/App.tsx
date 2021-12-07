import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './Home'
import QuizSession from './QuizSession'
import WordList from './WordList'

function App() {
  return (
    <div className='App'>
      <h1>다풀자 영단어</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quiz' element={<QuizSession />} />
        <Route path='wordlist' element={<WordList />} />
      </Routes>
    </div>
  )
}

export default App
