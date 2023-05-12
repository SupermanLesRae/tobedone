//interfaces
import { IconBtnProps } from "../interfaces/interface";



const IconBtn = (props: IconBtnProps) => {

    const { click, className, type, children } = props;

    return (
        <button
        onClick={click}
            className={`btn flex ${type} items-center gap-2 py-2  px-2 rounded-full ${className}`}
        >
            {children}
        </button>
    );
}

export default IconBtn;