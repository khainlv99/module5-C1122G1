import {useState} from "react";

export function Login() {
    const [form,setForm] = useState({})
    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }
    function hand() {
        
    }
    return(
        <></>
    );

}