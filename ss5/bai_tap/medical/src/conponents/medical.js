import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
export function Medical() {
    return (
        <>
            <Formik
                initialValues={
                    {
                        name: '',
                        cmnd: '',
                        birthday: '',
                        gender: ['Nam', 'Nữ'],
                        nationality: '',
                        company: '',
                        part: '',
                        insurance: '',
                        province: '',
                        district: '',
                        wards: '',
                        apartment: '',
                        phone: '',
                        email: ''
                    }
                }
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required(),
                    cmnd: Yup.string()
                        .required(),
                    birthday: Yup.string()
                        .required()
                        .min(1900),
                    nationality: Yup.string()
                        .required(),
                    province: Yup.string()
                        .required(),
                    district: Yup.string()
                        .required(),
                    wards: Yup.string()
                        .required(),
                    apartment: Yup.string()
                        .required(),
                    phone: Yup.string()
                        .required(),
                    email: Yup.string()
                        .required()
                        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/,'Invalid email address')
                })
                }
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    setSubmitting(false)
                }
                }>
                <Form>
                    <h1>Tờ khai báo y tế</h1>
                    <label>Họ tên:</label><br/>
                    <Field type="text" name='name'/><br/>
                    <ErrorMessage name='name' component='span' className='error'/>
                    <label>Số hộ chiếu/CMND:</label><br/>
                    <Field type="text" name='cmnd'/><br/>
                    <ErrorMessage name='cmnd' component='span' className='error'/>
                    <label>Năm sinh:</label><br/>
                    <Field type="text" name='birthday'/><br/>
                    <ErrorMessage name='birthday' component='span' className='error'/>
                    <label>Giới tính:</label>
                    <Field type="radio" name='gender' value='0'/>Nam
                    <Field type="radio" name='gender' value='1'/>Nữ<br/>
                    <label>Quốc tịch:</label><br/>
                    <Field type="text" name='nationality'/><br/>
                    <label>Công ty làm việc:</label><br/>
                    <Field type="text" name='company'/><br/>
                    <label>Bộ phận làm việc:</label><br/>
                    <Field type="text" name='part'/><br/>
                    <label>Có thẻ bảo hiểm hay không:</label>
                    <Field type="checkbox" name='insurance'/><br/>
                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                    <label>Tỉnh thành:</label><br/>
                    <Field type="text" name='province'/><br/>
                    <label>Quận /huyện:</label><br/>
                    <Field type="text" name='district'/><br/>
                    <label>Phường /xã:</label><br/>
                    <Field type="text" name='wards'/><br/>
                    <label>Số nhà, phố, tổ dân phố/ thôn/ đội:</label><br/>
                    <Field type="text" name='apartment'/><br/>
                    <label>Điện thoại:</label><br/>
                    <Field type="text" name='phone'/><br/>
                    <label>Email:</label><br/>
                    <Field type="text" name='email'/><br/>
                    <input type="submit" value="Submit"/>
                </Form>
            </Formik>
        </>
    );

}