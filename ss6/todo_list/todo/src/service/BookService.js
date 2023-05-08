import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
        return result.data
    }catch (error){
    }
}
export const save = async (book) => {
try {
    await axios.post('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books', {...book})
}catch (error){}
}