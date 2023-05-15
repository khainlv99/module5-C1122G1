import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {useNavigate, useParams} from "react-router-dom";

export function ListBook(){
    const [book,setBook] = useState([])
    const [bookType,setBookType] = useState([])
    const [bookData,setBookData] = useState()
    const param = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        const findAll = async ()=> {
            const result = await bookService.findAll()
            setBook(result)
            const result1 = await bookService.findAllType()
            setBookType(result1)
        }
        findAll()
    },[])
    const handDelete = async (id)=>{
        const result1 = await bookService.findById(id)
        setBookData(result1)
    }
    const handRemove = async ()=>{
        await bookService.deleteBook(bookData?.id)
        const result4 = await bookService.findAll()
        setBook(result4)
    }
    return(
        <>
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                </tr>
                {
                    book.map((book1)=> {
                        return(
                            <tr key={book1.id}>
                                <td>{book1.id}</td>
                                <td>{book1.name}</td>
                                <td>{bookType.find(typeBook => book1.type === typeBook.id)?.nameType}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={()=> handDelete(book1?.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa <p>{bookData?.name}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handRemove}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}