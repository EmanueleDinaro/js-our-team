const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//DOM ELEMENTS
const teamContainer = document.querySelector('.container')
const avatarImgElm = document.getElementById('avatar-img');
const fullNameElm = document.getElementById('full-name');
const roleElm = document.getElementById('role');
const emailElm = document.getElementById('email');

let cardMembers = ""
for (let i = 0; i < teamMembers.length; i++) {
  const {name, role, img, email} = teamMembers[i] /*SINTASSI ABBREVIATA CON L'USO DEL DESTRUCTURING CHE CREA UNA VARIABILE E GLI ASSEGNA AUTOMATICAMENTE IL VALORE DELL'OGGETTO AVENTE LA STESSA CHIAVE.*/
  cardMembers += `
    <div class="col d-flex justify-content-center mb-2 ">
      <div class="avatar">
        <img id="avatar-img" src=${img} alt="${name}">
      </div>
      <div class="d-flex flex-column justify-content-center bg-black text-white p-4" style="min-width: 300px;">
        <h2 id="full-name" class="full-name fs-3">${name}</h2>
        <h3 id="role" class="role fs-6">${role}</h3>
        <p id="email" class="email fs-6 text-info">${email}</p>
      </div>
    </div>
  `;
}
teamContainer.innerHTML = cardMembers;