let data = [];

async function warriorApi() {
  await fetch("./db.json")
    .then((resp) => resp.json())
    .then((json) => data.push(...json.characters));
  init();
}

warriorApi();

function init() {
  const warrior = document.querySelectorAll(".warrior__info");

  let warriorImage = document
    .querySelector(".container__warrior--img")
    .querySelector("img");

  let warriorName = document.querySelector(".warrior");
  let warriorRace = document.querySelector(".race");
  let warriorDesc = document
    .querySelector(".container__warrior--features")
    .querySelector("p");

  warrior.forEach((warrior) =>
    warrior.addEventListener("click", (e) => {
      const warriorNewName = e.currentTarget
        .querySelector("h4")
        .textContent.toLowerCase();

      const newWarrior = data.filter(
        (warrior) => warrior.name.toLowerCase() === warriorNewName
      );

      warriorName.textContent = newWarrior[0].name;
      warriorRace.textContent = newWarrior[0].race;
      warriorDesc.textContent = newWarrior[0].bio;
      warriorImage.src = newWarrior[0].img;
    })
  );
}
