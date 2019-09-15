import React from 'react';

const SoilDataTable = () => {

  for (let i = 0; i < 7; i++) {
    return (
      <tr className="table-secondary">
        <th scope="row">{ i + 1 }</th>
        <td>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="2" id={`${i}depth`} />
          </div>
        </td>
        <td>
          <div className="form-group">
            <select className="form-control" id="exampleSelect1">
              <option>sand</option>
              <option>gravel</option>
              <option>rock</option>
              <option>torf</option>
              <option>supes</option>
            </select>
          </div>
        </td>
        <td>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="250" id={`${i}ro`} />
          </div>
        </td>
      </tr>
    )
  }
}


export default SoilDataTable;