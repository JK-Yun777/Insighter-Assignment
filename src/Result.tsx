import { useEffect, useState } from 'react'
import { useStore } from './store'
import { Link } from 'react-router-dom'
import './index.css'

function Result() {
  const [quizResult, setQuizResult] = useState<string[]>()
  const resultContainer = useStore((state) => state.resultContainer)

  useEffect(() => {
    setQuizResult(resultContainer)
  }, [resultContainer])

  return (
    <article>
      <Link to='/'>HOME</Link>
      <main className='main-container'>
        <div className='answer'>
          <h2 className='answer-head'>정답</h2>
          {quizResult?.map((value: any, idx: any) => {
            const { selected, isCorrect, question, createdAt, quizIndex } = value
            if (isCorrect) {
              return (
                <article className='word-container'>
                  <table>
                    <tbody>
                      <tr>
                        <td key={question + quizIndex}>{question}</td>
                        <td key={selected + createdAt}>{selected}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              )
            }
          })}
        </div>
        <div className='wrong-answer'>
          <h2 className='wrong-answer-head'>오답</h2>
          {quizResult?.map((value: any, idx: any) => {
            const { selected, isCorrect, question, createdAt } = value
            if (!isCorrect) {
              return (
                <article className='word-container'>
                  <table>
                    <tbody>
                      <tr>
                        <td key={question + idx}>{question}</td>
                        <td key={selected + createdAt}>{selected}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              )
            }
          })}
        </div>
      </main>
    </article>
  )
}

export default Result
