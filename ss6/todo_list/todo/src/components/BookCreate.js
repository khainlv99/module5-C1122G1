import {useState} from "react";
import {Field, Form, Formik} from "formik";
import * as BookService from "../service/BookService";

export function BookCreate() {
    return(
        <>
            <Formik
            initialValues={{
                id: '',
                title: '',
                quantity: ''
            }
            }
            onSubmit={(values, {setSubmitting}) => {
                const create = async () => {
                    await BookService.save()
                    setSubmitting(false)
                }
                create()
            }
            }>
                {
                    <Form>
                        <p>Title</p>
                        <Field type='text' name='title'/>
                        <p>Quantity</p>
                        <Field type='text' name='quantity'/>
                        <button>Add</button>
                    </Form>
                }
            </Formik>
        </>
    )

}