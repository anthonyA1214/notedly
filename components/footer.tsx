export default function Footer() {
    return (
        <footer className="py-8 text-center text-sm opacity-50 border-t border-opacity-10 mt-10">
            &copy; {new Date().getFullYear()} Notedly, Inc. | Privacy Policy | Terms of Service
        </footer>
    )
}