import React from 'react'
import './content.css'
import Navbar from './Navbar'

function Content() {
  return (<>
    <div>
      <Navbar/>
    </div>
    <div className='outer'><h1 style={{fontSize: 80 , fontWeight:450, color:'black'}}>Occasion-ready tailoring</h1></div>
    <div><a href="https://www2.hm.com/en_in/productpage.1295803003.html"><img className='img1' src="img1.png" alt="" /></a></div> 
    <div className='velvet'><p style={{fontSize:15 , color:'black'}}>THE VELVET JACKET</p></div>
    <div>
    <div className='Dressed'><h5 style={{fontFamily:'Freight Display',lineHeight:1.0 ,fontSize:60 , color:'black'}}>Dressed for the night. Single-breasted cotton-velvet jacket in dark rust red or midnight black.</h5></div> 
    </div>
    <div style={{display:'flex',justifyContent:'center' , width:'1340px' }}>
        <div><a href='https://www2.hm.com/en_in/productpage.1306173001.html'><img className='img2'  src="img2.png" alt="" /></a></div>
    </div>
    <div className='velvet'>
      <p style={{fontWeight:500 , fontSize:20 , color:'black'}}>The relaxed blazer</p>
    </div>
    <div>
    <div className='Dressed'><h5 style={{fontFamily:'Freight Display' ,fontSize:60 ,lineHeight:1.0, color:'black'}}>Effortless evening style. Double-breasted and softly woven, with a relaxed fit for an easy silhouette.</h5></div> 
    </div>
    </>
)

}

export default Content