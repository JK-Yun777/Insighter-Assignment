import { Link } from 'react-router-dom'

function Home() {
  const linkStyle = {
    display: 'block'
  }
  return (
    <>
      <Link to='/wordlist' style={linkStyle}>
        단어 목록 보기
      </Link>
      <Link to='/quiz' style={linkStyle}>
        퀴즈 보기
      </Link>
    </>
  )
}

export default Home
