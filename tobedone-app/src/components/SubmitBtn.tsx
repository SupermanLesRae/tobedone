//interfaces
import { SubmitBtnProps } from "../interfaces/interface";



const SubmitBtn = (props:SubmitBtnProps) => {

    const {className, type, title, children} = props;

    
    return (  
         <button
                type="submit"
                className={`btn flex ${type} items-center gap-2 py-2 px-6 rounded-full ${className}`}
                >
                    {children}
                    <span>{title}</span>

                </button>
     );
}
 
export default SubmitBtn;