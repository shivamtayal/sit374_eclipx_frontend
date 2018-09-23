import React from 'react';

export default function Notes(props) {
    return (
        <div className="detail-notes">
            <table className="table notes-table">
                <thead id="thead">
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Recorded Date</th>
                        <th scope="col">Recorded By</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td></td>
                        <td>04-05-2018</td>
                        <td>Rashmi Nandakumar</td>
                        <td>Sample test here. Sample text here. Sample text here. Sample text here. Sample text here. Sample text here. Sample text here. Sample text here. </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>08-06-2018</td>
                        <td>Lara Cottrell</td>
                        <td>Sample test here. Sample text here. Sample text here. Sample text here. Sample test here. Sample text here. Sample text here. Sample text here. </td>
                    </tr>
                    <tr>
                        <td>save delete</td>
                        <td>08-06-2018</td>
                        <td>Lara Cottrell</td>
                        <td><input type="text" size="45" name="comments" id="comments"/></td>
                    </tr>

                </tbody>
            </table>
    </div>
    );
}
