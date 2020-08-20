/*var hotel = {
    name: "Mencey",
    location: "Tenerife",
    img:
      "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
  };
  
  document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
  document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hotel.location;
  document.getElementById("img-hotel").src = hotel.img;*/

  //Varios hoteles

  var hoteles = {
    Mencey: {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
      name: "Lani's Suites Deluxe",
      location: "Lanzarote",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
    Montbrio: {
        name: "Termes Montbrio",
        location: "Tarragona",
        img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/1c/9c/97/hotel-termes-de-montbrio.jpg",
    },
    Far: {
        name: "El Far",
        location: "Palafrugell",
        img:
        "https://media-cdn.tripadvisor.com/media/photo-o/11/8d/89/8c/hotel-el-far-de-sant.jpg",
    },
    Mastinell: {
        name: "Cava-hotel Mastinell",
        location: "Cambrils",
        img:
        "https://media-cdn.tripadvisor.com/media/photo-o/11/44/ee/3c/cava-hotel-mastinell.jpg",
    }
  };

  //Seleccione hotel

  var selectedHotel = prompt(
    "Indique hotel sobre el que quiere hacer la reseña: Mencey, Lani, Montbrio, Far o Mastinell",
  );
  document.getElementById("name-hotel").innerHTML =
  "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

  //estrellas

  //var rating = prompt("Puntuación: del 1 al 5");
  //document.getElementById("rating").innerHTML = rating + " estrellas";
  
  var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
  document.getElementById("rating").innerHTML = stars[rating];

//comentario anónimo

var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous