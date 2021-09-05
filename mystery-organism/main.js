// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, arrayOfBases) => ({
  specimenNum,
  dna: arrayOfBases,
  mutate() {
    const randIdx = Math.floor(Math.random() * 4);
    let randBase = returnRandBase();
    let baseToMutate = this.dna[randIdx];
    while (randBase === baseToMutate) {
      randBase = returnRandBase();
    }
    this.dna[randIdx] = randBase;
    return this.dna;
  },
  compareDNA(object) {
    const currentDNA = this.dna;
    const newDNA = object.dna;
    let counter = 0;
    for (let i = 0; i < currentDNA.length; i++) {
      if (currentDNA[i] === newDNA[i]) {
        counter++;
      }
    }
    return `Speciment #${this.specimenNum} and specimen #${
      object.specimenNum
    } have ${(counter / 4) * 100}% DNA in common.`;
  },
  willLikelySurvive() {
    let count = 0;
    for (base of this.dna) {
      if (base === "C" || base === "G") count++;
    }
    return count > 2;
  },
});

const generateSpecies = (specimenObject) => {
  const pAequorArray = [];
  const baseArray = [
    returnRandBase(),
    returnRandBase(),
    returnRandBase(),
    returnRandBase(),
  ];
  let i = 0;
  let specimen = "specimen";
  while (i < 30) {
    const currentSpecimen = specimenObject(i, baseArray);
    if (currentSpecimen.willLikelySurvive) {
      this[`${specimen}${i}`] = currentSpecimen;
      pAequorArray.push(this[`${specimen}${i}`]);
      i++;
    }
  }
  return pAequorArray;
};

const newPAequorArray = generateSpecies(pAequorFactory);
console.log(newPAequorArray);
