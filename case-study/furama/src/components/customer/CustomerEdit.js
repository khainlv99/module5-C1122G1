import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TailSpin} from "react-loader-spinner";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import customerService from "../../service/customer/customerService";

function CustomerEdit() {
    let navigate = useNavigate()
    const { id } = useParams()
    const [customerList, setCustomerList] = useState();
    const [customerTypeList, setCustomerTypeList] = useState([])


    useEffect(() => {
        const fetchApi = async () => {

            const customerData = await customerService.findById(id);
            setCustomerList(customerData);

            const customerTypesData = await customerService.getAllCustomerType()
                setCustomerTypeList(customerTypesData)
        };
            fetchApi();

    }, [id]);

    if (!customerList){
        return null;
    }

    return (
        <>
            <Header/>
            <div id="container">
                <Formik initialValues={{
                    id: customerList.id,
                    name: customerList.name,
                    dateOfBirth: customerList.dateOfBirth,
                    gender: customerList.gender,
                    identityNumb: customerList.identityNumb,
                    phoneNumb: customerList.phoneNumb,
                    email: customerList.email,
                    customerTypes: customerList.customerTypes,
                    address: customerList.address
                }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Không được bỏ trống'),
                            dateOfBirth: Yup.date().required('Không được bỏ trống'),
                            identityNumb: Yup.number().required('Không được bỏ trống'),
                            phoneNumb: Yup.number().required('Không được bỏ trống'),
                            address: Yup.string().required('Không được bỏ trống'),
                            email: Yup.string().required('Không được bỏ trống').email('Nhập đúng định dạng Email'),
                        })}
                        onSubmit={(values, {setSubmitting}) => {
                            const edit = async () => {
                                const data = {
                                    ...values,
                                    customerTypes: +values.customerTypes
                                }
                                await customerService.edit(data)
                                setSubmitting(false)
                                toast("Sửa thông tin khách hàng thành công")
                                navigate('/customer')
                            }
                            edit()
                        }
                        }>
                    {({isSubmitting}) => (
                        <Form >
                            <div className="card-header">
                                <strong id="inDam"><h1 className="card-title"
                                                       style={{color: 'red', textAlign: "center"}}>Sửa thông tin khách hàng</h1>
                                </strong>
                            </div>
                            <div className="card container bg-transparent" style={{width:'428px'}}>
                                <div className="card-body">
                                    <div>
                                        <label className="form-label animationTop delay-03">Customer Name:</label>
                                        <Field className="form-control animationTop delay-04" type="text" name={'name'}
                                        />
                                        <ErrorMessage name='name' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-05"> Day Of Birth :</label>
                                        <Field className="form-control animationTop delay-06" type="date"
                                               name={'dateOfBirth'}
                                        />
                                        <ErrorMessage name='dateOfBirth' component='span' className='form-err'/>
                                    </div>
                                    <div>
                                        <label className="fs-5" htmlFor="">
                                            Giới tính:
                                        </label>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="inlineRadio1"
                                                value='1'
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                Nam
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="inlineRadio2"
                                                value='2'
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio2">
                                                Nữ
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="inlineRadio3"
                                                value='0'
                                            />
                                            <label className="form-check-label" htmlFor="inlineRadio3">
                                                LGBT
                                            </label>
                                        </div>

                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-08">ID Card :</label>
                                        <Field className="form-control animationTop delay-09" type="text"
                                               name={'identityNumb'}/>
                                        <ErrorMessage name='identityNumb' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-11">Phone Number :</label>
                                        <Field className="form-control animationTop delay-12" type="text"
                                               name={'phoneNumb'}
                                        />
                                        <ErrorMessage name='phoneNumb' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-13">Email :</label>
                                        <Field className="form-control animationTop delay-14" type="text"
                                               name={'email'}/>
                                        <ErrorMessage name='email' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-15">Address :</label>
                                        <Field className="form-control animationTop delay-16" type="text"
                                               name={'address'}/>
                                        <ErrorMessage name='address' component='span' className='form-err'/>
                                    </div>

                                    <div>
                                        <label className="form-label animationTop delay-17" htmlFor={'floatingSelect'}>Customer Type :</label>
                                        <Field component="select" name='customerTypes' className="form-select" id="floatingSelect" >
                                            {
                                                customerTypeList?.map((customerType) => (
                                                    <option key={customerType.id} value={customerType.id}>{customerType.name}</option>
                                                ))
                                            }
                                        </Field>
                                    </div>

                                </div>

                                {
                                    isSubmitting ?
                                        <TailSpin
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="tail-spin-loading"
                                            radius="1"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                        :
                                        <button style={{textAlign: 'center'}} type="submit"
                                                className="m-3 btn btn-info animationTop delay-19">Submit</button>
                                }
                            </div>

                        </Form>
                    )}
                </Formik>


            </div>
            <Footer/>
            <ToastContainer/>
        </>)
}

export default CustomerEdit;