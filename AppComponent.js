import React from 'react';

function App(props)
{
  return (
    <div>
      <p>Company Name: {props.companyName}</p>
      <p>
      Company Location:  {props.companyLocation}
      </p>
    </div>
  )
}
App.defaultProps = {
  companyName:'WIPRO',
  companyLocation: 'BANGALORE'
}
export default App;