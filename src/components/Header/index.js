import {useState} from 'react'
import {Link} from 'react-router-dom'
import {TbMenu} from 'react-icons/tb'

import './index.css'

const Header = () => {
  const [isClickMenu, setMenu] = useState(false)
  const clickMenu = () => setMenu(!isClickMenu)

  return (
    <>
      <nav className="header-nav-container">
        <div className="header-bg-container">
          <div>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1728972205/otjpkaqvjbz9ho2teayu.png"
              className="logo-img-small"
              alt="fhcfk hfjbv"
            />
          </div>
          <div>
            <button
              type="button"
              className="menu-click-btn"
              onClick={clickMenu}
            >
              <TbMenu size="20" color="#ffffff" />
            </button>
          </div>
        </div>
        {isClickMenu && (
          <ul className="ul-links-container-sm">
            <Link to="/features" className="link">
              <li className="list-item-sm">Features</li>
            </Link>

            <Link to="/whyus" className="link">
              <li className="list-item-sm">Why Us</li>
            </Link>
            <Link to="/tokenomics" className="link">
              <li className="list-item-sm">Tokenomics</li>
            </Link>
            <Link to="/roadmap" className="link">
              <li className="list-item-sm">Roadmap</li>
            </Link>
            <Link to="/about" className="link">
              <li className="list-item-sm">About</li>
            </Link>
          </ul>
        )}
      </nav>

      <nav className="nav-container-lg">
        <div className="logo-container-lg">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728972205/otjpkaqvjbz9ho2teayu.png"
            alt="company logo"
            className="logo-img-lg"
          />
          <p className="title">EthAi</p>
        </div>
        <ul className="ul-container-lg">
          <Link to="/features" className="link">
            <li className="list-item">Features</li>
          </Link>

          <Link to="/whyus" className="link">
            <li className="list-item">Why Us</li>
          </Link>
          <Link to="/tokenomics" className="link">
            <li className="list-item">Tokenomics</li>
          </Link>
          <Link to="/roadmap" className="link">
            <li className="list-item">Roadmap</li>
          </Link>
          <Link to="/about" className="link">
            <li className="list-item">About</li>
          </Link>
        </ul>
        <div className="login-container">
          <p className="login-heading">Log in</p>
          <button type="button" className="paper-btn">
            Whitepaper
          </button>
        </div>
      </nav>
    </>
  )
}
export default Header
