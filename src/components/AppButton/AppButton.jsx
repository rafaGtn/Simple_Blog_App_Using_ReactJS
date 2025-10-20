import "./AppButton.css";


export default function AppButton({ onClick, children, className="button" }) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}
