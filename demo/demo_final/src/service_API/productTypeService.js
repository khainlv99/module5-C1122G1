import request from '../config/http'

const findAll = () => {
    return request.get(`/bookTypes`)
}

const productTypeService = {
    findAll
}

export default productTypeService