import React  from 'react';
import './Weather.css'
import * as sun from '../../assets/sun.png'
import * as cf from '../../assets/cf.png'
// class Weather extends Component {
//   constructor(props) {
//     super();
//   }
  
//   render() {
//     return (
//       <div className="Weather">
//         <div className="weatherBar">
//         <div className="row">
//             <div className="col-8">
//                 <p>
//                     <span className="day">TODAY</span>
//                     <br></br>
//                     <span className="date">Sunday June 11, 2017</span>
//                 </p>
//                 <img src="../../assets/sun.png"></img>
// <h6>New York, New York</h6>
//             </div>
//             <div className="col-4 text-lg-left">
//             <span className="weather">Sunny</span>
//             <h3>57°</h3>
//             <img src="../../assets/cf.png"></img>
//             </div>
//         </div>
//         </div>
//       </div >
//     );
//   }
// }
// export default Weather;

const weather = () => {
    return (
     <div className="Weather">
             <div className="weatherBar">
             <div className="row">
                 <div className="col-8">
                     <p>
                         <span className="day">TODAY</span>
                         <br></br>
                         <span className="date">Sunday June 11, 2017</span>
                     </p>
                     <img src={sun}></img>
     <h6>New York, New York</h6>
                 </div>
                 <div className="col-4 text-lg-left">
                 <span className="weather">Sunny</span>
                 <h3>57°</h3>
                 <img src={cf}></img>
                 </div>
             </div>
             </div>
           </div >
    )
}

export default weather