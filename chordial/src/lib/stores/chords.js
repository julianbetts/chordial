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
  
  for (let i = 0; i < chords.fretsOnStrings.length; i++) {
    let newValue = chords.fretsOnStrings[i] + (targetValue - referenceNoteValue);
    if (chords.fretsOnStrings[i] === null) {
      newValue = null
    } else if (newValue < 0) {
      newValue = newValue + 12
    }
    chords.fretsOnStrings[i] = newValue;
  }
  return chords.fretsOnStrings;
}

export function generateAllVariations(targetRootNote, baseShapes) {
  let results = []; // Create array to store all results
  
  for (let i = 0; i < baseShapes.length; i++) {
    let calculatedChord = calculateChord(targetRootNote, baseShapes[i].referenceNote, baseShapes[i].shape, baseShapes[i]);
    results.push(calculatedChord); // Add each result to the array
  }
  
  return results; // Return the array after the loop
}