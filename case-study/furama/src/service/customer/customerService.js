import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/customers');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const getAllCustomerType = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/customerTypes');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`http://localhost:3000/customers/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:3000/customers/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (customers) => {
    try{
        await  axios.post(`http://localhost:3000/customers`,{...customers});
    }catch (err){
        console.log(err);
    }
}

export const edit = async (customers) => {
    try{
        await  axios.put(`http://localhost:3000/customers/${customers.id}`,{...customers});
    }catch (err){
        console.log(err);
    }
}

const customerService = {
    findAll,getAllCustomerType,edit,delete1,findById,
    save
}

export default customerService