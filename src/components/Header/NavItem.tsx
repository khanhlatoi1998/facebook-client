import { NavLink } from "react-router-dom";
import { ItemType } from "../../constants/type";

interface Props {
    item: ItemType;
}


const NavItem: React.FC<Props> = ({
    item: { link, label, active, icon }
}) => {
    return (
        <NavLink to="/hekllo" className="px-12 py-3 bg-bg rounded-lg relative">
            {icon}
            <div className="bg-main absolute top-[100%] left-0 w-full h-[3px]"></div>
        </NavLink>
    )
};

export default NavItem;