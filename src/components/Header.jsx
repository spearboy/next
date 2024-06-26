import { headNavs } from "@/constants/index"
import { useState } from "react"

export default function Header() {
  const [show,setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prevShow) => ! prevShow);
  }
  return (
    <header id="header" role="banner">
    <div className="header__inner">
      <h1 className="header__logo">
        <a href="">portfolio <em>next.js</em></a>
      </h1>
      <div className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
        <ul>
          {headNavs.map((nav,key) => (
            <li key={key}>
              <a href={nav.url}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div id="headerToggle" className="header__nav__mobile" aria-controls="primary-menu" aria-expanded={show ? "true" : "false"} role="button" tabindex="0" onClick={toggleMenu}>
        <span></span>
      </div>
    </div>
  </header>
  )
}
