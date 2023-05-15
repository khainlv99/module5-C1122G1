import {Field, Form, Formik} from "formik";
import * as bookService from "../service/bookService";
import {useEffect, useState} from "react";

export function CreateBook() {
    const [typeList,setType] = useState([])
    useEffect(()=>{
        const fetchApi = async ()=> {
            const result = await bookService.finAllTypeBook()
            setType(result)
        }
        fetchApi()
    },[])
    return (
        <>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    typeBook: ''
                }
                }
                onSubmit={(values, {setSubmitting}) => {
                    const create = async ()=>{
                        try {
                            values.typeBook = parseInt(values.typeBook)
                            await bookService.createBook(values)
                        }catch (error){

                        }
                        setSubmitting(false)
                    }
                    create()
                }
                }>
                <Form>
                    <p>Id</p>
                    <Field type='text' name='id'></Field>
                    <p>Name</p>
                    <Field type='text' name='name'></Field>
                    <p>typeBook</p>
                    <Field as='select' name='typeBook'>
                        {
                            typeList.map((type1,index) => (
                                <option value={type1.idType} key={index}>{type1.name}</option>
                            ))
                        }
                    </Field>
                    <button type='submit' >submit</button>
                </Form>

            </Formik>
        </>
    )
}