export function ListCustomer() {
    return(
        <>
            <div />
            <div>
                <h2 style={{ textAlign: "center" }}>Customer List</h2>
                <a className="btn btn-primary">Create Customer</a>
                <h3 style={{ color: "blue" }} />
                <form method="get">
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="email" placeholder="email" />
                    <select name="customerTypeId">
                        <option>ABC</option>
                        <option>ABC</option>
                        <option>ABC</option>
                        <option />
                        <option>ABC</option>
                        <option>ABC</option>
                        <option>ABC</option>
                        <option>ABC</option>
                    </select>
                    <button className="btn btn-primary">Search</button>
                </form>
                <table className="table table-stripped">
                    <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Customer type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>
                            <a className="btn btn-secondary">Edit</a>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div />
            </div>
        </>
    );
}