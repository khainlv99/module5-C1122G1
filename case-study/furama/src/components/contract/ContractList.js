import Header from "../header/Header";
import Footer from "../footer/Footer";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import customerService from "../../service/customer/customerService";
import contractService from "../../service/contract/contractService";
import facilityService from "../../service/facility/facilityService";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContractList() {
    const [contractList, setContractList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [facilitiesList, setFacilitiesList] = useState([]);


    const getContractList = async () => {
        const contractData = await contractService.findAll();
        console.log(contractData)
        setContractList(contractData);
    };
    const getCustomerList = async () => {
        const customerData = await customerService.findAll();
        setCustomerList(customerData);
    };

    const getFacilitiesList = async () => {
        const facilityData = await facilityService.findAll();
        setFacilitiesList(facilityData);
    };


    useEffect(() => {
        getContractList();
        getCustomerList();
        getFacilitiesList();
    }, []);



    return (
        <>
            <Header/>.
            <div className="p-3">
                <h2 className="text-center fw-bold my-3">DANH SÁCH HỢP ĐỒNG</h2>
                <NavLink to={'/create-contract'}>
                    <button className="btn btn-primary btn-outline-secondary btn-sm">
                        <span className="text-light"> Thêm mới hợp đồng</span>
                    </button>
                </NavLink>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Số hợp đồng</th>
                        <th>Khách hàng</th>
                        <th>Tên dịch vụ</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                        <th>Tiền đặt cọc</th>
                        <th>Tổng tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contractList.map((contract, index) => (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{contract.contractCode}</td>
                            <td>
                                {
                                    customerList?.filter(
                                        (customer) => customer.id == contract.customers
                                    )[0]?.name
                                }
                            </td>
                            <td>
                                {
                                    facilitiesList?.filter(
                                        (facility) => facility.id == contract.facilities
                                    )[0]?.name
                                }
                            </td>
                            <td>{contract.startDate}</td>
                            <td>{contract.endDate}</td>
                            <td>{contract.deposit}</td>
                            <td>{contract.totalMoney}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <Footer/>
            <ToastContainer/>
        </>)
}

export default ContractList;