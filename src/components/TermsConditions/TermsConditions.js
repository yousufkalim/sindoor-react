import React, { Component } from 'react';
import Files  from "./Files"
import TermsImage from "../../assets/Image/TermsImage.png";
import 'bootstrap/dist/css/bootstrap.min.css';

class TermsConditions extends Component{
  render() {
    return (
    <div className='container'>
        <div className='terms-img'>
        <img src={TermsImage} />
        </div>
        <h1 className='img-text'>Mentions Juridiques</h1>
        <br/>
       <Files />
    </div>
    
  )
  }
}
export default TermsConditions;
