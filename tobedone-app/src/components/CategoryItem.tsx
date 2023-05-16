//interface import
import { CategoryItemProps } from "../interfaces/interface";

//icons
import { Squares2X2Icon, TrashIcon, ListBulletIcon } from "@heroicons/react/24/solid";


const CategoryItem = (props: CategoryItemProps) => {

    const { name } = props;

    const clicked = (): void => {
        console.log("Category clicked!");
    };

    return (
        <li onClick={() => clicked} className="flex justify-between gap-x-6 py-5 border-b-[1px] cursor-pointer hover:bg-gray-900 text-gray-900 hover:px-4 hover:text-white transition-all duration-300">
            <div className="flex gap-x-4 items-center">
                <div className="min-w-0 flex items-center gap-4">
                     <span>
                    <ListBulletIcon className="w-6 h-6" />
                </span>
                    <p className="text-sm leading-6">{name}</p>
                    
                </div>
            </div>
             <div className="gap-2 flex items-center justify-center bg-white px-2">
                
                <TrashIcon className="w-4 h-4 text-red-600" />
               
            </div> 
        </li>
    );
}

export default CategoryItem;