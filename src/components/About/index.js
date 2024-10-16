import './index.css'

const About = () => (
  <>
    {' '}
    <div className="about-container">
      <h1 className="about-heading">About EthAi</h1>
      <p className="about-text">
        At Eth Ai, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button
        className="read-btn shadow-inner-custom bg-blue-500"
        type="button"
      >
        Read more
      </button>

      <div className="about-content-container">
        <div className="content-card">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993126/graph_afav0b.png"
            className="about-content-icon"
            alt="image-1"
          />
          <h3 className="about-content-heading">Stay Ahead</h3>
          <p className="about-content-text">
            No more guesswork—get clear, trustable insights.
          </p>
        </div>
        <div className="content-card">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993135/wallet_wf2zqe.png"
            className="about-content-icon"
            alt="dfsjkd fdg"
          />
          <h3 className="about-content-heading">Know Your Assets</h3>
          <p className="about-content-text">
            Always stay on top of how your investments are performing.
          </p>
        </div>
        <div className="content-card">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993142/Tools_nz86w6.png"
            className="about-content-icon"
            alt="dfjadj fkda"
          />
          <h3 className="about-content-heading">Simple, Not Overwhelming</h3>
          <p className="about-content-text">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>
        <div className="content-card">
          <img
            src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993152/Future_Technology_amhaj6.png"
            className="about-content-icon"
            alt="dfksafjdksl fjds"
          />
          <h3 className="about-content-heading">Future-Proof</h3>
          <p className="about-content-text">
            We’re constantly improving, adding new features to help you make the
            most informed decisions possible.
          </p>
        </div>
      </div>
    </div>
    <div className="about-container-lg">
      <h1 className="about-heading-lg">About EthAi</h1>
      <p className="about-text-lg">
        At EthAi, we’re all about making crypto trading easier and more
        intuitive. We provide tools that help traders keep up with all new
        market trends, track top traders’ movements.
      </p>
      <button
        className="read-btn-lg shadow-inner-custom bg-blue-500 "
        type="button"
      >
        Read more
      </button>
      <div className="flex-row-container about-lg-card-container">
        <div className="flex-column-container">
          <div className="content-card-lg">
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993126/graph_afav0b.png"
              className="about-content-icon-lg"
              alt="image-3"
            />
            <h3 className="about-content-heading-lg">Stay Ahead</h3>
            <p className="about-content-text-lg">
              No more guesswork—get clear, trustable insights.
            </p>
          </div>
          <div className="content-card-lg">
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993142/Tools_nz86w6.png"
              className="about-content-icon-lg"
              alt="image4"
            />
            <h3 className="about-content-heading-lg">
              Simple, Not Overwhelming
            </h3>
            <p className="about-content-text-lg">
              Our tools are designed to make complex market analysis easy to
              understand and act on.
            </p>
          </div>
        </div>
        <div className="flex-column-container">
          <div className="content-card-lg">
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993135/wallet_wf2zqe.png"
              className="about-content-icon-lg"
              alt="image5"
            />
            <h3 className="about-content-heading-lg">Know Your Assets</h3>
            <p className="about-content-text-lg">
              Always stay on top of how your investments are performing.
            </p>
          </div>
          <div className="content-card-lg">
            <img
              src="https://res.cloudinary.com/dieu9paow/image/upload/v1728993152/Future_Technology_amhaj6.png"
              className="about-content-icon-lg"
              alt="dsgzsd"
            />
            <h3 className="about-content-heading-lg">Future-Proof</h3>
            <p className="about-content-text-lg">
              We’re constantly improving, adding new features to help you make
              the most informed decisions possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
)
export default About
