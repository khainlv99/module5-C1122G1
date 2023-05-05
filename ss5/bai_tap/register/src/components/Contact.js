import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

export function Contact() {
    return (
        <>
            <Formik
                initialValues={{
                    name: 'Khải',
                    email: 'khainguyenlevan@gmail.com',
                    phone: '0702750320',
                    message: 'khai dep trai'
                }
                }
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Nhập tên"),
                    email: Yup.string()
                        .required("Nhập email")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,'Nhập sai email'),
                    phone: Yup.string()
                        .required("Nhập số điện thoại")
                })
                }
                onSubmit={(values,{setSubmitting}) => {
                    console.log(values)
                    setSubmitting(false)
                    alert("Add contact successfully!!!")
                }
                }>
                <Form>
                    <label>Name:</label>
                    <Field type="text"  name='name' /><br/>
                    <ErrorMessage name='name' component='div' className='error'/>
                    <label>Email:</label>
                    <Field type="text" name='email'/><br/>
                    <ErrorMessage name='email' component='div' className='error'/>
                    <label>Phone:</label>
                    <Field type="text" name='phone'/><br/>
                    <ErrorMessage name='phone' component='div' className='error'/>
                    <label>Message:</label>
                    <Field type="text" name='message'/><br/>
                    <input type="submit" value="Submit"/>
                </Form>
            </Formik>
        </>
    );
}