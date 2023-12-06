const Header = () => {
  return (
    <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                {" "}
                Hey! I'm Veronica Joan Amelia Tauran
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                {" "}
                Let me intoduce myself a little. I'm a student in Universitas
                Klabat and now I'm in my third year. I'm now 21 years old.
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                more about me
              </a>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
