import Header from "../header/Header";
import Footer from "../footer/Footer";


function Home() {
    return(
        <>

        <Header></Header>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{marginBottom: '34px'}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://hongngocha.com/wp-content/uploads/2019/05/Vietnam_Danang_Furama_Resort.jpg" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://danangfantasticity.com/wp-content/uploads/2021/02/Furama-resort-danang-103-105-vo-nguyen-giap-da-nang-ocean-view.jpg" className="d-block w-100" />
                    </div>
                </div>
                <div className="card-img-overlay">
                    <div className="row mt-5">
                        <div className="col-lg-6 mt-5 d-flex">

                            <div className="col-12">
                            <p>
                            <h2 style={{color: '#fff', lineHeight: '34px',marginTop: '152px'}}><strong>KHU NGHỈ DƯỠNG ẨM THỰC </strong><br />
                                <strong>TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG </strong><br />
                                <strong>MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI<br />
                                </strong></h2>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    <div className="container">
        <div className="content">
            <div className="row">
                <div className="col-4" style={{paddingTop: '17px'}}>
                    <h2 style={{fontSize: '24px',color: '#cbbe73',lineHeight: '36px',textAlign: 'left',fontFamily:'Playfair Display',fontWeight:'700',fontStyle:'normal'}}>KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.</h2>
                </div>

                <div className="col-4">
                    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                    <iframe width="370" height="278.98"
                            src="https://www.youtube.com/embed/Pa8tN0u0Rr0">
                    </iframe>
                </div>
                <div className="col-4" style={{marginTop: '19px' , color: '#212121',fontWeight: '300',fontSize: '14px',fontFamily:'Open Sans, sans-serif',
                    lineHeight: '22px', paddingLeft: '18px'}}>
                    <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang nhã, theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh quốc tế.</p>
                </div>
            </div>
        </div>
    </div>

        <Footer></Footer>

        </>
    )
}

export default Home;