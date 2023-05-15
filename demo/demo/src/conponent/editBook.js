import {Formik} from "formik";
import {useState} from "react";

export function EditBook(){
    const [book,setBook] = useState([])
    return(
        <>
            <Formik
                initialValues={
                    {
                        id : book?.id,
                        name: book?.name,
                        typeBook: book?.typeBook
                    }
                }
                onSubmit={}>

            </Formik>
        </>
    )
}