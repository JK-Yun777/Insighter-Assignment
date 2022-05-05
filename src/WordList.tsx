import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './index.css'

const getWords = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `/vocabs.json`
    })

    return response
  } catch (e) {
    if (e instanceof TypeError) {
      console.log('TypeError')
    } else if (e instanceof SyntaxError) {
      console.log('SyntaxError')
    } else if (typeof e === 'string') {
      console.log('string')
    }
  }
}

interface Word {
  text: string
  meaning: string
}

function WordView(word: Word) {
  return (
    <article className='word-container'>
      <table>
        <tr>
          <td key={word.text}>{word.text}</td>
          <td key={word.meaning}>{word.meaning}</td>
        </tr>
      </table>
    </article>
  )
}

function WordList() {
  const [wordlist, setWordList] = useState([])
  const linkStyle = {
    display: 'block',
    padding: '8px'
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getWords()

        setWordList(() => response?.data)
      } catch (e) {
        if (e instanceof TypeError) {
          console.log('TypeError')
        } else if (e instanceof SyntaxError) {
          console.log('SyntaxError')
        } else if (typeof e === 'string') {
          console.log('string')
        }
      }
    }

    fetchData()
  }, [])

  // TODO
  // 훅을 이용해서, 화면이 로드되면 아래 주소에서 단어를 들고와서 화면에 표시
  // 아래 샘플 단어를 대체해야 함.
  // https://solution-tmp.s3.ap-northeast-2.amazonaws.com/vocabs.json
  // warning!
  // 만약 어떠한 이유로 작동이 되지 않는다면, 그 문제를 우회해서
  // 전체 기능이 동작하도록 코드를 구현.
  // const wordlist: Word[] = [
  //   { text: 'apple', meaning: 'n. 사과' },
  //   { text: 'brick', meaning: 'n. 벽돌' },
  //   { text: 'leap', meaning: 'v. 뛰다, 급증하다' }
  // ]

  return (
    <section>
      <Link to='/' style={linkStyle}>
        HOME
      </Link>
      <header className='wordlist-hearder'>
        <div className='word'>Word</div>
        <div className='meaning'>Meaning</div>
      </header>
      {wordlist.map((word) => WordView(word))}
    </section>
  )
}

export default WordList
