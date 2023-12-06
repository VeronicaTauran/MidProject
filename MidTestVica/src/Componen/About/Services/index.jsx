const Services = () => {
    return (
        <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">What I'm active at in UNKLAB</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Pathfiner/CMG class </h3>
                <p className="text-muted mb-0">
                  I'm currently a member of CMG, preparing myself to become a
                  Master Guid this Desember
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Study and Classes</h3>
                <p className="text-muted mb-0">
                  A student in Information System, Computer Science. Hopfully
                  going to graduate 3 semester from now.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Unklab Adventis Youth Sosial Media</h3>
                <p className="text-muted mb-0">
                  In Sabbath, I'm also active in Unklab Adventist Youth program.
                  Being the Coordinator in Sosial Media Division, with 12 member
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary" />
                </div>
                <h3 className="h4 mb-2">Other programs</h3>
                <p className="text-muted mb-0">
                  {" "}
                  Sometimes I do be busy with English Week programs baeing the
                  Sosial Media crew, and helping other Organisation such as
                  Choirs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Services