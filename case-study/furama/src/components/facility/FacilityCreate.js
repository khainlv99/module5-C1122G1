import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {Oval, TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";
import facilityService from "../../service/facility/facilityService";
import {Link, useNavigate} from "react-router-dom";

export default function FacilityCreate() {
    let navigate = useNavigate();

    const [facilityServices, setFacilityServices] = useState([]);
    const [facilityType, setFacilityType] = useState([]);
    const [facilityRentType, setFacilityRentType] = useState([])
    const [standardRooms, setStandardRoom] = useState([])

    useEffect(() => {
        getFacilityService();
        getFacilityTypes();
        getfacilityRentType();
        getStandardRoom();
    }, []);

    const getStandardRoom = async () => {
        const rs = await facilityService.getStandardRoom();
        setStandardRoom(rs);
    };
    const getFacilityService = async () => {
        const facilityServiceData = await facilityService.getFacilityService();
        setFacilityServices(facilityServiceData);
    };
    const getFacilityTypes = async () => {
        const facilityTypeData = await facilityService.getFacilitiesTypes();
        setFacilityType(facilityTypeData);
    };

    const getfacilityRentType = async () => {
        const rs = await facilityService.getRentType()
        setFacilityRentType(rs)
    }
    if (!facilityServices||!facilityType||!facilityRentType){
        return null;
    }

    const handleFacilityChanged = (event) => {
        const villa = document.getElementById("villa");
        const room = document.getElementById("room");
        const house = document.getElementById("house");

        switch (event.currentTarget.value) {
            case "0":
                villa.style.display = "none";
                house.style.display = "none";
                room.style.display = "none";
                break;
            case "1":
                villa.style.display = "block";
                house.style.display = "none";
                room.style.display = "none";
                break;
            case "2":
                villa.style.display = "none";
                house.style.display = "block";
                room.style.display = "none";
                break;
            case "3":
                villa.style.display = "none";
                house.style.display = "none";
                room.style.display = "block";
                break;
            default:
                throw new Error("Value dịch vụ không hợp lệ");
        }
    };
    return (
        <div>
            <Header/>

            <Formik initialValues={{
                id: '', img: '', name: '', area: '', price: '', maxPeople: '',
                rentType: '', facilityTypes: '', standardRoom: '', description: '',
                poolArea: ''
                , numberOfFloors: '', facilityFree: '', facilityService: []
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Không được bỏ trống.'),
                        area: Yup.number().required('Không được bỏ trống.'),
                        img: Yup.string().required('Không được bỏ trống.'),
                        price: Yup.number().required('Không được bỏ trống.'),
                        maxPeople: Yup.number().required('Không được bỏ trống.'),
                        standardRoom: Yup.string().required('Không được bỏ trống.'),
                        description: Yup.string().required('Không được bỏ trống.'),
                        poolArea: Yup.number().required('Không được bỏ trống.'),
                        numberOfFloors: Yup.string().required('Không được bỏ trống.'),
                        facilityFree: Yup.string().required('Không được bỏ trống.'),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        try {
                            facilityService.save(values);
                            setSubmitting(false);
                            toast("Sửa thông tin dịch vụ thành công");
                            navigate("/facility");
                        } catch (error) {
                            toast("Sửa thông tin dịch vụ thất bại");
                            setSubmitting(false);
                        }
                    }}>
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <div className="card-header">
                            <strong id="inDam"><h1 className="card-title"
                                                   style={{color: 'red', textAlign: "center"}}>Thêm mới dịch vụ</h1>
                            </strong>
                        </div>
                            <div
                                className="card container bg-transparent" style={{width:'428px'}}

                            >

                                <div className="card-body">
                                    <div className="d-flex mb-2 row">
                                        <div className="form-label col-6 pe-0 d-flex align-items-center">
                                            <p className="card-title">
                                                Tên dịch vụ:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="name"
                                            />
                                            <ErrorMessage
                                                name="name"
                                                component="div"
                                                className="form-err"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2 row">
                                        <div className="form-label col-6 pe-0 d-flex align-items-center">
                                            <p className="card-title">
                                                Hình ảnh:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="img"
                                            />
                                            <ErrorMessage
                                                name="img"
                                                component="div"
                                                className="form-err"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 row">
                                        <div className="col-6 pe-0 d-flex align-items-center">
                                            <p
                                                className="card-text d-flex align-items-center"
                                                style={{marginRight: 78}}
                                            >
                                                Diện tích sử dụng:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="area"
                                            />
                                            <ErrorMessage
                                                name="area"
                                                component="div"
                                                className="form-err"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 row">
                                        <div className="col-6 pe-0 d-flex align-items-center">
                                            <p
                                                className="card-text d-flex align-items-center"
                                                style={{marginRight: 105}}
                                            >
                                                Chi phí thuê:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="price"
                                            />
                                            <ErrorMessage
                                                name="price"
                                                component="div"
                                                className="form-err"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 row">
                                        <div className="col-6 pe-0 d-flex align-items-center">
                                            <p
                                                className="card-text d-flex align-items-center"
                                                style={{marginRight: 105}}
                                            >
                                                Số lượng người tối đa:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="maxPeople"
                                            />
                                            <ErrorMessage
                                                name="maxPeople"
                                                component="div"
                                                className="form-err"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2 row">
                                        <div className="col-6 pe-0 d-flex align-items-center">
                                            <p className="card-text" style={{marginRight: 75}}>
                                                Kiểu thuê:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field component="select" name="rentType" className="form-select"
                                                   id="floatingSelect" aria-label="Floating label select example">
                                                {
                                                    facilityRentType?.map((facilityRentTypes) => (
                                                        <option key={facilityRentTypes.id}
                                                                value={facilityRentTypes.id}>{facilityRentTypes.name}</option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p className="card-text" style={{marginRight: 75}}>
                                                    Dịch vụ đi kèm:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                {facilityServices?.map((facilityService) => (
                                                    <div className="row" key={facilityService.id}>
                                                        <Field
                                                            style={{width: "5%", marginBottom: "0"}}
                                                            type="checkbox"
                                                            id={facilityService.id}
                                                            name="facilityService"
                                                            value={facilityService.id.toString()}
                                                        />
                                                        <label htmlFor={facilityService.id} className="col-10">
                                                            {facilityService.name}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-2 row">
                                        <div className="col-6 pe-0 d-flex align-items-center">
                                            <p className="card-text" style={{marginRight: 75}}>
                                                Loại dịch vụ:
                                            </p>
                                        </div>
                                        <div className="col-6 px-0">
                                            <Field
                                                as="select"
                                                style={{borderRadius: 5, width: "97%"}}
                                                name="facilityTypes"
                                                onChange={(event) => {
                                                    handleFacilityChanged(event);
                                                    setFieldValue(
                                                        "facilityTypes",
                                                        event.currentTarget.value
                                                    );
                                                }}
                                            >
                                                <option value="0">Dịch vụ</option>
                                                {facilityType?.map((type) => (
                                                    <option key={type.id} value={type.id}>
                                                        {type.name}
                                                    </option>
                                                ))}
                                            </Field>
                                        </div>
                                    </div>
                                    <div id="villa" style={{display: "none"}}>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Tiêu chuẩn phòng:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field component="select" name="standardRoom" className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                    {
                                                        standardRooms?.map((facilityStandards) => (
                                                            <option key={facilityStandards.id} value={facilityStandards.id}>{facilityStandards.name}</option>
                                                        ))
                                                    }
                                                </Field>
                                                <ErrorMessage
                                                    name="standardRoom"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Mô tả tiện nghi khác:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="description"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Diện tích hồ bơi:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="poolArea"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="poolArea"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Số tầng:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="numberFloors"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="numberFloors"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="house" style={{display: "none"}}>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Tiêu chuẩn phòng:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="standardRoom"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="standardRoom"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Mô tả tiện nghi khác:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="description"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Số tầng:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="numberFloors"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="numberFloors"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="room" style={{display: "none"}}>
                                        <div className="d-flex mb-3 row">
                                            <div className="col-6 pe-0 d-flex align-items-center">
                                                <p
                                                    className="card-text d-flex align-items-center"
                                                    style={{marginRight: 105}}
                                                >
                                                    Dịch vụ miễn phí đi kèm:
                                                </p>
                                            </div>
                                            <div className="col-6 px-0">
                                                <Field
                                                    name="facilityFree"
                                                    type="text"
                                                    className="form-control"
                                                />
                                                <ErrorMessage
                                                    name="facilityFree"
                                                    component="div"
                                                    className="form-err"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        {isSubmitting ? (
                                            <Oval
                                                height={80}
                                                width={80}
                                                color="#4fa94d"
                                                wrapperStyle={{}}
                                                wrapperClassName=""
                                                visible={true}
                                                ariaLabel="oval-loading"
                                                secondaryColor="#4fa94d"
                                                strokeWidth={2}
                                                strokeWidthSecondary={2}
                                            />
                                        ) : (
                                            <>
                                                <button type="submit" className="btn btn-success me-3">
                                                    Thêm
                                                </button>
                                                <Link to="/facility" className="btn btn-primary">
                                                    Thoát
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                    </Form>)}

            </Formik>

            <Footer/>
        </div>
    )
}


