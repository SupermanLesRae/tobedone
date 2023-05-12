//interface import
import { CategoryListItemProps } from "../interfaces/interface";

//icons
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";


const CategoryListItem = (props: CategoryListItemProps) => {

    const { name, type, status } = props;

    const clicked = (): void => {
        console.log("Category clicked!");
    };

    return (
        <li onClick={() => clicked} className="flex justify-between gap-x-6 py-5 border-b-[1px] cursor-pointer hover:bg-gray-900 text-gray-900 hover:px-4 hover:text-white transition-all duration-300">
            <div className="flex gap-x-4 items-center">
                <div className="min-w-0 flex items-center gap-4">
                     <span>
                    <ArrowSmallRightIcon className="w-4 h-4" />
                </span>
                    <p className="text-sm leading-6">{name}</p>
                    
                </div>
            </div>
            <div className="hidden gap-2 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6">
                    {
                        type ? type : <p>generic</p>
                    }
                </p>
                {
                    status === "inprogress" ? 
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">in progress</span>
                    : <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span>
                }
               
            </div>
        </li>
    );
}

export default CategoryListItem;