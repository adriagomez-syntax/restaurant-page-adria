export default function TitleHighlight({ className, children }) {
    return (
        <h3 className={className + " text-xs text-secondary tracking-widest uppercase font-light"}>
            { children }
        </h3>
    )
}