import axios from 'axios'

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:3000/book')
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const save = async (book) => {
    try {
        await axios.post('http://localhost:3000/book', {...book})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/book/${id}`)
    } catch (error) {
        return error
    }
}

export const findById = async (id) => {
    try {
        const book = await axios.get(`http://localhost:3000/book/${id}`)
        return book
    } catch (error) {
        return error
    }
}

export const edit = async (book) => {
    try {
        await axios.put(`http://localhost:3000/book/${book.id}`,{...book})
    } catch (error) {
        console.log(error);
        return error
    }
}