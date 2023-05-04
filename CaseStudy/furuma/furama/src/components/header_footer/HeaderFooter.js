import React from "react";

export function HeaderFooter() {
    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggle-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/customer"
                                    >
                                        Customer
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/facility"
                                    >
                                        Facility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/contract"
                                    >
                                        Contract
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {/*main*/}
            <div className="row main bg-primary vh-100 ">
                <div className="vh-100 vw-100 p-0" style={{ width: "100%" }}>
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide"
                        style={{ width: "100%" }}
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={0}
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={1}
                                aria-label="Slide 2"
                            />
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to={2}
                                aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active vw-100">
                                <div className="vh-100">
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                                        className="d-block vw-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>
                                        Some representative placeholder content for the first slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item vw-100">
                                <div className="vh-100">
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                                        className="d-block vh-100 vw-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>
                                        Some representative placeholder content for the second slide.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item vw-100">
                                <div className="vh-100">
                                    <img
                                        src="https://phulong.com/UploadFiles/Images/FURAMA%2020%20NAM.jpg"
                                        className="d-block w-100 vw-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>
                                        Some representative placeholder content for the third slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row footer bg-secondary text-light">
                <div className="col-md-4 ">
                    <h2>How to Get To Us</h2>
                    <p>
                        Furama is a premier base for exploring one of Asia’s most exciting new
                        destinations. Just a short drive from Danang lay four UNESCO-listed World
                        Heritage Sites:
                    </p>
                </div>
                <div className="col-md-4">
                    <h4>Local Places</h4>
                    <table className="table table-hover text-light">
                        <tbody>
                        <tr>
                            <td>1.</td>
                            <td>imperial city of HUE</td>
                            <td>2 hours</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>The ancient city Hoi An</td>
                            <td>30 minutes</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Champa civilization</td>
                            <td>90 minutes</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Phong Nha Caves</td>
                            <td>3 hours</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h4>Contact Us</h4>
                    <p>
                        103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District,
                        Danang City, Vietnam Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                        Email: reservation@furamavietnam.com * www.furamavietnam.com GDS Codes:
                        Amadeus-GD DADFUR, Galileo/Apollo-GD 16236, Sabre-GD 032771, Worldspan- GD
                        DADFU
                    </p>
                </div>
            </div>
        </>
    );
}