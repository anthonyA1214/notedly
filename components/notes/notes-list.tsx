"use client";

import NoteCard from "@/components/notes/note-card";
import { useState } from "react";
import { EditNoteDialog, DeleteNoteDialog } from "@/components/notes/dialog";
import { NotesData, NotesListProps } from "@/lib/types/notes";

export default function NotesList({ notes }: NotesListProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEditNote, setSelectedEditNote] = useState<NotesData | null>(
    null
  );

  const onEdit = (note: NotesData) => {
    setSelectedEditNote(note);
    setOpenEdit(true);
  };

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedDeleteNote, setSelectedDeleteNote] =
    useState<NotesData | null>(null);

  const onDelete = (note: NotesData) => {
    setSelectedDeleteNote(note);
    setOpenDelete(true);
  };

  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          category={note.category}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note)}
        />
      ))}

      {selectedEditNote && (
        <EditNoteDialog
          open={openEdit}
          setOpen={setOpenEdit}
          note={selectedEditNote}
        />
      )}

      {selectedDeleteNote && (
        <DeleteNoteDialog
          open={openDelete}
          setOpen={setOpenDelete}
          note={selectedDeleteNote}
        />
      )}
    </>
  );
}
