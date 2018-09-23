import React from 'react';

export default function Communications(props) {
    return (
        <div className="detail-communications">
            <table className="table communications-table">
                <thead id="thead">
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Communication</th>
                        <th scope="col">Recipient</th>
                        <th scope="col">Recall<button className="indicator-sort" onClick={props.sortBy} name="Recall">^</button></th>
                        <th scope="col">Contact information</th>
                        <th scope="col">Date of Communication<button className="indicator-sort" onClick={props.sortBy} name="Date">^</button></th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td>save delete</td>
                        <td>Eamil</td>
                        <td>Jeremy Dykes</td>
                        <td>00 32 6402 00</td>
                        <td>Driver1@gamil.com</td>
                        <td>01-02-2018</td>
                        <td>&lt;Record Email Subject and a brief description here&gt;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Phone</td>
                        <td>Jeremy Dykes</td>
                        <td>Other</td>
                        <td>04 1234 5678</td>
                        <td>03-03-2018</td>
                        <td>&lt;Brief description of phone call&gt;</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eamil</td>
                        <td>Jeremy Dykes</td>
                        <td>00 72 9301 00</td>
                        <td>Driver1@gamil.com</td>
                        <td>01-04-2018</td>
                        <td>&lt;Record Email Subject and a brief description here&gt;</td>
                    </tr>
                </tbody>
            </table>
    </div>
    );
}