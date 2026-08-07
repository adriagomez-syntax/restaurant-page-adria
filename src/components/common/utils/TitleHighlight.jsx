export default function TitleHighlight({ className, children }) {
    return (
        <h3 className={className + " text-amber tracking-widest uppercase font-light font-mono"}>
            { children }
        </h3>
    )
}