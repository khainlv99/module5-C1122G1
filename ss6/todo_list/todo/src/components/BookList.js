import {useEffect, useState} from "react";
import * as BookService from "../service/BookService";
import {Link} from "react-router-dom";

export function BookList() {
    const [book, setBook] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await BookService.findAll()
            setBook(result)
        }
        fetchAPI()
    }, [])
    return (
        <>

            <div className="min-h-screen bg-red-800 py-5">
                <div className="overflow-x-auto w-full">

                    <table
                        className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                        <thead className="bg-gray-900">
                        <tr className="text-white text-left">
                            <th className="font-semibold text-sm uppercase px-6 py-4">Title</th>
                            <th className="font-semibold text-sm uppercase px-6 py-4">
                                {" "}
                                Quantity{" "}
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                                {" "}
                                Action{" "}
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                                <div className="col-lg-2 col-md-2 col-xs-12 col-sm-6">
                                    <Link className="section2_btn btn1" to="/create">
                                        ADD
                                    </Link>
                                </div>
                            </th>
                            <th className="font-semibold text-sm uppercase px-6 py-4"></th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {
                            book.map((books) => (
                                    <tr key={books.id}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="inline-flex w-10 h-10"><img
                                                    className='w-10 h-10 object-cover rounded-full' alt='User avatar'
                                                    src='https://i.imgur.com/siKnZP2.jpg'/></div>
                                                <div>
                                                    <p>{books.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="">{books.quantity}</p>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="col-lg-2 col-md-2 col-xs-12 col-sm-6">
                                                <button className="section2_btn btn1" type="button">
                                                    Edit
                                                </button>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-xs-12 col-sm-6">
                                                <button className="section2_btn btn2" type="button">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                            )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}