const data = [
  {
    title: "REST DAY CARGO PANTS",
    desc: "Black",
    price: "75",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RestDayCargoPantBlackA3A9O-BBBB-08422_1920x.jpg?v=1695831917",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RestDayCargoPant-Black-A3A9O-BBBB-0853_384x.jpg?v=1695831917",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RestDayCargoPant-Black-A3A9O-BBBB-0851_256x.jpg?v=1695831917",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RestDayCargoPant-Black-A3A9O-BBBB-0836_256x.jpg?v=1695831917",
  },
  {
    title: "ESSENTIAL OVERSIZED JOGGERS",
    desc: "Charcoal Grey Marl",
    price: "55",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/EssentialPantCharcoalGreyMarlA2A7T-GBFH3_1920x.jpg?v=1660745694",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/EssentialPantCharcoalGreyMarlA2A7T-GBFH1_384x.jpg?v=1660745694",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/EssentialPantCharcoalGreyMarlA2A7T-GBFH2_384x.jpg?v=1660745694",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/EssentialPantCharcoalGreyMarlA2A7T-GBFH_384x.jpg?v=1660745694",
  },
  {
    title: "REACT JOGGERS",
    desc: "Black",
    price: "55",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/CriticalReactSlimPantBlackA2A7W-BBBB5_1920x.jpg?v=1662719840",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/CriticalReactSlimPantBlackA2A7W-BBBB3_384x.jpg?v=1662719840",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/CriticalReactSlimPantBlackA2A7W-BBBB4_256x.jpg?v=1662719840",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/products/CriticalReactSlimPantBlackA2A7W-BBBB_256x.jpg?v=1662719840",
  },
];

const pantsCont = document.getElementById("pantsCont");
const htmldata = data.map(
  (e) => `
   <div>
     <a 
     href="${`item.html?title=${e.title}&desc=${e.desc}&price=${e.price}&imgURL=${e.imgURL}&imgOne=${e.imgOne}&imgTwo=${e.imgTwo}&imgThree=${e.imgThree}`}")} style="text-decoration: none; color: black"><div class="itemHover" style="  transition: 0.5s; height:400px; width:30rem;background-image: url(${
    e.imgURL
  });background-repeat: no-repeat;background-size: contain" ></div>
          <h1 class="name">${e.title}</h1>
          <p class="color">${e.desc}</p>
          <h1 class="name" style="font-size: 1.5rem"><b>US$${e.price} </b></h1>
        </a>
      </div>
`
);

const string = htmldata.join("");
pantsCont.innerHTML = string;
