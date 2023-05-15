import axios from "axios";

export const findAll = async ()=>{
    try {
        const result = await axios.get('http://localhost:3000/book')
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const findAllType = async ()=>{
    try {
        const result1 = await axios.get('http://localhost:3000/typeBook')
        return result1.data
    }catch (error){
        console.log(error)
    }
}
export const create = async (book)=>{
    try {
        await axios.post(`http://localhost:3000/book`,{...book})
    }catch (error){
        console.log(error)
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/book/${id}`)
    }catch (error){
        console.log(error)
    }
}
export const findById = async (id) => {
    try {
       const result1 = await axios.get(`http://localhost:3000/book/${id}`)
       return result1.data
    }catch (error){
        console.log(error)
    }
}
export const searchByName = async ()=>{

}