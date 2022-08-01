import React from 'react';
//import Button from './Button'
const Header = (props) => {
  
  return (
    <header className='header'>
        <h1 style={{textAlign:'center'}}>task tracker</h1>
        
    </header>
  )
}
Header.defaultProps ={
    title:'jatin',
}

// const headingStyle={// for css in js
//   color:'red',
//   backgroundColor:'black'

// }

export default Header