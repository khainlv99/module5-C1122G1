import request from '../config/http'

const findAll = () => {
    return request.get(`/product`)
}

const save = (book) => {
    return request.post(`/product`, {...book})
}

const findBynameOrType = (name, type) => {
    return request.get(`/product?name_like=${name}&typeId_like=${type}`)
} 

const productService = {
    findAll,
    save,
    findBynameOrType
}

export default productService