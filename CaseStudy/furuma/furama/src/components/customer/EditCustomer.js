export function EditCustomer() {
    return(
        <>
            <div />
            <h2 style={{ textAlign: "center" }}>Edit Customer</h2>
            <div>
                <form method="post">
                    <table className="table table-stripped">
                        <input type="hidden" />
                        <input type="hidden" />
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>
                                <input type="date" />
                            </td>
                        </tr>
                        <tr>
                            <td>Customer Type</td>
                            <td>
                                <select>
                                    <option />
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>
                                <input type="radio" name="gender" />
                                Male
                                <input type="radio" name="gender" />
                                Female
                            </td>
                        </tr>
                        <tr>
                            <td>ID Card</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <button className="btn btn-primary">Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );

}