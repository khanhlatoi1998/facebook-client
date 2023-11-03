import { ItemType } from "../../constants/type";

interface Props {
    item: ItemType;
}



const NavItemRight: React.FC<Props> = ({
    item: {icon}
}) => {
    return (
        <div className="w-[40px] h-[40px] bg-bg rounded-full flex items-center justify-center">
            {icon}
        </div>
    )
};

export default NavItemRight;