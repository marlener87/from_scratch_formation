// lien de l'API
// https://randomuser.me/api/?results=24

//fetch("https://randomuser.me/api/?results=24").then((res) => console.log(res));

let userData = [];

// const fetchUser = () => {
//   fetch("https://randomuser.me/api/?results=24")
//     .then((res) => res.json())
//     //.then((data) => console.log(data.results));
//     .then((data) => (userData = data.results))
//     .then(() => console.log(userData));

//   //   setTimeout(() => {
//   //     console.log(userData);
//   //   }, 2000);
// };

// OU

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};

// fonction d'affichage
const userDisplay = async () => {
  await fetchUser();

  document.body.innerHTML = userData
    .map(
      (user) =>
        `<div class="card">
    <h3>${user.name.first}</h3>
    </div>
    `
    )
    .join("");
};

userDisplay();
