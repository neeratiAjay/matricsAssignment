import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <h1 className="home-heading">When Innovation Meets</h1>
      <button className="btn-innovation" type = "button">Innovation</button>
      <p className="text-home">
        Empowering Trading Through Advanced Technology
      </p>
      <button className="app-btn shadow-inner-blue" type = "button">Open dApp</button>
    </div>
    <div className="home-container-lg">
      <video className="bg-video" autoPlay loop muted>
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
          type="video/mp4"
        />
      </video>
      <div className="flex-container-lg">
        <h1 className="heading-lg">
          When Innovation
          <br /> Meets
          <span className="innovation-heading-lg">Investment</span>
        </h1>
        <p className="content-lg">
          Empowering Trading Through Advanced Technology{' '}
        </p>
        <button className="lg-btn" type = "button">Open dApp</button>
      </div>
    </div>
  </>
)

export default Home
