//interfaces
import { PlusIcon } from "@heroicons/react/24/solid";
import { CategoryItem } from "../interfaces/interface";

//component imports
import CategoryListItem from "./CategoryListItem";

interface CategoryListProps {
    list: CategoryItem[];
}

const CategoryList = (props: CategoryListProps) => {

    const { list } = props;

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
                        <CategoryListItem name={item.name} />
                    </div>
                ))}
            </ul>
            <div className="pt-6">
                <div className="bg-pacific_blue gap-2 inline-flex rounded-full p-4 text-white shadow-lg hover:shadow-none hover:bg-black cursor-pointer">
                    <PlusIcon className="h-6 w-6"></PlusIcon>
                    <p>Add a category</p>
                </div>
            </div>
        </div>
    );
}

export default CategoryList;