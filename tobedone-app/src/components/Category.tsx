//interfaces
import { CategoryProps } from "../interfaces/interface";

//component imports
import Modal from "./Modal";

//rrd imports
import { useFetcher } from "react-router-dom";

//components
import SubmitBtn from "./SubmitBtn";

//assets
import Btn from "./Btn";
import IconBtn from "./Icon";
import { PlusIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

//react imports
import { useEffect, useRef, useState } from "react";
import CategoryItem from "./CategoryItem";


const Category = (props: CategoryProps) => {
    
    const { name, listItems } = props;

    const fetcher = useFetcher();

    const isSubmitting = fetcher.state === "submitting";

    const formRef = useRef<HTMLFormElement | null>(null);
    const focusRef = useRef<HTMLInputElement | null>(null);

    const [modalVis, setModalVis] = useState(false);

    //FUNCTIONS
    const toggleModal = () => {
        setModalVis(!modalVis);
    }

    const closeModal = () => {
        setModalVis(false);
    }

    const handleReset = () => {
        if (formRef.current !== null) {
            formRef.current.reset();
            focusRef.current?.focus();
            closeModal();
        }
    };
    //FUNCTIONS END

    useEffect(() => {

        if(!isSubmitting) {
            handleReset();
        }

    }, [isSubmitting]);

    return (

        
        <div>
            {
                listItems.length > 0 ?
                    <div className="flex justify-between py-6 font-regular font-sans border-b-[1px]">
                <div>
                    Name:
                </div>
                <div>
                    Type:
                </div>
            </div> : <p>{name} you currently have no categories</p>
            } 

           
            
            <ul className="py-6">
                {listItems.map((item, index) => (
                    <div key={index}>
                        <CategoryItem name={item.name} />
                    </div>
                ))}
            </ul> 
            <div className="pt-6">        
                <Btn click={toggleModal} className={""} type={"primary"} title={"Add a category"}>
                    <PlusIcon className="h-6 w-6"></PlusIcon>                    
                </Btn>
            </div>


            {
                modalVis ?
                    <Modal>
                         <div className="flex justify-between items-center p-2 mb-6">
                            <h1>Please add a name for your new Category</h1>
                            <IconBtn click={closeModal} className={""} type={"primary"}>
                                    <XMarkIcon className="h-6 w-6"></XMarkIcon>                    
                                </IconBtn>
                         </div>
                        <fetcher.Form
                            method="post"
                            ref={formRef}
                        >                            
                            <input
                                ref={focusRef}
                                className="border-2 px-4 py-2 mb-4 rounded-full text-sm w-full"
                                type="text"
                                name="categoryName"
                                placeholder="Name your category"
                                aria-label="Your Name"                                
                                required />

                                <input type="hidden" name="_action" value="createNewCategory" />

                            <div className="pb-4">
                                <SubmitBtn disabled={isSubmitting} type={"primary"} title={"Add a new category"} className={"disabled:bg-gray-400 disabled:pointer-events-none"}>
                                    <UserPlusIcon className="h-4 w-4" />
                                </SubmitBtn>                               
                            </div>
                        </fetcher.Form>
                    </Modal> :
                    null

            }

        </div>
    );
}

export default Category;