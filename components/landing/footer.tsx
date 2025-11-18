import { Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-8 text-center text-sm opacity-50 border-t border-opacity-10 mt-16 space-y-2">
            <p>Made with <Heart className="inline-block w-4 h-4 text-red-500" /> by anthonyA1214</p>
            <p>&copy; {new Date().getFullYear()} <strong>anthonyA1214</strong> | All rights reserved.</p>
        </footer>
    )
}