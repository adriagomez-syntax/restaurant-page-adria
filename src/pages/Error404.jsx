import { useLocation } from "react-router-dom"

export default function Error404() {
    const location = useLocation();

    return (
        <main className="flex-1 flex flex-col gap-4 justify-center items-center min-h-screen p-4">
            <h1 className="text-primary text-5xl">Error 404</h1>
            <p className="text-text">Page "{ location.pathname }" not found!</p>
        </main>
    )
}