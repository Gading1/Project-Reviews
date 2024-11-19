// || ARRAYS
// || Cara 1 & 2
const review = [
  {
    person: 1,
    name: "Susan Smith",
    picture: "img/hip1.jpg",
    position: "WEB DEVELOPER",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    person: 2,
    name: "Anna Johnson",
    picture: "img/hip2.jpg",
    position: " WEB DESIGNER",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },

  {
    person: 3,
    name: "Peter Jones",
    picture: "img/hip3.jpg",
    position: "INTERN",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },

  {
    person: 4,
    name: "Bill Anderson",
    picture: "img/hip4.jpg",
    position: "THE BOSS",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

// || Cara 3
// const name = ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"];
// const picture = [
//   "img/hip1.jpg",
//   "img/hip2.jpg",
//   "img/hip3.jpg",
//   "img/hip4.jpg",
// ];
// const position = ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"];
// const info = [
//   "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
// ];

// || SELECT ITEM
const employePict = document.getElementById("employe-pict");
const employeName = document.getElementById("employe-name");
const employePosition = document.getElementById("employe-position");
const employeInfo = document.getElementById("employe-info");

const btnNext = document.querySelector(".next");
const btnPrevious = document.querySelector(".previous");
const supriseMe = document.querySelector(".suprise");

// || STARTING POINT
let i = 0;

// || Cara 2
// window.addEventListener("DOMContentLoaded", function () {
//   const item = review[currentItem];
//   employePict.src = item.picture;
//   employeName.textContent = item.name;
//   employePosition.textContent = item.position;
//   employeInfo.textContent = item.info;
// });

function showPerson(person) {
  const item = review[person];
  employePict.src = item.picture;
  employeName.textContent = item.name;
  employePosition.textContent = item.position;
  employeInfo.textContent = item.info;
}

btnNext.addEventListener("click", function () {
  // || Cara 1
  review[i];
  if (i === 3) {
    i = 0;
  } else {
    i++;
  }
  showPerson(i);

  // || Cara 2
  // review[currentItem];
  // if (currentItem === 3) {
  //   currentItem = 0;
  // } else {
  //   currentItem++;
  // }
  // showPerson(currentItem);

  // ||  Cara 3
  // employeName.innerHTML = name[i];
  // if (i === 3) {
  //   i = 0;
  // } else {
  //   i++;
  // }

  // if (employeName.innerHTML === "Susan Smith") {
  //   employePict.src = picture[0];
  //   employePosition.innerHTML = position[0];
  //   employeInfo.innerHTML = info[0];
  // }

  // if (employeName.innerHTML === "Anna Johnson") {
  //   employePict.src = picture[1];
  //   employePosition.innerHTML = position[1];
  //   employeInfo.innerHTML = info[1];
  // }

  // if (employeName.innerHTML === "Peter Jones") {
  //   employePict.src = picture[2];
  //   employePosition.innerHTML = position[2];
  //   employeInfo.innerHTML = info[2];
  // }

  // if (employeName.innerHTML === "Bill Anderson") {
  //   employePict.src = picture[3];
  //   employePosition.innerHTML = position[3];
  //   employeInfo.innerHTML = info[3];
  // }
});

btnPrevious.addEventListener("click", function () {
  // || Cara 1
  review[i];
  if (i === 0) {
    i = 3;
  } else {
    i--;
  }

  showPerson(i);

  // || Cara 2
  // review[currentItem];
  // if (currentItem === 0) {
  //   currentItem = 3;
  // } else {
  //   currentItem--;
  // }

  // showPerson(currentItem);

  // || Cara 3
  // employeName.innerHTML = name[i];
  // if (i === 0) {
  //   i = 3;
  // } else {
  //   i--;
  // }

  // if (employeName.innerHTML === "Susan Smith") {
  //   employePict.src = picture[0];
  //   employePosition.innerHTML = position[0];
  //   employeInfo.innerHTML = info[0];
  // }

  // if (employeName.innerHTML === "Anna Johnson") {
  //   employePict.src = picture[1];
  //   employePosition.innerHTML = position[1];
  //   employeInfo.innerHTML = info[1];
  // }

  // if (employeName.innerHTML === "Peter Jones") {
  //   employePict.src = picture[2];
  //   employePosition.innerHTML = position[2];
  //   employeInfo.innerHTML = info[2];
  // }

  // if (employeName.innerHTML === "Bill Anderson") {
  //   employePict.src = picture[3];
  //   employePosition.innerHTML = position[3];
  //   employeInfo.innerHTML = info[3];
  // }
});

supriseMe.addEventListener("click", function () {
  // || Cara 1
  const currentItem = Math.floor([Math.random() * review.length]);

  showPerson(currentItem);

  // || Cara 2
  // let randomName = name[Math.floor(Math.random() * name.length)];

  // employeName.innerHTML = randomName;

  // || Cara 3
  // if (employeName.innerHTML === "Susan Smith") {
  //   employePict.src = picture[0];
  //   employePosition.innerHTML = position[0];
  //   employeInfo.innerHTML = info[0];
  // }

  // if (employeName.innerHTML === "Anna Johnson") {
  //   employePict.src = picture[1];
  //   employePosition.innerHTML = position[1];
  //   employeInfo.innerHTML = info[1];
  // }

  // if (employeName.innerHTML === "Peter Jones") {
  //   employePict.src = picture[2];
  //   employePosition.innerHTML = position[2];
  //   employeInfo.innerHTML = info[2];
  // }

  // if (employeName.innerHTML === "Bill Anderson") {
  //   employePict.src = picture[3];
  //   employePosition.innerHTML = position[3];
  //   employeInfo.innerHTML = info[3];
  // }
});
