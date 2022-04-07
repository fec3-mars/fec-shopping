import React from 'react';
import './SelectSize.css';
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// class SelectSize extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       renderDropdown: false,
//     }
//   }

//   // { handleChange, selectSize, skus, selectedSize }
//   render() {

//     return (
//       <div onClick={this.props.handleChange} className="size-select-container" >
//         <p className="size-input">SELECT SIZE</p>
//         <FontAwesomeIcon
//           icon={faChevronDown}
//           className="chevron-down"
//         />
//       </div >
//     )
//   }
// }
const SelectSize = ({ handleChange, selectSize, skus, selectedSize }) => (
  <div className="size-select-container">
    {selectSize && <p className="size-warning">Please select size</p>}
    {(skus.length && <select value={selectedSize} name="size" className="size-input" onChange={handleChange} >
      <option>SELECT SIZE</option>
      {skus.map(option => {
        if (option[1].size !== null) {
          return <option key={option[0]} value={option[0]}>{option[1].size}</option>
        }
      })}
    </select>) || <h3 className="out-of-stock">OUT OF STOCK</h3>}
  </div>
)

export default SelectSize;