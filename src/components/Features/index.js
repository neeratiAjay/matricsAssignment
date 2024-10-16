import './index.css'

const Features = () => (
  <>
    <div className="fetures-container">
      <h1 className="fetures-heading">Our Features</h1>
      <div className="card-container-1">
        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1728980470/Group_21_mxb5o8.png"
          className="card-img-1"
          alt = "image-1"
        />
        <h3 className="card-heading">Trade Optimizer</h3>
        <p className="card-text">
          Find the right moments to buy or sell, with personalized trade
          suggestions designed to help you make the most of every opportunity.{' '}
        </p>
      </div>
      <div className="card-contaner-2">
        <h3 className="market-heading">Market Insight</h3>
        <p className="market-text">
           Stay ahead of the market. Get real-time updates on market trends,
          track top traders&rsquo; movements, and spot signals from key influencers.
        </p>
      </div>

      <div className="card-container-3">
        <h3 className="card-heading">Risk Guard </h3>
        <p className="card-text">
          Get alerts on market swings and potential risks before they impact
          your portfolio. This agent helps you navigate volatility and stay
          prepared for anything.
        </p>

        <img
          src="https://res.cloudinary.com/dieu9paow/image/upload/v1728983580/Container_2_kmdy1k.png"
          className="card-img-2"
          alt = "image-2"
        />
      </div>

      <div className="card-container-4">
        <div className="content-container">
          <h3 className="market-heading">Portfolio Sync </h3>
          <p className="portfolio-text">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it’s headed.
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728983533/Group_1_ibosz5.png"
            className="card-image-3"
            alt = "image-3"
          />
        </div>
      </div>
      <div className="card-container-4 m-bottom">
        <div className="content-container">
          <h3 className="market-heading">Portfolio Sync </h3>
          <p className="portfolio-text">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it’s headed.
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728984633/OBJECTS_skiz8q.png"
            className="card-image-3"
            alt = "image-4"
          />
        </div>
      </div>
    </div>
    <div className="feature-container-lg">
      <div className="flex-row-container">
        <div className="card-lg-1">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1729068177/Rectangle_3_quqddp.png"
            className="lg-img-1"
            alt = "image-5"
          />
          <h1 className="card-heading-lg">Trade Optimizer </h1>
          <p className="card-text-lg">
            Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity.{' '}
          </p>
        </div>
        <div className="flex-column-container-lg">
          <div className="column-card-1">
            <h1 className="card-heading-lg-2"> Market Insight </h1>
            <p className="card-text-lg-2">
              Stay ahead of the market. Get real-time updates on market trends,
              track top traders' movements, and spot signals from key
              influencers.
            </p>
          </div>
          <div className="column-card-2">""</div>
        </div>
        <div className="flex-row-container-2-lg">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1729068183/Overlay_tf7uzl.png"
            className="lg-img-2"
            alt = "image-6"
          />
        </div>
      </div>
      <div className="flex-row-container">
        <div className="row-container-bottom-1">
          <h1 className="card-heading-lg-2">Portfolio Sync </h1>
          <p className="card-text-lg-2">
            Easily manage your portfolio. You'll always know what you own, how
            it's performing, and where it’s headed.
          </p>
        </div>
        <div className="row-container-bottom-2">
          <h1 className="card-heading-lg-2">Opportunity Scout </h1>
          <p className="card-text-lg-2">
            Find exciting new projects, events and tokens that others might be
            missing. Identifying promising opportunities early, so you never
            miss out on the next big thing.
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Features
