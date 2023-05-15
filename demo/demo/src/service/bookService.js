import axios from "axios";

export const findAll = async () =>{
    try {
        const result = await axios.get("http://localhost:3000/book")
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const finAllTypeBook = async () =>{
    try{
        const result = await axios.get("http://localhost:3000/typeBook")
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const createBook = async (book) => {
    try {
        await axios.post(`http://localhost:3000/book`, {...book})
    }catch (error){
        console.log(error)
    }
}
export const editBook = async (book) => {
    try{
        await axios.put(`http://localhost:3000/book/${book.id}`,{...book})
    }catch (error){
        console.log(error)
    }
}