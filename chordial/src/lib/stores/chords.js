import { writable } from 'svelte/store';
export const chords = writable([{
  "chordName": "C",
  "shape": "C",
  "baseFret": 1,
  "strings": [null, 3, 2, 0, 1, 0],
  "label": "C-shape C"
}]);