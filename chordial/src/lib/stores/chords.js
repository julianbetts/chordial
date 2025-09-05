import { writable } from 'svelte/store';

export const chords = writable([
  {
    rootNote: "C",
    shape: "C",
    baseFret: 1,
    fretsOnStrings: [0, 3, 2, 0, 1, 0],
    label: "C-shape C"
  }
  ,
  {
    rootNote: "C",
    shape: "A",
    baseFret: 3,
    fretsOnStrings: [0, 3, 5, 5, 5, 3],
    label: "A-shape C"
  },
  {
    rootNote: "C",
    shape: "G",
    baseFret: 7,
    fretsOnStrings: [8, 10, 10, 9, 8, 8],
    label: "G-shape C"
  },
  {
    rootNote: "C",
    shape: "E",
    baseFret: 8,
    fretsOnStrings: [8, 10, 10, 9, 8, 8],
    label: "E-shape C"
  },
  {
    rootNote: "C",
    shape: "D",
    baseFret: 10,
    fretsOnStrings: [0, 0, 10, 12, 13, 12],
    label: "D-shape C"
  }
]);

export const chromaticNotes = [
  {name: 'e', value: 0},
  {name: 'f', value: 1},
  {name: 'f#', value: 2},
  {name: 'g', value: 3},
  {name: 'g#', value: 4},
  {name: 'a', value: 5},
  {name: 'a#', value: 6},
  {name: 'b', value: 7},
  {name: 'c', value: 8},
  {name: 'c#', value: 9},
  {name: 'd', value: 10},
  {name: 'd#', value: 11}
];

export const baseShapes = [
  {
    shape: "C",
    referenceNote: "c",
    baseFret: 1,
    fretsOnStrings: [null, 3, 2, 0, 1, 0]  
  },
    {
      shape: "A",
      referenceNote: "a",
      baseFret: 1,
      fretsOnStrings: [null, 3, 5, 5, 5, 3]  
    },
    {
      shape: "G",
      referenceNote: "g",
      baseFret: 1,
      fretsOnStrings: [3, 2, 0, 0, 0, 3]  
    },
    {
      shape: "E",
      referenceNote: "e",
      baseFret: 1,
      fretsOnStrings: [0, 2, 2, 1, 0, 0]  
    },
    {
      shape: "D",
      referenceNote: "d",
      baseFret: 1,
      fretsOnStrings: [null, 0, 0, 3, 5, 3]  
    }
]

export function calculateChord(targetRootNote, referenceNote, shape, chords) {
  let targetValue = chromaticNotes.find(note => note.name === targetRootNote).value;
  let referenceNoteValue = chromaticNotes.find(note => note.name === referenceNote).value;
  let correctedBaseFret = chords.baseFret + (targetValue - referenceNoteValue);
  let chordNoteValues = chords.fretsOnStrings

  

  for (let i = 0; i < chordNoteValues.length; i++) {
    // THIS LINE IS WHAT RENDERS THE CHORD
    let newValue = chordNoteValues[i] + (targetValue - referenceNoteValue);

    // conditional to correct negative and null values
    if (chordNoteValues[i] === null) {
      newValue = null
    } else if (newValue < 0) {
      newValue = newValue + 12
    }

    // conditional to correct negative basefret problem
    // if (correctedBaseFret < 0) {
    //   correctedBaseFret = correctedBaseFret + 12
    // }
    // conditional to adjust diagram to match markers that go past the 4th fret
    if (newValue > 4) {
      newValue = newValue - correctedBaseFret
    } 

    chordNoteValues[i] = newValue;
  }


  return chordNoteValues;
}

export function generateAllVariations(targetRootNote, baseShapes) {
  let results = []; // Create array to store all results




  for (let i = 0; i < baseShapes.length; i++) {
    let calculatedFrets = calculateChord(targetRootNote, baseShapes[i].referenceNote, baseShapes[i].shape, baseShapes[i]);

    let chordObject = {
      chordName: targetRootNote.toUpperCase(),
      shape: baseShapes[i].shape,
      baseFret: baseShapes[i].baseFret + (chromaticNotes.find(note => note.name === targetRootNote).value - chromaticNotes.find(note => note.name === baseShapes[i].referenceNote).value),
      fretsOnStrings: calculatedFrets,
      label: `${baseShapes[i].shape}-shape ${targetRootNote.toUpperCase()}`
    };
    

    results.push(chordObject)
  }
  
  return results; // Return the array after the loop
}