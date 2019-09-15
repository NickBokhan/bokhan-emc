import React from 'react';

const roChar = String.fromCharCode('961');
const pointChar = String.fromCharCode('8729');

const Vertical = () => {

  return (
    <div>
      <legend>Vertical rod</legend>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">Length, m</label>
        <input type="text" className="form-control" placeholder="5" id="rodLength" />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">Diameter, mm</label>
        <input type="text" className="form-control" placeholder="12" id="rodDiameter" />
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">Depth, m</label>
        <input type="text" className="form-control" placeholder="0.7" id="rodDepth" />
      </div>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" checked="defaultChecked" />
        <label className="custom-control-label" htmlFor="customSwitch1">Use "Soil" resistance</label>
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="inputDefault">{`${roChar}, Ohm${pointChar}m`}</label>
        <input type="text" className="form-control" placeholder="250" id="rodRo" />
      </div>


      {/* I'm gonna make one form with approovement */}
      <div className="form-group has-success">
        <label className="form-control-label" htmlFor="inputSuccess1">Rod resistance:</label>
        <input type="text" value="correct value" className="form-control is-valid" id="inputValid" />
        <div className="valid-feedback">Success! You've grounded it.</div>
      </div>

      <div className="form-group has-danger">
        <label className="form-control-label" fhtmlForor="inputDanger1">Rod resistance:</label>
        <input type="text" value="wrong value" className="form-control is-invalid" id="inputInvalid" />
        <div className="invalid-feedback">Sorry, this value is out of order(</div>
      </div>

    </div>


  )
}

export default Vertical;
