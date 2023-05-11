import axios from "axios";

export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/contracts');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (contracts) => {
    try{
        await  axios.post(`http://localhost:3000/contracts`,{...contracts});
    }catch (err){
        console.log(err);
    }
}
export const remove = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:3000/contracts/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

const contractService = {
    findAll,
    save, remove
}

export default contractService