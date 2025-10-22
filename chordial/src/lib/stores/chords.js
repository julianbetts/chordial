import { writable } from 'svelte/store';


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
      fretsOnStrings: [null, 0, 2, 2, 2, 0]  
    },
    {
      shape: "G",
      referenceNote: "g",
      baseFret: 1,
      fretsOnStrings: [3, 2, 0, 0, 3, 3]  
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
      fretsOnStrings: [null, 0, 0, 2, 3, 2]  
    }
]

export function calculateChord(targetRootNote, referenceNote, shape, baseShapes) {
  let targetValue = chromaticNotes.find(note => note.name === targetRootNote).value;
  let referenceNoteValue = chromaticNotes.find(note => note.name === referenceNote).value;

  for (let i = 0; i < baseShapes.fretsOnStrings.length; i++) {

    // THIS IS THE MAIN LINE THAT adjusts fretsOnStrings array to match the changed root note
    let newValue = baseShapes.fretsOnStrings[i] + (targetValue - referenceNoteValue);

    // // conditional to correct negative and null values
    if (baseShapes.fretsOnStrings[i] === null) {
      newValue = null
    } else if (newValue < 0) {
      newValue = newValue + 12
    }

    baseShapes.fretsOnStrings[i] = newValue;
  }

  // FINAL EXECUTION
  return baseShapes.fretsOnStrings;
}

//base fret needs to return an integer, it needs to be relative to the notes, and needs to go up by 12 if negative







// export function calculateBaseFret(targetRootNote, referenceNote, shape, chords) {
//   let targetValue = chromaticNotes.find(note => note.name === targetRootNote).value;
//   let referenceNoteValue = chromaticNotes.find(note => note.name === referenceNote).value;
//   let correctedBaseFret = chords.baseFret + (targetValue - referenceNoteValue);
//   if (chords.baseFret)
// }


export function generateAllVariations(targetRootNote, baseShapes) {
  let results = [];

  for (let i = 0; i < baseShapes.length; i++) {
    let calculatedFrets = calculateChord(targetRootNote, baseShapes[i].referenceNote, baseShapes[i].shape, baseShapes[i]);
    

    console.log(`${baseShapes[i].shape}-shape ${targetRootNote}:`, {
      original: baseShapes[i].fretsOnStrings,
      calculated: calculatedFrets,
      baseFret: baseShapes[i].baseFret + (chromaticNotes.find(note => note.name === targetRootNote).value - chromaticNotes.find(note => note.name === baseShapes[i].referenceNote).value),
    });

    let chordObject = {
      chordName: targetRootNote.toUpperCase(),
      shape: baseShapes[i].shape,
      baseFret: baseShapes[i].baseFret + (chromaticNotes.find(note => note.name === targetRootNote).value - chromaticNotes.find(note => note.name === baseShapes[i].referenceNote).value),
      fretsOnStrings: calculatedFrets,
      label: `${baseShapes[i].shape}-shape ${targetRootNote.toUpperCase()}`
    };
    
    results.push(chordObject);
  }
  
  return results;
}