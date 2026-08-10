import './ButtonAnimation.css'

export default function Button({ onClick, className, children }) {
    const finalClass = className + " ButtonAnimation min-h-15 p-4 rounded-sm uppercase hover:opacity-75 transition cursor-pointer";
    
    return (
        <button onClick={onClick} className={finalClass}>
            {children}
            <div className=""></div>
        </button>
    )
}