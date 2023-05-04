export function ListContract() {
    return(
        <div>
            <h2 style={{ textAlign: "center" }}>Contract List</h2>
            <h3 style={{ color: "blue" }} />
            <table className="table table-stripped">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Facility</th>
                    <th>Customer</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Deposit</th>
                    <th>Total cost</th>
                    <th>Attach Facility</th>
                </tr>
                <tr>
                    <td>ABC</td>
                    <td>ABC</td>
                    <td>ABC</td>
                    <td>ABC</td>
                    <td>
                        {/*        th:attr="onclick=|info('${facility.getId()}','${facility.name}')|"*/}
                        <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add-contract-detail"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#attach-facility-list"
                        >
                            Attach Facility
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div>
                <button
                    style={{ marginLeft: "43%" }}
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-add-new-contract"
                >
                    Add New Contract
                </button>
            </div>
        </div>

    );
}