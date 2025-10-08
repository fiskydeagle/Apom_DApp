import { useTheme } from "next-themes";

const Sun = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
        <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M5.64 18.36l-1.42 1.42" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
);
const Moon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
);

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded bg-neutral-800"
        >
            {theme === "dark" ? <Moon /> : <Sun />}
        </button>
    );
}

export default ThemeToggle;