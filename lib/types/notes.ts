export interface DialogControlProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface NotesData {
  id: string;
  title: string;
  content: string | null;
  category: string;
}

export interface NotesListProps {
  notes: NotesData[];
}

export interface EditNoteDialogProps extends DialogControlProps {
  note: {
    id: string;
    title: string;
    content: string | null;
    category: string;
  };
}

export interface EditNoteFormProps {
  slug: string;
  note: {
    id: string;
    title: string;
    content: string | null;
    category: string;
  };
  onSuccess: () => void;
}

export interface DeleteNoteDialogProps extends DialogControlProps {
  note: {
    id: string;
    title: string;
  };
}

export interface DeleteNoteFormProps {
  slug: string;
  note: {
    id: string;
    title: string;
  };
  onSuccess: () => void;
}
