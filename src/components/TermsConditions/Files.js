import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import jsPDF from 'jspdf';
import SindoorLegala from '../../../src/assets/pdf/SindoorLegala.pdf';
import DownloadIconImg from "../../assets/Image/DownloadIconImg.png";
import pdficon from "../../assets/Image/pdficon.png"
import tittleimage from "../../assets/Image/tittleimage.png"
import dashimage from "../../assets/Image/dashimage.png"

class Files extends Component{

  state={
  showFileInfo:false
};
state={
  showFileInfo2:false
};
state={
  showFileInfo3:false
};
state={
  showFileInfo4:false
};
state={
  showFileInfo5:false
};
state={
  showFileInfo6:false
};
pdfGenerate = ()=>{
      var doc=new jsPDF('landscape','px','a4','false'); 
      doc.save(SindoorLegala.pdf)
  }
render(){
  const {showFileInfo} = this.state;
  const {showFileInfo2} = this.state;
  const {showFileInfo3} = this.state;
  const {showFileInfo4} = this.state;
  const {showFileInfo5} = this.state;
  const {showFileInfo6} = this.state;
  return (
    <div>


    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 1 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo: !this.state.showFileInfo})} 
            className='fas fa-plus icon'></i>
            
      </h4>
      </div>
      {showFileInfo ?(
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 1 - Sindoor Legal
           <span className='filesize'>104KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>



    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 2 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo2: !this.state.showFileInfo2})} 
            className='fas fa-plus icon'></i>  
      </h4>
      </div>
      {showFileInfo2 ? (
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 2 - Sindoor Legal
           <span className='filesize'>101KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>


    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 3 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo3: !this.state.showFileInfo3})} 
            className='fas fa-plus icon'></i>  
      </h4>
      </div>
      {showFileInfo3 ? (
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 3 - Sindoor Legal
           <span className='filesize'>104KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>


    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 4 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo4: !this.state.showFileInfo4})} 
            className='fas fa-plus icon'></i>  
      </h4>
      </div>
      {showFileInfo4 ? (
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 4 - Sindoor Legal
           <span className='filesize'>318KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>


    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 5 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo5: !this.state.showFileInfo5})} 
            className='fas fa-plus icon'></i>  
      </h4>
      </div>
      {showFileInfo5 ? (
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 5 - Sindoor Legal
           <span className='filesize'>81KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>


    <div className='card card-body mb-3'>
      <div className='tittle'>
      <h4 className='filetittle' > <img src={tittleimage}/> &nbsp; &nbsp; 6 - Sindoor Legal 
      <i onClick={()=>
            this.setState({showFileInfo6: !this.state.showFileInfo6})} 
            className='fas fa-plus icon'></i>  
      </h4>
      </div>
      {showFileInfo6 ? (
         <ul className='list-group'>
         <li className='list-group-item' style={{display:"flex"}}>
          <div className='subtittle' style={{display:"flex",
          justifyContent: "space-between",
          alignItems:"center",
          width:"100%"}}>
         <div>
          <img src={pdficon} className='pdficon'/>
           <span className='filename'> 6 - Sindoor Legal
           <span className='filesize'>74KB</span> </span>
           </div>
           <div>
           <img src={DownloadIconImg}  className="downloadimg" onClick={this.pdfGenerate}/>
           </div>
          </div>
         </li>

          </ul> ):null}
          
          
    </div>
   
    </div>
  )
      }
}

export default Files;