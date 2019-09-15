import React from 'react';

import SoilDataTable from './soil-data-table';

const roChar = String.fromCharCode('961');
const pointChar = String.fromCharCode('8729');


const SoilData = () => {

  return (
    <div>
      <legend>Soil</legend>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Layer</th>
            <th scope="col">Layer depth, mg</th>
            <th scope="col">Layer soil type</th>
            <th scope="col">{`Layer ${roChar}, Ohm${pointChar}m`}</th>
          </tr>
        </thead>
        <tbody>
          <SoilDataTable/>
        </tbody>
      </table>

      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">Layers border depth, m</label>
        <input type="text" className="form-control" placeholder="5.7" id="rawDepth" />
      </div>

      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" checked="defaultChecked" />
        <label className="custom-control-label" htmlFor="customSwitch1">Use winter frizzing</label>
      </div>

      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">Frizzing depth, m</label>
        <input type="text" className="form-control" placeholder="1.2" id="rawDepth" />
      </div>


      {/* I'm gonna make one form with approovement */}
      <div className="form-group has-success">
        <label className="form-control-label" htmlFor="inputSuccess1">{`Equal ${roChar}, Ohm${pointChar}m:`}</label>
        <input type="text" value="correct value" className="form-control is-valid" id="inputValid" />
        <div className="valid-feedback">Success! You've equaled it.</div>
      </div>

      <div className="form-group has-danger">
        <label className="form-control-label" fhtmlForor="inputDanger1">{`Equal ${roChar}, Ohm${pointChar}m:`}</label>
        <input type="text" value="wrong value" className="form-control is-invalid" id="inputInvalid" />
        <div className="invalid-feedback">Sorry, this value is out of order(</div>
      </div>

    </div>


  )
}

export default SoilData;
