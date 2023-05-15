import {useEffect, useState} from "react";
import * as bookService from "../service/bookService";
import {type} from "@testing-library/user-event/dist/type";
import {Link, NavLink} from "react-router-dom";

export function ListBook() {
    const [book, setBook] = useState([])
    const [bookType, setBookType] = useState([])
    useEffect(() => {
        const listAllBook = async () => {
            const result = await bookService.findAll()
            setBook(result)
        }
        const ListAllTypeBook = async ()=> {
            const result1 = await bookService.finAllTypeBook()
            setBookType(result1)
        }
        listAllBook();
        ListAllTypeBook();
    }, [])
    return (
        <>
            <Link to='/create'>Create</Link>
            <table className="table">
                <tr>
                    <th>Id</th>
                    <th>Ten</th>
                    <th>Loai sach</th>
                </tr>
                {
                   book.map((bookList => {
                        return (
                            <tr key={bookList.id}>
                                <td>{bookList.id}</td>
                                <td>{bookList.name}</td>
                                <td>{bookType.find(typeBook => typeBook.idType === bookList.typeBook)?.name}</td>
                            </tr>
                        )
                    }))
                }
            </table>
        </>
    )
}