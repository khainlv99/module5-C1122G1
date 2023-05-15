import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as productService from "../service/productService";

export function EditProduct(){
    const [productType,setProductType] = useState([])
    const [product,setProduct] = useState()
    const param = useParams()
    const nav = useNavigate()
    useEffect(() => {
        const findAll = async () =>{
            const result1 = await productService.findAllType()
            setProductType(result1)
            const result2 = await productService.finById(param.id)
            setProduct(result2)
            console.log(product)

        }
        findAll()
    },[param.id])
    if(!product){
        return null
    }
    return(
        <>
            <Formik
                initialValues={{
                    id: product?.id,
                    name: product?.name,
                    date: product?.date,
                    number: product?.number,
                    type: product?.type
                }
                }
                onSubmit={(values, {setSubmitting}) => {
                    const edit = async () =>{
                        try {
                            values.type = parseInt(values.type)
                            await productService.edit(values)
                            nav('/')
                            alert('cap nhap thanh cong')
                        }catch (error){
                            console.log(error)
                        }
                    }
                    edit()
                }
                }>
                <Form>
                    <p>Id</p>
                    <Field type='hidden' name='id'></Field>
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