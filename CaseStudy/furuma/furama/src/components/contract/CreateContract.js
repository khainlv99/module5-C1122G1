export function CreateContract(){
    return(
        <>
            <h2 style={{ textAlign: "center" }}>Edit Facility</h2>
            <table className="table table-stripped">
                <tbody>
                <tr>
                    <th>Start Date:</th>
                    <td>
                        <input id="start-date" type="date" />
                    </td>
                </tr>
                <tr>
                    <th>End Date:</th>
                    <td>
                        <input id="end-date" type="date" />
                    </td>
                </tr>
                <tr>
                    <th>Deposit</th>
                    <td>
                        <input id="deposit" type="number" />
                    </td>
                </tr>
                <tr>
                    <th>Total cost</th>
                    <td>
                        <input id="total-cost" type="text" disabled="" />
                    </td>
                </tr>
                <tr>
                    <th>Employee</th>
                    <td>
                        <select id="employee-id">
                            <option value={0} disabled="">
                                Select Employee
                            </option>
                            <option>ABC</option>
                            <option>ABC</option>
                            <option>ABC</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Customer</th>
                    <td>
                        <select id="customer-id">
                            <option value={0} disabled="">
                                Select Customer
                            </option>
                            <option>ABC</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Facility:</th>
                    <td>
                        <select id="facility-id">
                            <option value={0} disabled="">
                                Select Facility
                            </option>
                            <option>ABC</option>
                            <option>ABC</option>
                            <option>ABC</option>
                            <option>ABC</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Attach Facility</th>
                    <td>
                        <button
                            type="button"
                            id="btn-show-attach-facility"
                            onclick="showAttachFacilityList();"
                            className="btn btn-primary"
                        >
                            +
                        </button>
                        <button className="btn btn-primary">Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            \
            <table
                className="table table-stripped"
                style={{ display: "none" }}
                id="select-attach-facility"
            >
                <tbody>
                <tr>
                    <td>
                        <input type="checkbox" className="checkbox-attach-facility" />
                    </td>
                    <td>
                        Total:{" "}
                        <input
                            className="quantity-attach-facility"
                            defaultValue={0}
                            type="number"
                        />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button
                            className="btn btn-danger"
                            onclick="closeAttachFacilityList();"
                            type="button"
                        >
                            Done
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}