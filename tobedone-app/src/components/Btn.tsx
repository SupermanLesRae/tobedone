//interfaces
import { BtnProps } from "../interfaces/interface";



const Btn = (props: BtnProps) => {

    const { click, className, type, title, children } = props;

    return (
        <button
        onClick={click}
            className={`btn flex ${type} items-center gap-2 py-2  px-6 rounded-full ${className}`}
        >
            {children}
            {
                title ? <span>{title}</span> : null
            }
            

        </button>
    );
}

export default Btn;