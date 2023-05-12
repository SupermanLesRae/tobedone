//interfaces
import { PlusIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CategoryListProps } from "../interfaces/interface";

//component imports
import CategoryListItem from "./CategoryListItem";
import Modal from "./Modal";
import { Form } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { useState } from "react";
import Btn from "./Btn";
import IconBtn from "./Icon";

const CategoryList = (props: CategoryListProps) => {

    const { list } = props;

    const [modalVis, setModalVis] = useState(false);

    const toggleModal = () => {
        setModalVis(!modalVis);
    }

    const closeModal = () => {
        setModalVis(false);
    }

    return (
        <div>
            <div className="flex justify-between py-6 font-regular font-sans border-b-[1px]">
                <div>
                    Name:
                </div>
                <div>
                    Type:
                </div>
            </div>
            <ul className="py-6">
                {list.map((item, index) => (
                    <div key={index}>
                        <CategoryListItem name={item.name} type={item.type} status={item.status} />
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
                        <Form
                            method="post"
                        >                            
                            <input
                                className="border-2 px-4 py-2 my-6 rounded-full text-sm w-full"
                                type="text"
                                name="userName"
                                placeholder="Name your category"
                                aria-label="Your Name"
                                autoComplete="given-name"
                                required />

                            <div className="pb-4">
                                <SubmitBtn type={"primary"} title={"Add a new category"} className={""}>
                                    <UserPlusIcon className="h-4 w-4" />
                                </SubmitBtn>                               
                            </div>
                        </Form>
                    </Modal> :
                    null

            }

        </div>
    );
}

export default CategoryList;