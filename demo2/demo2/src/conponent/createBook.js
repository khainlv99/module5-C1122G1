import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";

export function CreateBook(){
    const [bookType,setBookType] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        const findAll = async ()=> {
            const result1 = await bookService.findAllType()
            setBookType(result1)
        }
        findAll()
    },[])
    return(
        <>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    type: ''
                }
                }
                onSubmit={(values, {setSubmitting}) => {
                    const create = async ()=>{
                        try {
                            values.type = parseInt(values.type)
                            await bookService.create(values)
                            nav("/")
                        }catch (error){
                            console.log(error)
                        }
                    }
                    create()
                }
                }>
                <Form>
                    <p>Name</p>
                    <Field name='name' type='text'></Field>
                    <p>Type</p>
                    <Field as='select' name='type'>
                        {
                            bookType.map((bookType1,index)=>(
                                <option key={index} value={bookType1.id}>{bookType1.nameType}</option>
                            ))
                        }
                    </Field>
                    <button type='submit'>Lưu</button>
                </Form>
            </Formik>
        </>
    )
}