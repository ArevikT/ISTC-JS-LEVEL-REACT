
import React, {Component, Fragment} from "react" ;

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}
export default Popup;
// state = {
//   showPopup: false
// };

// togglePopup=()=> {
// this.setState({
//   showPopup: !this.state.showPopup
// });
// }
// render() {
// return (
//   <Fragment>
//     <h1>hihi</h1>
//     <button onClick={this.togglePopup}>show popup</button>
//     {this.state.showPopup ?  <Popup text='Close Me' closePopup={this.togglePopup} />: null}
//   </Fragment>
// );
// }