console.log("hello js");

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = (name, specialty, address) => ({
  name: name,
  specialty: specialty,
  address: address
});

const doctorBryan = createDoctor("Bryan", "Pediatrics", "115 Medicine Drive");
console.log(doctorBryan);

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
const createPet = (petName, petBreed) => ({
  name: petName,
  breed: petBreed
});

// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const BowWowKennels = [];

const skippyDog = createPet("Skippy", "Mutt");
const snickersDog = createPet("Snickers", "Boxer");
const anthonyDog = createPet("Anthony", "Terrier");

BowWowKennels.push(skippyDog, snickersDog, anthonyDog);

console.log("Bow Wow Kennels", BowWowKennels);

// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.
const jumpStopRecords = {
  name: "JumpStop Records",
  artists: []
};

const chattenRecords = {
  name: "Chatten Records",
  artists: []
};
const polarRecords = {
  name: "Polar Records",
  artists: []
};

const musicLabels = [];

musicLabels.push(jumpStopRecords, chattenRecords, polarRecords);
// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

const createBluegrassArtist = (artistName, artistAge, artistGenre) => ({
  name: artistName,
  age: artistAge,
  genre: artistGenre
});

// Bruce Atikins is a Country artist and is 23 years old
chattenRecords.artists.push(
  createBluegrassArtist("Bruce Atikins", 23, "Country")
);
// Jensen Brown is a Pop artist and is 20 years old
polarRecords.artists.push(createBluegrassArtist("Jensen Brown", 20, "Pop"));
// Dre Funkz is a Funk artist and is 25 years old
jumpStopRecords.artists.push(createBluegrassArtist("Dre Funkz", 25, "Funk"));
// Dusta Grimes is a Rap artist and is 21 years old
jumpStopRecords.artists.push(createBluegrassArtist("Dusta Grimes", 21, "Rap"));
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
chattenRecords.artists.push(
  createBluegrassArtist("Bartholomew Danielson", 23, "Bluegrass")
);
// Avilee Dallas is a Country artist and is 19 years old
chattenRecords.artists.push(
  createBluegrassArtist("Avilee Dallas", 19, "Country")
);
// Austin Kinkaid is a Pop artist and is 22 years old
polarRecords.artists.push(createBluegrassArtist("Austin Kinkaid", 22, "Pop"));
// Loyoncé Branis is a Rap artist and is 27 years old
jumpStopRecords.artists.push(
  createBluegrassArtist("Loyoncé Branis", 27, "Rap")
);

console.log("Chatten Records: ", chattenRecords);
console.log("JumpStop Records: ", jumpStopRecords);
console.log("Polar Records: ", polarRecords);

let musicRowContainer = document.getElementById("music_row");

const loadMusicRowArtists = labelArray => {
  console.log(labelArray);
  labelArray.forEach(label => {
    console.log("label name", label);
  });
};

loadMusicRowArtists(musicLabels);
