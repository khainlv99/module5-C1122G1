import request from '../config/http'

const findAll = () => {
    return request.get(`/productTypes`)
}

const productTypeService = {
    findAll
}

export default productTypeService