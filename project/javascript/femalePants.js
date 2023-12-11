const data = [
  {
    title: "LOOPBACK JOGGERS",
    desc: "Asphalt Grey",
    price: "75",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatJoggerGSAsphaltGreyB6A5G-GCBZ-2364_1920x.jpg?v=1696606385",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LEGACYJOGGER-GSBlack-B5A9P-BB2J2_d357ad8b-e115-4f45-8572-306c6570346b_256x.jpg?v=1694680693",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LEGACYJOGGER-GSBlack-B5A9P-BB2J4_3f2dca4e-1216-438b-abdb-1367c18fcc55_256x.jpg?v=1694680694",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LEGACYJOGGER-GSBlack-B5A9P-BB2J1_7fe218ae-8ae4-4c8c-80e1-58c12b526ebd_256x.jpg?v=1694680694",
  },
  {
    title: "LEGACY JOGGERS",
    desc: "Black",
    price: "70",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LEGACYJOGGER-GSBlack-B5A9P-BB2J_5fc2b36d-30c6-49f3-b3c8-b0c5bd488f43_1920x.jpg?v=1694680692",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatJoggerGSAsphaltGreyB6A5G-GCBZ-2396_384x.jpg?v=1696606385",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatJoggerGSAsphaltGreyB6A5G-GCBZ-2381_256x.jpg?v=1696606385",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatJoggerGSAsphaltGreyB6A5G-GCBZ-2428_256x.jpg?v=1696606385",
  },
];

const pantsCont = document.getElementById("girlsPantsCont");
const htmldata = data.map(
  (e) => `
   <div>
        <a 
          href="${`item.html?title=${e.title}&desc=${e.desc}&price=${e.price}&imgURL=${e.imgURL}&imgOne=${e.imgOne}&imgTwo=${e.imgTwo}&imgThree=${e.imgThree}`}"
        style="text-decoration: none; color: black">
      <div class="itemHover" style="  transition: 0.5s; height:400px; width:30rem;background-image: url(${
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
