var React = require('react');
var Skiss = require('../components/Skiss.react');

var PropTypes = React.PropTypes;

var SkissContainer = React.createClass({
    handleRemoveImage: function(index){
      this.props.removeImageFromArray(index);
    },
    render: function() {

        if (this.props.skissArray.length > 0) {
            var render_all = this.props.skissArray.map(function(artno, index) {

                return (<Skiss artno={artno} index={index} key={artno + 'skiss' + index} removeImage={this.handleRemoveImage}/>);
            }.bind(this));

            return (
                <div>{render_all}</div>
            );
        } else {
            return (
                <div style={{
                    textAlign: "center", position: "absolute", top: "430px", left: "400px",
                }}>
                    <h3>Klicka på någon av modulerna<br /> för att börja bygga!</h3>
                </div>
            )
        }
    }
});

module.exports = SkissContainer;
