export interface DialogControlProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export interface PageItemsData {
    id: string;
    title: string;
    slug: string;
    category: string;
}

export interface PageItemsListProps {
    items: PageItemsData[];
}

export interface EditPageDialogProps extends DialogControlProps {
    item: {
        id: string;
        title: string;
        category: string;
    }
}

export interface EditPageFormProps {
    slug: string;
    item: {
        id: string;
        title: string;
        category: string;
    },
    onSuccess: () => void;
}

export interface DeletePageDialogProps extends DialogControlProps {
    item: {
        id: string;
        title: string;
    }
}

export interface DeletePageFormProps {
    slug: string;
    item: {
        id: string;
    },
    onSuccess: () => void;
}
