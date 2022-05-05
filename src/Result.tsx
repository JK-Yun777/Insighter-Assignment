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
              return <ul key={createdAt + quizIndex}>{`질문: ${question} | 답변: ${selected}`}</ul>
            }
          })}
        </div>
        <div className='wrong-answer'>
          <h2 className='wrong-answer-head'>오답</h2>
          {quizResult?.map((value: any, idx: any) => {
            const { selected, isCorrect, question, createdAt } = value
            if (!isCorrect) {
              return <ul key={createdAt + idx}>{`질문: ${question} | 답변: ${selected}`}</ul>
            }
          })}
        </div>
      </main>
    </article>
  )
}

export default Result
