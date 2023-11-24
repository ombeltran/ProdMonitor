import React from "react";
import './reports.css';
import { Card, Button } from "../../components";

const Reports = () => {
    return (
        <div className="reportPadre">
            <Card>
                <div className="reports">
                    <form className="Report_form">
                        <h2>Reports</h2>

                        <label>User</label>
                        <select className='user' required>
                            <option value="select user" selected>Select user</option>
                            <option value="user 1" >User 1</option>
                            <option value="user 2">User 2</option>
                            <option value="user 3">User 3</option>
                        </select>

                        <Button>Search</Button>
                    </form>

                    <table border="1">
                        <tr>
                            <th>User</th>
                            <th>Type</th>
                            <th>Model</th>
                            <th>Serial number</th>
                            <th>Category</th>
                            <th>Comment</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>User 1</td>
                            <td>Monitor</td>
                            <td>HP 27df22</td>
                            <td>785GBV123XSE</td>
                            <td>Damaged</td>
                            <td>This is a proof line 1</td>
                            <td>Octuber-12-2023</td>
                        </tr>
                        <tr>
                            <td>User 1</td>
                            <td>Televisor</td>
                            <td>SAM QN65LS03AA</td>
                            <td>681RTE930HJDF</td>
                            <td>Refurbished</td>
                            <td>This is a proof line 2</td>
                            <td>Octuber-12-2023</td>
                        </tr>
                        <tr>
                            <td>User 1</td>
                            <td>Televisor</td>
                            <td>SAM QN65LS03AA</td>
                            <td>3435HJK345JJ</td>
                            <td>Refurbished</td>
                            <td>This is a proof line 3</td>
                            <td>Octuber-12-2023</td>
                        </tr>
                        <tr>
                            <td>User 1</td>
                            <td>Monitor</td>
                            <td>LG 32GN550-B</td>
                            <td>123ABC456DEF</td>
                            <td>Open box</td>
                            <td>This is a proof line 4</td>
                            <td>Octuber-12-2023</td>
                        </tr>
                    </table>
                </div>
            </Card>
        </div>
    )
}

export default Reports;
