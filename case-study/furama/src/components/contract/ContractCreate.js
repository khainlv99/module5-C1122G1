import Header from "../header/Header";
import Footer from "../footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import {useEffect, useState} from "react";
import customerService from "../../service/customer/customerService";
import facilityService from "../../service/facility/facilityService";
import contractService from "../../service/contract/contractService";
import {useNavigate} from "react-router-dom";

function ContractCreate() {
    let navigate = useNavigate()
    const [customerList, setCustomerList] = useState();
    const [facilitiesList, setFacilitiesList] = useState();


    const getCustomerList = async () => {
        const customerData = await customerService.findAll();
        setCustomerList(customerData);
    };

    const getFacilitiesList = async () => {
        const facilityData = await facilityService.findAll();
        setFacilitiesList(facilityData);
    };
    useEffect(() => {
        getCustomerList();
        getFacilitiesList();
    }, []);
    if (!customerList || !facilitiesList) {
        return null;
    }
    return (
        <>
            <Header/>
            <Formik initialValues={{
                contractCode: '', startDate: '', endDate: '', deposit: '',
                totalMoney: '', id: '',
                customers: customerList[0]?.id,
                facilities: facilitiesList[0]?.id,
            }}
                    validationSchema={Yup.object({
                        contractCode: Yup.string().required('Không được bỏ trống.'),
                        startDate: Yup.string().required('Không được bỏ trống.'),
                        endDate: Yup.string().required('Không được bỏ trống.'),
                        deposit: Yup.number().required('Không được bỏ trống.'),
                        totalMoney: Yup.number().required('Không được bỏ trống.')
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            await contractService.save(values)
                            setSubmitting(false);
                            toast("Tạo mới thành công!");
                            navigate('/contract')
                        }
                        create();
                    }
                    }>


                {({isSubmitting}) => (
                    <Form>
                        <div className="card-header">
                            <strong id="inDam"><h1 className="card-title"
                                                   style={{color: 'red', textAlign: "center"}}>Tạo mới hợp đồng</h1>
                            </strong>
                        </div>
                        <div className="card container bg-transparent" style={{width:'428px'}}>
                        <div className="card-body">
                                <div className="form-group ">
                                    <label className="form-label" htmlFor="facility">Số hợp đồng</label>
                                    <Field style={{width: '100%', height: ' 70%'}} name={'contractCode'} id="facility"/>
                                    <ErrorMessage name='contractCode' component='span' className='form-err'/>
                                </div>
                                <div className="form-group ">
                                    <label className="form-label" htmlFor="customers">Tên khách hàng</label><br/>
                                    <Field as="select" name="customers" id="customers">
                                        {customerList?.map((customer) => (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="form-group ">
                                    <label className="form-label" htmlFor="facilities">Tên dịch vụ</label><br/>
                                    <Field as="select" name="facilities" id="facilities">
                                        {facilitiesList?.map((facility) => (
                                            <option key={facility.id} value={facility.id}>
                                                {facility.name}
                                            </option>
                                        ))}
                                    </Field>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="dayStart">Ngày bắt đầu:</label>
                                    <Field type="date" name={'startDate'} className="form-control time-mask"
                                           placeholder="?" id="dayStart"/>
                                    <ErrorMessage name='startDate' component='span' className='form-err'/>

                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="endDateForm">Ngày kết thúc:</label>
                                    <Field type="date" className="form-control numeral-mask" name={'endDate'}
                                           id="endDateForm"/>
                                    <ErrorMessage name='endDate' component='span' className='form-err'/>

                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="deposit">Tiền đặt cọc (VNĐ):</label>
                                    <Field type="number" name={'deposit'} className="form-control block-mask"
                                           id="deposit"/>
                                    <ErrorMessage name='deposit' component='span' className='form-err'/>

                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="totalMoney">Tổng tiền (VNĐ):</label>
                                    <Field type="number" name={'totalMoney'} className="form-control block-mask"
                                           id="totalMoney"/>
                                    <ErrorMessage name='totalMoney' component='span' className='form-err'/>

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
                                        className="m-3 btn btn-info animationTop delay-19">Lưu</button>
                        }
                        </div>
                    </Form>
                )}
            </Formik>


            <Footer/>
        </>)
}

export default ContractCreate;