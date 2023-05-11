import "bootstrap/dist/css/bootstrap.css"
import {NavLink} from "react-router-dom";

function Header() {
    return(
        <div>
        <header>
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light " id="header-nav">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand"  to={'/'}><img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt=""
                            style={{height: 60}}/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                >
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-white" aria-current="page"  to={'/facility'}>
                                      DỊCH VỤ </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="/#">ĐỘI NGŨ</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-white" aria-current="page"  to={'/customer'}>KHÁCH HÀNG</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active text-white" aria-current="page"  to={'/contract'}>HỢP ĐỒNG</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>


        </div>)}

export default Header;