import React,{useState, useEffect} from 'react'
import { useNavigate } from "react-router";
import QRCode from "qrcode.react";
// import Menu from '../Menu/Menu';


const Code = ({ text }) => {
    const[src,setSrc] = useState([]);   
    // const navigate = useNavigate();
    // var barcode =src[0].toDataURL(text);
    const canvas = document.getElementById('canvas');
const dataURL = canvas.QRCodetoDataURL();

    useEffect(() => {
        dataURL.then((data)=>{
            console.log("meeee", data)

            setSrc(data);
        });
        // localStorage.setItem("food_data", data);
        // navigate("/profile");
    
    }, [])
    

    

  return (
    <div>
        <p>Hi</p>
        
        <div style={{ marginTop: 200, display: "flex",flexDirection: "row" }}>
         <div id="canvas">
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>
            <li>2</li>

         </div>
      </div>

    </div>
  )
}

export default Code