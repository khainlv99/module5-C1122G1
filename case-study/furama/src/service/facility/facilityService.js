import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/facilities');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const getAllFacilityType = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/facilityType');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`http://localhost:3000/facilities/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:3000/facilities/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (facility) => {
    try{
        await  axios.post(`http://localhost:3000/facilities`,{...facility});
    }catch (err){
        console.log(err);
    }
}

export const edit = async (facility) => {
    try{
        await  axios.put(`http://localhost:3000/facilities/${facility.id}`,{...facility});
    }catch (err){
        console.log(err);
    }
}


export const getFacilitiesTypes = async() =>{
    try {
        return (await axios.get('http://localhost:3000/facilityTypes')).data
    } catch (error) {
        console.log(error)
    }
}
export const getStandardRoom = async() =>{
    try {
        return (await axios.get('http://localhost:3000/standardRoom')).data
    } catch (error) {
        console.log(error)
    }
}

export const getRentType = async() =>{
    try {
        return (await axios.get('http://localhost:3000/rentType')).data
    } catch (error) {
        console.log(error)
    }
}

export const getFacilityService = async() =>{
    try {
        return (await axios.get('http://localhost:3000/facilityService')).data
    } catch (error) {
        console.log(error)
    }
}
const facilityService = {
    findAll,getAllFacilityType,edit,delete1,findById,getFacilitiesTypes,getStandardRoom,getRentType,getFacilityService,
    save
}
export default facilityService
