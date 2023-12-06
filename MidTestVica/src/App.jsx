//import './assets/css/styles.css'
import Services from "./Componen/About/Services/index.jsx";
import About from "./Componen/About/index.jsx";
import CallToAction from "./Componen/CallToAction/index.jsx";
import Contact from "./Componen/Contact/index.jsx";
import Footer from "./Componen/Footer/index.jsx";
import Header from "./Componen/Header/index.jsx";
// import "/assets/js/scripts.jsx";

function App() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <title> VJAT - Short Profile</title>
      {/* Favicon*/}
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      {/* Bootstrap Icons*/}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      {/* Google fonts*/}
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic"
        rel="stylesheet"
        type="text/css"
      />
      {/* SimpleLightbox plugin CSS*/}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css"
        rel="stylesheet"
      />
      {/* Core theme CSS (includes Bootstrap)*/}
      <link href="css/styles.css" rel="stylesheet" />
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            VJAT
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  AboutMe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  What I'm active at in UNKLAB
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  PicturesOfMine
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  ContactMe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <Header/>
      {/* About*/}
      <About/>
      {/* Services*/}
      <Services/>
      {/* Portfolio*/}
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ay1.JPG?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ay1.JPG?raw=true" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Adventist youth Unklab
                  </div>
                  <div className="project-name">
                    Koordinator Sosial Media AY
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ik1.jpg?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ik1.jpg?raw=true" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">IKMAMA</div>
                  <div className="project-name">IKATAN MAHASISWA MALUKU</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/me1.jpg?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/me1.jpg?raw=true" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">FAMILY</div>
                  <div className="project-name">
                    Tauran - Kalengkongan, 2009
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/pth1.jpg?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/pth1.jpg?raw=true" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    PATHFINDER
                  </div>
                  <div className="project-name">CMT- CERTIFICATION</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/uk2.jpg?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/uk2.jpg?raw=true" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">CAMPUS</div>
                  <div className="project-name">
                    UNIVERITAS KLABAT, AIRMADIDI
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a
                className="portfolio-box"
                href="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ik2.jpg?raw=true"
                title="Project Name"
              >
                <img className="img-fluid" src="https://github.com/VeronicaTauran/MidProject/blob/main/MidTestVica/src/assets/img/ik2.jpg?raw=true" alt="..." />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">IKMAPAP</div>
                  <div className="project-name">IKATAN MAHASISWA PAPUA</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Call to action*/}
      <CallToAction/>
      {/* Contact*/}
      <Contact/>
      {/* Footer*/}
      <Footer/>
      {/* Bootstrap core JS*/}
      {/* SimpleLightbox plugin JS*/}
      {/* Core theme JS*/}
      {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
      {/* * *                               SB Forms JS                               * **/}
      {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
      {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
    </div>
  );
}

export default App;
