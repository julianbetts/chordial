import { writable } from 'svelte/store';

export const chords = writable([
  {
    chordName: "C",
    shape: "C",
    baseFret: 1,
    fretsOnStrings: [null, 3, 2, 0, 1, 0],
    label: "C-shape C"
  }
  ,
  {
    chordName: "C",
    shape: "A",
    baseFret: 3,
    fretsOnStrings: [null, 3, 5, 5, 5, 3],
    label: "A-shape C"
  },
  {
    chordName: "C",
    shape: "G",
    baseFret: 7,
    fretsOnStrings: [8, 10, 10, 9, 8, 8],
    label: "G-shape C"
  },
  {
    chordName: "C",
    shape: "E",
    baseFret: 8,
    fretsOnStrings: [8, 10, 10, 9, 8, 8],
    label: "E-shape C"
  },
  {
    chordName: "C",
    shape: "D",
    baseFret: 10,
    fretsOnStrings: [null, null, 10, 12, 13, 12],
    label: "D-shape C"
  }
]);
