export default function Note({ note, onDelete }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>x</button>
    </div>
  )
}
