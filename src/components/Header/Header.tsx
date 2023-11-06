import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { ItemType } from "../../constants/type";
import NavItemRight from "./NavItemRight";

const Header = () => {
    const items: Array<ItemType> = [
        {
            link: '/',
            label: '',
            icon: <i className="fa-solid fa-house"></i>,
            active: false
        },
        {
            link: '/',
            label: '',
            icon: <i className="fa-solid fa-video"></i>,
            active: false
        },
        {
            link: '/',
            label: '',
            icon: <i className="fa-solid fa-store"></i>,
            active: false
        },
        {
            link: '/',
            label: '',
            icon: <i className="fa-solid fa-user-group"></i>,
            active: false
        },
        {
            link: '/',
            label: '',
            icon: <i className="fa-solid fa-gamepad"></i>,
            active: false
        },
    ];

    const itemsRight: Array<ItemType> = [
        {
            link: '',
            icon: <i className="fa-solid fa-bars"></i>
        },
        {
            link: '',
            icon: <i className="fa-solid fa-message"></i>
        },
        {
            link: '',
            icon: <i className="fa-solid fa-bell"></i>
        },
        {
            link: '',
            icon: <figure>
                <img className="rouded-full w-[36px] h-[36px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&usqp=CAU" alt="" />
            </figure>
        },
    ] 

    return (
        <header className="fixed top-0 left-0 right-0 z-[900] px-4 pt-[5px] py-[3px] bg-white shadow shadow-shadow text-[25x]">
            <nav className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <i className="fa-brands fa-facebook text-main text-[42px]"></i>
                    <div className="relative">
                        <i className="fa-solid fa-magnifying-glass absolute top-[50%] translate-y-[-50%] translate-x-3 left-0 text-color-1"></i>
                        <input type="text" name="" id="" className="bg-bg p-2 pl-9 pr-8  rounded-full " placeholder="Tìm kiếm trên Facebook" />
                    </div>
                </div>
                <div className="flex items-center gap-4 text-color-1">
                    {
                        items.map((item: ItemType, idx) => {
                            return (
                                <NavItem key={idx} item={item} />
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-2">
                    {
                        itemsRight.map((item, idx) => {
                            return (
                                <NavItemRight item={item} key={idx}/>
                            )
                        })
                    }
                </div>
            </nav>
        </header>
    )
};

export default Header;