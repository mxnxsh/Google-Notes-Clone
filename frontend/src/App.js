import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
   return (
      <>
         <div className='wrapper'>
            <Navbar />
            {/* <Footer/> */}
         </div>
      </>
   );
}

export default App;
