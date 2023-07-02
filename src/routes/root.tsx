import { Link, Route, Routes } from 'react-router-dom'
import Post from './post'
import Home from './home'

export default function Root() {
  return (
    <>
      <header>
        <nav className="flex justify-around pb-3 mt-3 border-b border-gray">
          <Link className="tossLogo flex" to="/">
            <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1662515801/noticon/dtalt5gl3xkddalhat8o.png" alt="toss-icon" className="w-8" />
            <button className="mt-1 text-xl">
              <b>toss </b>
              tech
            </button>
          </Link>
          <div className="text-sm">
            <button className="p-2">디자인</button>
            <button className="ml-4">개발</button>
            <button className="p-1 pl-2 pr-2 ml-7 bg-blue-500 rounded text-white">채용 바로가기</button>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <footer className="mt-20">
        <div className="flex bg-footerBg h-72 p-25">
          <div className="flex m-auto">
            <img src="https://static.toss.im/3d/website_code_blue_alpha.png" alt="" className="w-48" />
            <div className="text-white mt-6 ml-4">
              <b className="text-3xl">토스팀이 만드는 수많은 혁신의 순간들</b>
              <p className="mt-2">
                당신과 함께 만들고 싶습니다.
                <br />
                지금, 토스팀에 합류하세요.
              </p>
              <button className="text-sm font-semibold p-2 pl-4 pr-4 mt-5 bg-blue-500 rounded">채용 중인 공고 보기</button>
            </div>
          </div>
        </div>
        <div className="flex p-14">
          <div className="flex-col m-auto ml-24">
            <div className="flex">
              <ul className="mr-20">
                <li className="text-sm font-bold">토스테크</li>
                <li className="text-gray-400">의견 보내기</li>
              </ul>
              <ul className="mr-20">
                <li className="text-sm font-bold">토스</li>
                <li className="text-gray-400">홈페이지</li>
                <li className="text-gray-400">회사 소개</li>
                <li className="text-gray-400">채용</li>
              </ul>
              <ul>
                <li className="text-sm font-bold">고객센터</li>
                <li className="text-gray-400">전화: 1599-4905(24시간 연중무휴)</li>
                <li className="text-gray-400">이메일: support@toss.im</li>
                <li className="text-gray-400">카카오톡: @toss</li>
              </ul>
            </div>
            <div className="mt-14">
              <address>
                <strong className="text-sm">(주)비바리퍼블리카</strong>
              </address>
              <div className="mt-4 text-gray-400 text-xs">Copyright © Viva Republica, Inc. All Rights Reserved.</div>
            </div>
            <div className="mt-16">
              <ul className="flex">
                <li>
                  <a aria-label="Toss Facebook" target="_blank" href="https://www.facebook.com/toss.revolution" rel="noreferrer">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Toss Facebook" />
                  </a>
                </li>
                <li>
                  <a aria-label="Toss blog" target="_blank" href="https://blog.toss.im" rel="noreferrer">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Toss blog" />
                  </a>
                </li>
                <li>
                  <a aria-label="Toss Naver Post" target="_blank" href="https://post.naver.com/tossblog" rel="noreferrer">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Toss Naver Post" />
                  </a>
                </li>
                <li>
                  <a aria-label="Toss Twitter" target="_blank" href="https://twitter.com/toss__official" rel="noreferrer">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Toss Twitter" />
                  </a>
                </li>
                <li>
                  <a aria-label="Toss Instagram" target="_blank" href="https://www.instagram.com/toss.im/" rel="noreferrer">
                    <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Toss Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
