import { ItemType } from "../../constants/type";

interface Props {
    item: ItemType;
}



const NavItemRight: React.FC<Props> = ({
    item: {icon}
}) => {
    return (
        <div className="w-[36px] h-[36px] bg-bg rounded-full flex items-center justify-center">
            {icon}
        </div>
    )
};

export default NavItemRight;