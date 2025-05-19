import { ModeToggle } from "./mode-toggle";

export function Header() {
    return (
        <header className="flex justify-end p-4">
            <ModeToggle />
        </header>
    )
}