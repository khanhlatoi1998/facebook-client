import { ItemType } from "../constants/type";

interface Props {
    items: ItemType[];
}

const SidebarHome: React.FC<Props> = ({items}) => {
    return (
        <div className="">
            {
                items.map((item, idx) => {
                    return (
                        <div key={idx} className="flex items-center gap-3 py-2 pr-2">
                            <figure className="w-[36px] h-[36px] rounded-full overflow-hidden">
                                {item.icon}
                            </figure>
                            <p className="font-medium">{item.label}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SidebarHome;