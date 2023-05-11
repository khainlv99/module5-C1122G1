import './App.css';
import './components/home/home.css';
import "bootstrap/dist/css/bootstrap.css"

import Home from "./components/home/Home";
import {Route, Routes} from "react-router-dom";
import CustomerList from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";
import FacilityList from "./components/facility/FacilityList";
import ContractCreate from "./components/contract/ContractCreate";
import CustomerCreate from "./components/customer/CustomerCreate";
import CustomerEdit from "./components/customer/CustomerEdit";
import FacilityEdit from "./components/facility/FacilityEdit";
import FacilityCreate from "./components/facility/FacilityCreate";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/customer'} element={<CustomerList/>}/>
                <Route path={'/contract'} element={<ContractList/>}/>
                <Route path={'/facility'} element={<FacilityList/>}/>
                <Route path={'/create-contract'} element={<ContractCreate/>}/>
                <Route path={'/create-customer'} element={<CustomerCreate/>}/>
                <Route path={'/edit-customer/:id'} element={<CustomerEdit/>}/>
                <Route path={'/edit-facility/:id'} element={<FacilityEdit/>}/>
                <Route path={'/create-facility'} element={<FacilityCreate/>}/>
            </Routes>
        </div>

    );
}

export default App;
