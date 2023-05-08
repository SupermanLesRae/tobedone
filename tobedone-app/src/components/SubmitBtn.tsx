//interfaces
import { SubmitBtnProps } from "../interfaces/interface";

const SubmitBtn = (props:SubmitBtnProps) => {
    return (  
         <button
                type="submit"
                className={`flex items-center gap-2 bg-${props.color} hover:bg-white text-white hover:text-${props.color} font-bold py-2 px-6 rounded-full border-transparent border-2 hover:border-${props.color}`}
                >
                    {props.children}
                    <span>{props.title}</span>

                </button>
     );
}
 
export default SubmitBtn;