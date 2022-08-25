import React from 'react';

const Alert=(props)=>{
const capt=(word)=>{
     word=word.toLowerCase();
     return word.charAt(0).toUpperCase()+word.slice(1);
};


return(
<div style={{height:'50px'}}> 
  {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capt(props.alert.type)}</strong>: {props.alert.msg}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
)
};
export default Alert;












































// import React from "react";

// function Alert(props) {
//   return (
//     props.alert &&<div
//       className={`alert alert-${props.alert.msg} alert-dismissible fade show`}
//       role="alert"
//     >
//       <strong>
//       {props.alert.msg} 
//       </strong>
//       : {props.alert.type}
      

    
//       <button
//         type="button"
//         className="btn-close"
//         data-bs-dismiss="alert"
//         aria-label="Close"
//       ></button>
//     </div>
//   );
// }

// export default Alert;
