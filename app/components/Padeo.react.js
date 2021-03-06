var React = require('react');
var trallImage = require('./../images/trall.png');

var Styles = {
  fontFamily: 'Lato,sans-serif',
};

var StylesInput = {
  marginBottom: '5px',
  fontFamily: 'Lato,sans-serif',
  width: "100px",
};

var widthPadeo = 0;
var heightPadeo = 0;

function Padeo (props) {

  if(props.widthInput != "" && props.widthInput > 30 && props.widthInput <= 1000){
    widthPadeo = props.widthInput*2;
  }
  else {
    widthPadeo = 90*2;
  }

  if(props.heightInput != "" && props.heightInput > 30 && props.heightInput <= 1000){
    heightPadeo = props.heightInput*2;
  }
  else {
    heightPadeo = 90*2;
  }

  return (
    <div>
    <div style={{marginLeft: "27px", position: "absolute", top: "320px", }}>
    <h3 style={Styles} >Mått på din uteplats:</h3>
    <input type="number"
      onChange={props.onHandleInputWidthChange}
      value={props.widthInput}
      name="Width"
      style={StylesInput}
      placeholder="Bredd"/> <span>cm</span>
    <br />
    <input type="number"
      onChange={props.onHandleInputHeightChange}
      value={props.heigthInput}
      name="height"
      style={StylesInput}
      placeholder="Höjd" /> <span>cm</span>
    </div>

      <div src={trallImage}
        style={{width: widthPadeo,
          height: heightPadeo,
          marginLeft: "27px",
          marginTop: "10px",
          backgroundRepeat: "repeat",
          backgroundImage: "url(" + trallImage +")",
          position: "absolute",
          top: "520px",
        }}
        >
        <img src={trallImage} style={{visibility: "hidden", width: widthPadeo, height: heightPadeo,}}  />
    </div>
</div>
);
}

module.exports = Padeo;
