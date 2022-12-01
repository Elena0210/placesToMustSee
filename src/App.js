import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [places, setPlaces] = useState(data);
  const [showText, setShowText] = useState(false);

  const removePlace = (id) => {
    let newPlaces = places.filter (place => place.id !== id);
    setPlaces(newPlaces);
  }

  const showTextClick = (item) => {
    item.readMore = !item.readMore;
    setShowText (!showText);
  }

  //СЛАЙДЫ как реализовать????
  // const [slides, setSlides] = useState(data.image);

  // const { image1, image2, image3} = data[slides];

  // const previousPlace = () => {
  //   setSlides ((image => {
  //     // image--;
  //       if (image < [0.4]) {
  //         return image3;
  //       }
  //       if (image < [0.3]) {
  //         return image2
  //       }
  //       else return image1;
  //     }))
  //   }


  //   const nextPlace = () => {
  //     setSlides ((image => {
  //       // image++;
  //         if (image = image1) {
  //           return image2;
  //         }
  //         if (image = image2) {
  //           return image3
  //         }
  //         else return image1;
  //       }))
  //     }
  // ..

  return (
    <div>

      <div className="container">
        <h1>{places.length} places in USA that I must see</h1>
      </div>

      {places.map((item => {
        const { id, place, location, description, image1, website, readMore } = item;
          return (

//Куда прописать key="id"??
            <div key="id" className="main"> 

              <div className="container btn">
                <img src={image1} width="500px" alt="place"/>
                <div className="buttons">
                  <button>previous</button>
                  {/* <button onClick={previousPlace}>previous</button>
                  <button onClick={nextPlace}>next</button> */}
                  <button>next</button>
                </div>
              </div>
              
              <div className="about">
                <div className="container">
                  <h2>{id} . {place}. Location: {location}</h2>
                </div>

                <div className="container">
                  <p>{readMore ? description: description.substring(0, 300) + "...."}
                    <button onClick={()=>showTextClick(item)}>
                    {readMore ? "Show less" : "READ more"}</button>
                  </p>
                </div>

                <div className="container">
                  <h4>Website: {website}</h4>
                </div>

                <div className="container">
                  <button onClick={()=>removePlace(id)}>remove place</button>
                </div>
              </div>
            </div>
        )
      }))}
      
      <div className="container">
        <button onClick={()=> setPlaces([])}>Delete All</button>
      </div>

    </div>
  );
}

export default App;
