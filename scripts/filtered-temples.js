const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const today = new Date();

const formattedDate = today.toLocaleDateString();

document.getElementById('dateDisplay').textContent = formattedDate;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area:  6968,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 7927,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-3802-main.jpg"
  },
  {
    templeName: "Manila, Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September,25-27",
    area: 2479,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
];

createTempleCard(temples);

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", (event) => {

  document.querySelector("h1").textContent = "Old";
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });

  
  createTempleCard(oldTemples);
});

const newLink = document.querySelector("#new")

newLink.addEventListener("click", (event) => {

  document.querySelector("h1").textContent = "New";
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });

  
  createTempleCard(newTemples);
});

const largeLink = document.querySelector("#large")

largeLink.addEventListener("click", (event) => {

  document.querySelector("h1").textContent = "Large";
  const largeTemples = temples.filter(temple => temple.area > 90000);

  
  createTempleCard(largeTemples);
});

const smallLink = document.querySelector("#small")

smallLink.addEventListener("click", (event) => {

  document.querySelector("h1").textContent = "Small";
  const smallTemples = temples.filter(temple => temple.area < 10000);

  
  createTempleCard(smallTemples);
});


function createTempleCard(filteredTemples) {
  const container = document.querySelector(".temple-grid");
  container.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temple-grid").appendChild(card);
  });
}

