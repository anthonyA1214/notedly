export interface DialogControlProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export interface NotesData {
    id: string;
    title: string;
    content: string;
    category: string;
}

export interface NotesListProps {
   notes: NotesData[];
}

export interface EditNoteDialogProps extends DialogControlProps {
    note: {
        id: string;
        title: string;
        content: string;
        category: string;
    }
}

export interface DeleteNoteDialogProps extends DialogControlProps {
    note: {
        id: string;
        title: string;
    }
}