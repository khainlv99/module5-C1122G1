import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findByType} from "../service/productService";
import * as productService from "../service/productService";

export function ListProduct() {
    const [product,setProduct] = useState([])
    const [productType,setProductType] = useState([])
    const [productData,setProductData] = useState()
    useEffect(() => {
        const findAll = async () =>{
            const result = await productService.findAll()
            setProduct(result)
            // const result1 = await productService.findAllType()
            // setProductType(result1)
        }
        findAll()
    },[])
    // const handSearch = async ()=>{
    //     let name = document.getElementById('khai').value
    //     const result1 = await productService.findByName(name)
    //     setProduct(result1)
    // }
    // const handleSearch=async (id)=>{
    //     const result=await findByType(id)
    //     setProduct(result)
    // }
    // const sortByNumber = () => {
    //     const sortedList = [...product].sort((a, b) =>
    //         a.name.localeCompare(b.name)
    //     );
    //     setProduct(sortedList);
    // };
    // const handleDelete = async (id)=>{
    //     const result3 = await productService.finById(id)
    //     setProductData(result3)
    // }
    // const handleRemove = async ()=>{
    //     await productService.delelte(productData?.id)
    // }
    return (
        <>
            {/*<Link to={'/create'}>Create</Link>*/}
            {/*<input type='text' id='khai'/>*/}
            {/*<button onClick={handSearch}>Tim kiem</button>*/}
            {/*<select onChange={(event)=>handleSearch(event.target.value)}>*/}
            {/*    {productType.map((type)=>(*/}
            {/*        <option value={type.id}>{type.nameType}</option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            {/*<button onClick={sortByNumber}>Sap xep</button>*/}
            <table className="table">
                <tr>
                    <th>Ma san pham</th>
                    <th>Ten san pham</th>
                    <th>Ngay nhap</th>
                    <th>So luong</th>
                    <th>Loai san pham</th>
                </tr>
                {
                    product.map((products)=>{
                        return(
                            <tr key={products.id}>
                                <td>{products.id}</td>
                                <td>{products.name}</td>
                                <td>{products.date}</td>
                                <td>{products.number}</td>
                                <td>{products.type.nameType}</td>
                                <td>
                                    <Link to={`/edit/${products.id}`}>Edit</Link>
                                </td>
                                <td>
                                    {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal"*/}
                                    {/*        data-bs-target="#exampleModal" onClick={()=>(handleDelete(products?.id))}>*/}
                                    {/*    Delete*/}
                                    {/*</button>*/}
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            {/*<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
            {/*     aria-hidden="true">*/}
            {/*    <div className="modal-dialog">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>*/}
            {/*                <button type="button" className="btn-close" data-bs-dismiss="modal"*/}
            {/*                        aria-label="Close"></button>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                Bạn có muốn xóa <span>{productData?.name}</span>*/}
            {/*            </div>*/}
            {/*            <div className="modal-footer">*/}
            {/*                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
            {/*                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleRemove}>Delete</button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}