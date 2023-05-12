interface CategoryListItemProps {
    name: string;
    type?: string;
}

const CategoryListItem = (props: CategoryListItemProps) => {

    const { name, type } = props;

    const clicked = (): void => {
        console.log("Category clicked!");
    };

    return (
        <li onClick={() => clicked} className="flex justify-between gap-x-6 py-5 border-b-[1px]">
            <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm leading-6 text-gray-900">{name}</p>
                </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                    {
                        type ? type : <p>generic</p>
                    }
                </p>
            </div>
        </li>
    );
}

export default CategoryListItem;