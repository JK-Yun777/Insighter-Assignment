import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// State
type Quiz = {
  index: number
  text: string // 문제
  answer: string // 정답
  selections: string[] // 보기 목록 (정답 포함), 2지 선다
}

type QuizResult = {
  quizIndex: number
  createdAt: Date
  answer: string // 정답
  selected: string // 선택한 답
  isCorrect: boolean // 정답여부
}

type State = {
  isCompleted: boolean // computed
  correctCount: number // computed
  inCorrectCount: number // computed
  currentIndex: number // computed
  quizList: Quiz[]
  quizResults: QuizResult[]
}

// Action

// Select 동작방식
// 선지를 선택하면, 새로운 퀴즈결과가 생기고,
// 다음 문제로 넘어가야 한다.
type Select = {
  type: 'SELECT'
  payload: {
    quizIndex: number
    selected: string
  }
}

type Action = Select

function quizSessionReducer(state: State, action: Action) {
  // TODO
  // 선택한 선지에 따라
  // state 값이 변경되어야 함.
  // 예를 들어, 퀴즈 결과가 생성되고
  // 맞은 혹은 틀린 개수가 업데이트 되고,
  // 다음 퀴즈로 넘어가야 함.
  const newState = { ...state }
  return newState
}

// View
function QuizSessionView(state: State, onClick: (selected: string) => void) {
  function QuizView(quiz: Quiz) {
    const articleStyle = {
      marginTop: '16px',
      padding: '8px',
      background: '#efefef'
    }
    return (
      <article style={articleStyle}>
        <header>{quiz.text}</header>
        {quiz.selections.map((sel, idx) => {
          return (
            <button key={idx} onClick={() => onClick(sel)}>
              {sel}
            </button>
          )
        })}
      </article>
    )
  }

  const currentQuiz = state.quizList[state.currentIndex]

  return (
    <section>
      <div>완료 여부: {state.isCompleted ? '완료' : '미완료'}</div>
      <div>맞은 개수 {state.correctCount}</div>
      <div>틀린 개수 {state.inCorrectCount}</div>
      {state.isCompleted ? <Link to='/'>홈으로</Link> : QuizView(currentQuiz)}
    </section>
  )
}

function QuizSession() {
  const [initalLoaded, setInitalLoaded] = useState(false)
  const [state, setState] = useState<State | null>(null)

  const initState: () => Promise<State> = async () => {
    // 임시로 1초간 타임 아웃.
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // TODO
    // quizList를 아래 링크에서 단어를 불러와서 동적으로 생성한다.
    // https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json
    return {
      isCompleted: false,
      correctCount: 0,
      inCorrectCount: 0,
      currentIndex: 0,
      quizList: [
        {
          index: 0,
          text: 'apple',
          answer: 'n. 사과',
          selections: ['n. 사과', 'n. 밀가루 반죽']
        },
        {
          index: 1,
          text: 'brick',
          answer: 'n. 벽돌',
          selections: ['n. 벽돌', 'v. 뛰다, 급증하다']
        }
      ],
      quizResults: []
    }
  }

  useEffect(() => {
    ;(async () => {
      // 초기 데이터 불러오기
      if (!initalLoaded) {
        const initalState = await initState()
        setState(initalState)
        setInitalLoaded(true)
      }
    })()
  }, [initalLoaded])

  const quizSelected = (selected: string) => {
    // TODO
    if (state == null) return

    const newState = quizSessionReducer(state, {
      type: 'SELECT',
      payload: {
        quizIndex: state.currentIndex,
        selected: selected
      }
    })
    setState(newState)
  }

  return <div>{state ? QuizSessionView(state, quizSelected) : '로딩중...'}</div>
}

export default QuizSession
