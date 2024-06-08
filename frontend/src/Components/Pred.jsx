import { useRef } from "react";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Pred() {
  const [image, setImage] = useState(null);
  const [time, setTime] = useState(new Date());
  const [latit, setLatit] = useState(null);
  const [longi, setLongi] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOnChange = e => {
    setImage(e.target.files[0]);
  }

  const handleLatit = e =>setLatit(e.target.value);

  const handleLongi = e =>setLongi(e.target.value);

  const sendDaTa = () => {

    const config = {
          headers: {
              'Content-Type': 'multipart/form-data',
          }
      };

    const fd = new FormData( )
    fd.append('Image_File', image)
    fd.append('latitude', latit)
    fd.append('longitude', longi)

    axios.post('http://127.0.0.1:8000/api/upload',fd,config)
    .then(res=>{
      console.log(res)
      setResult(res.data.result)
    })
    .catch(err=>console.log(err))
  }

  function handleOnSubmit(e){
    e.preventDefault();
    sendDaTa();
  }

  return (
    <div className="form-wrapper">
      <div className="form-area">
        <form className="form-part">
          <div className="utilityd">
            <label>Date: </label>
            <label className="date">{time.toLocaleDateString()}</label>
            {/* <input type="date" id="Date" name="image_date" /> */}
          </div>
          <div className="utilityt">
            <label>Time: </label>
            <label className="time  ">{time.toLocaleTimeString()}</label>
            {/* <input type="time" id="Time" name="image_time" /> */}
          </div>

          <div className="utilitya">
            <label>Latitude:</label>
            <input onChange={handleLatit} type="number" step="0.01" id="Lat" name="latitude" />
          </div>
          <div className="utilityo">
            <label>Longitude: </label>
            <input onChange={handleLongi} type="number" step="0.01" id="Lng" name="longitude" />
          </div>
          <div>
            <div>
              <div className="Upload">
                <label className="custom-file-label" style={{ idth: 250 }}>
                  Upload Image (jpeg/png/jpg):
                </label>
                <input
                  onChange={handleOnChange}
                  // ref={cyclo_image}
                  className="choose"
                  type="file"
                  name="imagefile"
                  id="imagefile"
                  accept=".jpeg, .jpg, .png"
                  required
                  style={{ width: 250 }}
                />
              </div>
              <center className="Imp">
                <div style={{ marginTop: "20px" }}>
                  <i></i>
                  {result && <span>Success. Calculated Intensity: {result} knots</span>}
                </div>

                <input
                  onClick={handleOnSubmit}
                  className="compute"
                  type="submit"
                  value="Compute Intensity"
                />
              </center>
            </div>
          </div>
          <button type="button" id="liveToastBtn" style={{ display: "none" }}>
            Show live toast
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pred;
