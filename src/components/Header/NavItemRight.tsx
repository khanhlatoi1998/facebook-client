import { NavLink } from "react-router-dom";
import { ItemType } from "../../constants/type";

interface Props {
    item: ItemType;
}



const NavItemRight: React.FC<Props> = ({
    item: {icon}
}) => {
    return (
        <NavLink to="" className="w-[36px] h-[36px] bg-bg rounded-full flex items-center justify-center">
            {icon}
        </NavLink>
    )
};

export default NavItemRight;