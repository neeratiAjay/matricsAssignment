import './index.css'

const Tokenomics = () => (
  <div className="tokenomics-container">
    <h1 className="tokenomics-heading">Tokenomics</h1>
    <div className="flex-row-change-container">
      <div className="chart-container">
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1729006017/Donut_aro47l.png"
          className="pie-chart-img"
          alt="image-myImage-23"
        />
      </div>
      <div className="column-container-change">
        <ul className="card-content-container">
          <li className="flex-list-container">
            <span className="span"> Name</span>
            <span className="semicolon">:</span>
            <span className="span">EthAi</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Token Name</span>
            <span className="semicolon">:</span>
            <span className="span"> $EthAi</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Token standard</span>
            <span className="semicolon">:</span>
            <span className="span"> ERC20</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Blockchain</span>
            <span className="semicolon">:</span>
            <span className="span"> Ethereum</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Total Supply</span>
            <span className="semicolon">:</span>
            <span className="span">100 Million</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Tax</span>
            <span className="semicolon">:</span>
            <span className="span"> 5%/5%</span>
          </li>
        </ul>
        <ul className="card-content-container-2">
          <li className="flex-list-container">
            <span className="span"> Team</span>
            <span className="semicolon">:</span>
            <span className="span">35%</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Marketing</span>
            <span className="semicolon">:</span>
            <span className="span"> 5%</span>
          </li>
          <li className="flex-list-container">
            <span className="span"> Liquidity Pool</span>
            <span className="semicolon">:</span>
            <span className="span">90%</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Tokenomics
