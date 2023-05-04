export function ListFacility() {
    return(<>
            <section className="navbar d-flex justify-content-center" id="navbar">
                <div className="col-sm-12 col-md-11 ">
                    <h2 style={{ textAlign: "center" }}>Facility List</h2>
                </div>
            </section>
            <div className="card-group" style={{ justifyContent: "center" }}>
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">House</h5>
                        <p className="card-text">Area: 500m2</p>
                    </div>
                </div>
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkybTLUpcmqYti7Vk5Hs2F5gXb6J8hKC6Ig&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Room</h5>
                        <p className="card-text">Area: 100m2</p>
                    </div>
                </div>
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://pqr.vn/wp-content/uploads/2020/06/villas-la-gi2.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Villa</h5>
                        <p className="card-text">Area: 200m2</p>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5e0e16044ce9a12790e1596e/1591889572404-XAQT6P9PG96R9ITX7BZR/Custom+Traditional+New+Home+in+Edina27.jpg"
                        className="c   ard-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">House</h5>
                        <p className="card-text">Area: 300m2</p>
                    </div>
                </div>
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfuORfM7DW7Q0JvoIb-8JJ70_VxcxoiNQMg&usqp=CAU"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Room</h5>
                        <p className="card-text">Area: 100m2</p>
                    </div>
                </div>
                <div className="card" style={{ margin: 10 }}>
                    <img
                        src="https://vinpearlresortvietnam.com/wp-content/uploads/villa-4-phong-ngu-vinpearl-phu-quoc-6.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Villa</h5>
                        <p className="card-text">Area: 200m2</p>
                    </div>
                </div>
            </div>
        </>
    );
}