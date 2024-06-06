import { Note } from "../types/Note";

let notes: Note[] = [
  { id: 1, title: "Nota 1", text: "Texto da Nota 1" },
  { id: 2, title: "Nota 2", text: "Texto da Nota 2" }
];

export function getNotes() {
  return notes;
}

export function getNote(id: number) {
  return notes.find(n => n.id === id);
}

export function saveNote(note: Note) {
  if (note.id) {
    const index = notes.findIndex(n => n.id === note.id);
    notes[index] = note;
  } else {
    note.id = notes.length + 1;
    notes.push(note);
  }
}

export function deleteNote(id: number) {
  notes = notes.filter(n => n.id !== id);
}
