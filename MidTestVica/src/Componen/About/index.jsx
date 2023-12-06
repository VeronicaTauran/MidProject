const About = () => {
    return (
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">About me !</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                People like to call me Vica. I can speak in English and Bahasa
                Indonesia, because I'm an Indonesian girl but was raised in the
                Philipines. I'm the youngest in my family. In Indonesia I come
                from a place called "AMBON" known as " The City Of Music ".
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                more
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
export default About;