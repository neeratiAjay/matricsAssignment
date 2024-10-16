import {LuPlus} from 'react-icons/lu'

import './index.css'

const WhyUs = () => (
  <div className="main-container">
    <div className="column-container-change-lg">
      <h1 className="top-heading">Frequently Asked Questions</h1>
      <ul className="ul-container">
        <li className="list-item">
          <LuPlus size="20" color="#B0F9FF" />
          <p className="text-item">How can EthAi can help me as a Trader?</p>
        </li>
        <li className="list-item">
          <LuPlus size="20" color="#B0F9FF" />
          <p className="text-item">Who can use EthAi?</p>
        </li>
        <li className="list-item">
          <LuPlus size="20" color="#B0F9FF" />
          <p className="text-item">How does EthAi track smart money flow?</p>
        </li>
        <li className="list-item">
          <LuPlus size="20" color="#B0F9FF" />
          <p className="text-item">How does ensure data security?</p>
        </li>
      </ul>
    </div>
    <div className="card-container-whyus">
      <h1 className="explore-heading">
        Explore Our <span className="span-text">dApp</span>
      </h1>
      <p className="text-para-whyus">
        EthAi is an AI-powered dApp designed to help traders make smarter,
        data-driven decisions. By tracking smart money flows, monitoring key
        wallets, and providing real-time market insights, EthAi empowers users
        to stay ahead of trends. The platform offers intuitive AI Features for
        asset recommendations, market analysis, and personalized crypto Q&A,
        making it the ultimate tool for both novice and experienced traders.
      </p>
      <button className="open-app-btn" type = "button">
      Open dApp
      </button>
    </div>
    <div className="logo-title-container">
      <img
        src="https://res.cloudinary.com/dieu9paow/image/upload/v1728972205/otjpkaqvjbz9ho2teayu.png"
        className="logo-img"
         alt = "image-46"
      />
      <h1 className="title">EthAi</h1>
    </div>
    <ul className="ul-icons-container">
      <li>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057946/telegram_frld3z.png"
          alt="telegram logo"
          className="icon-image"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057950/instagram_kumdno.png"
          alt="instagram logo"
          className="icon-image"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057958/discord_ih2adm.png"
          alt="twitter logo"
          className="icon-image"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057965/Facebook_lpfmrw.png"
          alt="facebook logo"
          className="icon-image"
        />
      </li>
      <li>
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057971/discord_1_vs2msp.png"
          alt="game icon logo"
          className="icon-image"
        />
      </li>
    </ul>

    <div className="flex-row-bottom-container">
      <div className="flex-column-container">
        <div className="logo-title-container-lg">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728972205/otjpkaqvjbz9ho2teayu.png"
            className="logo-img-lg"
          />
          <h1 className="title-lg">EthAi</h1>
        </div>
        <ul className="ul-icons-container-lg">
          <li>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057946/telegram_frld3z.png"
              alt="telegram logo"
              className="icon-image-lg"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057950/instagram_kumdno.png"
              alt="instagram logo"
              className="icon-image-lg"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057958/discord_ih2adm.png"
              alt="twitter logo"
              className="icon-image-lg"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057965/Facebook_lpfmrw.png"
              alt="facebook logo"
              className="icon-image-lg"
            />
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1729057971/discord_1_vs2msp.png"
              alt="game icon logo"
              className="icon-image-lg"
            />
          </li>
        </ul>
      </div>

      <div className="column-bottom-container">
        <h1 className="bottom-heading">
          “Designed for traders of today, just like you."
        </h1>
        <div className="input-cotainer">
          <p className="placeholder">What's your work email?</p>
          <button className="get-started-btn" type = "button">
          Get Started
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default WhyUs
