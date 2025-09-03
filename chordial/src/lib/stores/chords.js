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

const chromaticNotes = [
  {name: 'E', value: 0},
  {name: 'F', value: 1},
  {name: 'F#', value: 2},
  {name: 'G', value: 3},
  {name: 'G#', value: 4},
  {name: 'A', value: 5},
  {name: 'A#', value: 6},
  {name: 'B', value: 7},
  {name: 'C', value: 8},
  {name: 'C#', value: 9},
  {name: 'D', value: 10},
  {name: 'D#', value: 11}
];

const baseShapes = [
  {
    shape: "C",
    referenceNote: "C",
    baseFret: 1,
    fretsOnStrings: [null, 3, 2, 0, 1, 0]  
  },
    {
      shape: "A",
      referenceNote: "A",
      baseFret: 1,
      fretsOnStrings: [null, 3, 5, 5, 5, 3]  
    },
    {
      shape: "G",
      referenceNote: "G",
      baseFret: 1,
      fretsOnStrings: [3, 2, 0, 0, 0, 3]  
    },
    {
      shape: "E",
      referenceNote: "E",
      baseFret: 1,
      fretsOnStrings: [0, 2, 2, 1, 0, 0]  
    },
    {
      shape: "D",
      referenceNote: "D",
      baseFret: 1,
      fretsOnStrings: [null, 0, 0, 3, 5, 3]  
    }
]

function calculateChord(targetRootNote, referenceNote, shape, chords) {
  let targetValue = chromaticNotes.find(note => note.name === targetRootNote).value;
  let referenceNoteValue = chromaticNotes.find(note => note.name === referenceNote).value;
  for (let i = 0; i < chords.fretsOnStrings.length; i++) {
    let newValue = chords.fretsOnStrings[i] + (targetValue - referenceNoteValue)
      chords.fretsOnStrings[i] = newValue
  }
  return chords.fretsOnStrings;
}

function generateAllVariations(targetRootNote, baseShapes) {
  // Loop through baseShapes
  // Call calculateChord for each shape
  // Return array of results
  for (let i = 0; i < baseShapes.length; i ++) {
    let cagedChord = []
    cagedChord.push(calculateChord(targetRootNote, baseShapes[i].referenceNote, baseShapes[i].shape, baseShapes[i]))
  }
  return cagedChord


}

