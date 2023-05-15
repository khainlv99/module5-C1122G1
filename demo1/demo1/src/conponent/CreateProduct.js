import {useEffect, useState} from "react";
import * as productService from "../service/productService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup"

export function CreateProduct(){
    const [productType,setProductType] = useState([])
    const nav = useNavigate()
    useEffect(()=> {
        const findAll = async ()=> {
            const result = await productService.findAllType()
            setProductType(result)
        }
        findAll()
    })
    return(
        <>
            <Formik
                initialValues={{
                    name: '',
                    date: '',
                    number: '',
                    type: ''
                }
                }
                onSubmit={(values, {setSubmitting}) => {
                    const create = async ()=> {
                        values.type = parseInt(values.type)
                        await productService.create(values)
                        nav('/')
                    }
                    create()
                }
                }>
                <Form>
                    <p>Ten san pham</p>
                    <Field type='text' name='name'></Field>
                    <p>Ngay nhap</p>
                    <Field type='date' name='date'></Field>
                    <p>So luong</p>
                    <Field type='text' name='number'></Field>
                    <Field as='select' name='type'>
                        {
                            productType.map((type1,index)=>(
                                <option value={type1.id} key={index}>{type1.nameType}</option>
                            ))
                        }
                    </Field>
                    <button type='submit'>Luu</button>
                </Form>
            </Formik>
        </>
    )
}