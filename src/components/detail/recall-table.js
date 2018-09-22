import React from 'react';

export default function recallTable(props) {
    return (
        <div className="detail-recalls">
            <table className="table recalls-table">
                <thead id="thead">
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Active Recall?</th>
                        <th scope="col">Recall Priority</th>
                        <th scope="col">Recall No<button className="indicator-sort" onClick={props.sortBy} name="Recall NO">^</button></th>
                        <th scope="col">PRA No<button className="indicator-sort" onClick={props.sortBy} name="PRA">^</button></th>
                        <th scope="col">Description</th>
                        <th scope="col">Rectified?<button className="indicator-sort" onClick={props.sortBy} name="Rectified">^</button></th>
                        <th scope="col">Rectification Date<button className="indicator-sort" onClick={props.sortBy} name="Date">^</button></th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>save delete</td>
                        <td>YES</td>
                        <td>Alpha</td>
                        <td>00 26 3701 00</td>
                        <td>00 26 3701 00</td>
                        <td>Replace front driveshaft</td>
                        <td>No</td>
                        <td>05-01-2018</td>
                    </tr>
                    <tr>
                        <td>update</td>
                        <td>YES</td>
                        <td>Beta</td>
                        <td>00 32 6402 00</td>
                        <td>00 32 6402 00</td>
                        <td>Replace drivers airbag</td>
                        <td>No</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>YES</td>
                        <td>Beta</td>
                        <td>00 72 9301 00</td>
                        <td>00 72 9301 00</td>
                        <td>Replace passenger airbag</td>
                        <td>Yes</td>
                        <td>04-04-2018</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}