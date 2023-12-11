const data = [
  {
    title: "BUILT OVERSIZED SWEATSHIRT",
    desc: "Black",
    price: "55",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/BuiltOversizedSweatshirtGSBlackB8A8K-BB2J-2172_1920x.jpg?v=1700764508",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/BuiltOversizedSweatshirtGSBlackB8A8K-BB2J-2135_384x.jpg?v=1700764508",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/BuiltOversizedSweatshirtGSBlackB8A8K-BB2J-2154_256x.jpg?v=1700764508",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/BuiltOversizedSweatshirtGSBlackB8A8K-BB2J-2191_256x.jpg?v=1700764508",
  },
  {
    title: "HEAVYWEIGHT LOOPBACK SWEAT",
    desc: "Duck Egg Blue",
    price: "85",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatPulloverGSDuckEggBlueB6A5I-UB9K-0634_1920x.jpg?v=1696925472",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatPullover_GSDuckEggBlue_B6A5I-UB9K-0656_384x.jpg?v=1696925473",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatPulloverGSDuckEggBlueB6A5I-UB9K-0645_256x.jpg?v=1696925473",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/LoopbackSweatPulloverGSDuckEggBlueB6A5I-UB9K-0683_256x.jpg?v=1696925473",
  },
  {
    title: "REST DAY SWEATS 1/2 ZIP PULLOVER",
    desc: "White Marl",
    price: "70",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RESTDAYSWEATS1-2ZIPPULLOVERCloudMarlB3A9J-WBFG-2746_776cc737-6bf0-425e-9b5a-c942164a7068_1920x.jpg?v=1693474793",
    imgOne:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RESTDAYSWEATS1-2ZIPPULLOVERCloudMarlB3A9J-WBFG-2758_479693d3-a82b-4807-854a-c018b25ec005_384x.jpg?v=1693474793",
    imgTwo:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RESTDAYSWEATS1-2ZIPPULLOVERCloudMarlB3A9J-WBFG-2752_67f05327-68e9-4c9a-bcaa-567ca9a86c0d_256x.jpg?v=1693474793",
    imgThree:
      "https://cdn.shopify.com/s/files/1/1367/5207/files/RESTDAYSWEATS1-2ZIPPULLOVERCloudMarlB3A9J-WBFG-2776_9fabf443-e6b4-4a7b-bf7c-2c9446366e98_256x.jpg?v=1693474793",
  },
];

const container = document.getElementById("containerfemale");

const htmlArray = data.map(
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

const htmlString = htmlArray.join("");
container.innerHTML = htmlString;
