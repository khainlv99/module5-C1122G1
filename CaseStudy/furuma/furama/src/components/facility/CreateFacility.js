export function CreateFacility() {
    return(
        <>
            <div />
            <h2 style={{ textAlign: "center" }}>Create Facility</h2>
            <div>
                <form method="post">
                    <table className="table table-stripped">
                        <tbody>
                        <tr>
                            <td>Facility Type</td>
                            <td>
                                <select onchange="addFacility(this.value)">
                                    \<option value={0}>Select Facility</option>
                                    <option />
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Cost</td>
                            <td>
                                <input type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Max People:</td>
                            <td>
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Rent Type</td>
                            <td>
                                <select>
                                    <option />
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Standard Room</td>
                            <td>
                                <input id="standard-room" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Description Other Convenience</td>
                            <td>
                                <input id="description-other-convenience" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Pool Area</td>
                            <td>
                                <input id="pool-area" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td>Number Of Floors</td>
                            <td>
                                <input id="number-of-floor" type="text" />
                                <span />
                            </td>
                        </tr>
                        <tr>
                            <td>Free facility</td>
                            <td>
                                <input id="free-facility" type="text" />
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