import axios from "axios";

export const findAll = async() => {
    try {
        const result = await axios.get('http://localhost:3000/product')
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const findAllType = async ()=> {
    try {
        const result1 = await axios.get('http://localhost:3000/typeProduct')
        return result1.data
    }catch (error){
        console.log(error)
    }
}
export const create = async (product)=> {
    try {
        const result2 = await axios.post(`http://localhost:3000/product`,{...product})
        return result2.data
    }catch (error) {
        console.log(error)
    }
}
export const edit = async (product)=>{
    try{
        await axios.put(`http://localhost:3000/product/${product.id}`,{...product})
    }catch (error){
        console.log(error)
    }
}
export const finById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:3000/product/${id}`)
        return result.data
    }catch (error){
        console.log(error)
    }
}
export const findByName = async (name)=>{
    try{
        const result3 = await axios.get(`http://localhost:3000/product?name_like=${name}`)
        return result3.data
    }catch (error){
        console.log(error)
    }
}
export const findByType=async (id)=>{
    try {
        const result=await axios.get(`http://localhost:3000/product?type_like=${id}`)
        return result.data
    }catch (e){
        console.log(e)
    }
}
export const delelte = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/product/${id}`)
    }catch (error){
        console.log(error)
    }
}