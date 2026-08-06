export default function Section({ className, children }) {
    const classFinal = className + " flex-1 flex p-4"
    
    return (
        <section className={classFinal}>
            {children}
        </section>
    )
}