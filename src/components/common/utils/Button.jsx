export default function Button({ onClick, className, children }) {
    const finalClass = className + " min-h-15 p-4 rounded-sm uppercase font-bold hover:opacity-75";
    
    return (
        <button onClick={onClick} className={finalClass}>
            {children}
            <div className=""></div>
        </button>
    )
}