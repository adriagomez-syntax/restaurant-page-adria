export default function Section({ className, children }) {
    const classFinal = className + " flex min-h-screen md:min-h-[50vh] justify-center items-center p-4"
    
    return (
        <section className={classFinal}>
            {children}
        </section>
    )
}