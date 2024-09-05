import { TfiThemifyFavicon } from "react-icons/tfi";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="links flex gap-8">
                <div className="flex gap-2 items-center w-full">
                    <h1 className="text-xl font-bold text-senary">Carolina Ferreira</h1>
                    <TfiThemifyFavicon size={28} color="#918868"/>
                </div>
                <div className="flex w-full justify-end gap-8">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </div>
        </nav>
    )
}