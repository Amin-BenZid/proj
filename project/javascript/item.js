const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const desc = urlParams.get("desc");
const price = parseInt(urlParams.get("price"));
const imgURL = urlParams.get("imgURL");
const imgOne = urlParams.get("imgOne");
const imgTwo = urlParams.get("imgTwo");
const imgThree = urlParams.get("imgThree");

var a = [];

const sum = () => {
  var getData = localStorage.getItem("session");
  a.push(JSON.stringify({ name: title, price: price }));
  var newData = a.concat(getData);
  localStorage.setItem("session", newData);
  alert("Item Is Added To The Bag Successfully");
};

const itemCard = (document.getElementById(
  "itemCard"
).innerHTML = `<div style="height: 100%; width: 80; display: felx">
  <div style="height: 20rem; width: 60%; display: flex; gap: 1rem">
    <div
      style="
            background-image: url('${imgOne}');
            height: 20rem;
            width: 20rem;
            background-repeat: no-repeat;
            background-size: contain;
          "
    ></div>
    <div
      style="
            background-image: url('${imgTwo}');
            height: 20rem;
            width: 20rem;
            background-repeat: no-repeat;
            background-size: contain;
          "
    ></div>
    <div
      style="
            background-image: url('${imgThree}');
            height: 20rem;
            width: 20rem;
            background-repeat: no-repeat;
            background-size: contain;
          "
    ></div>
  </div>
  <div
    style="
          background-image: url('${imgURL}');
          height: 820px;
          width: 60%;
          background-repeat: no-repeat;
          background-size: 820px;
        "
  >
    <h1 style="margin-left: 55rem; width: 30rem; font-size: 2rem">
    ${title}</h1>
    <br />
    <p style="margin-left: 55rem; width: 30rem">${desc}</p>
    <br />
    <h2 style="margin-left: 55rem; width: 30rem; font-size: 2rem">
      <b>US$${price}</b>
    </h2>
    <br />
      <button
        type="button"
        class="btn btn-info"
        style="width: 25rem; height: 3rem; margin-left: 55rem"
        onclick="sum()"
      >
        ADD TO BAG
      </button>
  </div>
</div>;
`);
