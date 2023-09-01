const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é'(-è_çà)=^ù*$,;:!?./§µ£€~#{[|`^@]}\"";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

//console.log(rangeValue.value);

function generatePassword() {
  //console.log("Je génère un MDP");

  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionnez des critères.");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  navigator.clipboard
    .writeText(password)
    .then(function () {
      console.log("Mot de passe copié avec succès !");
    })
    .catch(function (error) {
      console.error("Erreur lors de la copie du mot de passe :", error);
    });

  generateButton.textContent = "Copié !";
  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 3000);
}

generateButton.addEventListener("click", generatePassword);
