import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import SimpleImageSlider from "react-simple-image-slider";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Button, Grid
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function App() {
  // var url = "https://expenses0e.herokuapp.com/expense";
  var test_url = 'http://localhost:8080/sliders';
  const [setImge, setImages] = useState();
  useEffect(() => {
    getAllImage()
  }, []);
  const images = [
    { url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png%2F1200px-Image_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&tbnid=gxFxsvFBmxeZ9M&vet=12ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygAegUIARDTAQ..i&docid=0JWe7yDOKrVFAM&w=1200&h=900&q=image&ved=2ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygAegUIARDTAQ" },
    { url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F7yQR5uJhwEkRfjwMFJ7bUK%2Fdc52a0913e8ff8b5c276177890eb0129%2Foffset_comp_772626-opt.jpg%3Ffit%3Dfill%26w%3D800%26h%3D300&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Ffile-converter&tbnid=MOAYgJU89sFKnM&vet=12ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygCegUIARDXAQ..i&docid=ygIoihldBPn-LM&w=800&h=300&itg=1&q=image&ved=2ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygCegUIARDXAQ" },
    { url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pixsy.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fben-sweet-2LowviVHZ-E-unsplash-1.jpeg&imgrefurl=https%3A%2F%2Fwww.pixsy.com%2Facademy%2Fimage-user%2Fverify-image-source-copyright-owner%2F&tbnid=HXLlNEpHoJATkM&vet=12ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygDegUIARDZAQ..i&docid=wJy6d5uce-qbnM&w=1920&h=1080&q=image&ved=2ahUKEwjzq-e7hrLxAhWKpksFHdlNA3EQMygDegUIARDZAQ" },
  ];
  const getAllImage = () => {
    axios.get(url)
      .then(res => {
        setImages(res);
      })
  }
  return (
    <>
      <Grid container style={{ backgroundColor: 'aliceblue' }} spacing={5} >
        <Grid item xs={8} >
          <div>
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
            />
          </div>
          <Button className='submit' variant="contained">Submit</Button>
        </Grid>
      </Grid>

    </>
  );
}

export default App;
