//interfaces
import { SubmitBtnProps } from "../interfaces/interface";



const SubmitBtn = (props:SubmitBtnProps) => {

    const {className, type, title, children, disabled=false} = props;

    
    return (  
         <button disabled={disabled}
                type="submit"
                className={`btn flex ${type} items-center gap-2 py-2 px-6 rounded-full ${className}`}
                >
                    {
                        !disabled ? <>
                            {children}
                            <span>{title}</span>
                        </> : <span>Creating category...</span>
                    }
                    

                </button>
     );
}
 
export default SubmitBtn;