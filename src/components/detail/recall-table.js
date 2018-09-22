import React from 'react';

export default function recallTable(props) {
    return (
            <table className="table recalls-table">
                <thead>
                    <tr>
                        <th scope="col">Edit</th>
                        <th scope="col">Active Recall?</th>
                        <th scope="col">Recall Priority</th>
                        <th scope="col">Recall No</th>
                        <th scope="col">PRA No</th>
                        <th scope="col">Description</th>
                        <th scope="col">Rectified?</th>
                        <th scope="col">Rectification Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Save / Delete</td>
                        <td>YES</td>
                        <td>Alpha</td>
                        <td>00 26 3701 00</td>
                        <td>00 26 3701 00</td>
                        <td>Replace front driveshaft</td>
                        <td>No</td>
                        <td>05-01-2018</td>
                    </tr>
                </tbody>
            </table>
    );
}