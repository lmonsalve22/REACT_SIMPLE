import React, { useState, useEffect } from 'react'
import Note from './Note'

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes')
    return saved ? JSON.parse(saved) : []
  })
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    if (!text.trim()) return
    const newNote = { id: Date.now(), text }
    setNotes([newNote, ...notes])
    setText('')
  }

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="app-container">
      <h1>📝 Mis Notas</h1>
      <div className="note-input">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe una nota..."
        ></textarea>
        <button onClick={addNote}>Agregar Nota</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="no-notes">No hay notas todavía.</p>
        ) : (
          notes.map(note => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))
        )}
      </div>
    </div>
  )
}
