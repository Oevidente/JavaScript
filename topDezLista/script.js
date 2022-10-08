//Create an object of each movies/series
//Create an array of objects
//Give them a rating 0 to 10 (10 being the best)
//Create categories for the movies/series
//Create a function that will print out the movies/series ordered by rating

const mov1 = {
  name: `Breaking Bad`,
  script: 9,
  photography: 8,
  editing: 8,
  rithm: 6,
  casting: 10,
};

const mov2 = {
  name: `Severance`,
  script: 9,
  photography: 10,
  editing: 10,
  rithm: 8,
  casting: 7,
};

const mov3 = {
  name: `Stranger Things`,
  script: 8,
  photography: 9,
  editing: 8,
  rithm: 7,
  casting: 10,
};

const mov4 = {
  name: `Supernatural`,
  script: 8,
  photography: 7,
  editing: 7,
  rithm: 9,
  casting: 10,
};

const mov5 = {
  name: `Game of Thrones`,
  script: 9,
  photography: 10,
  editing: 9,
  rithm: 8,
  casting: 9,
};

const mov6 = {
  name: `Chernobyl`,
  script: 10,
  photography: 10,
  editing: 9,
  rithm: 8,
  casting: 10,
};

const mov7 = {
  name: `Californication`,
  script: 8,
  photography: 8,
  editing: 7,
  rithm: 10,
  casting: 9,
};

const mov8 = {
  name: `Sex Education`,
  script: 9,
  photography: 9,
  editing: 8,
  rithm: 10,
  casting: 10,
};

const mov9 = {
  name: `The Boys`,
  script: 9,
  photography: 8,
  editing: 9,
  rithm: 9,
  casting: 10,
};

const mov10 = {
  name: `Saiki Kusuo`,
  script: 10,
  photography: 7,
  editing: 7,
  rithm: 10,
  casting: 10,
};

const list = [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8, mov9, mov10];

function topTen(lista) {
  lista.sort(
    (a, b) =>
      (b.script + b.photography + b.editing + b.rithm + b.casting) / 5 -
      (a.script + a.photography + a.editing + a.rithm + a.casting) / 5,
  );
  console.log('ESSE É O TOP 10 "SÉRIES QUE ME DEFINEM": ');
  for (let i = 0; i < 10; i++) {
    let media =
      lista[i].script +
      lista[i].photography +
      lista[i].editing +
      lista[i].rithm +
      lista[i].casting;
    console.log(`${lista[i].name} - ${media / 5}`);
  }
}
topTen(list);
