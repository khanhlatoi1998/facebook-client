import Feed from "../components/Feed";
import Header from "../components/Header/Header";
import SidebarHome from "../components/SidebarHome";
import Widgets from "../components/Widgets";
import { ItemType } from "../constants/type";

const HomePage = () => {
    const items: Array<ItemType> = [
        {
            link: '/profile',
            label: 'Quoc Khanh',
            icon: <img className="rouded-full w-[36px] h-[36px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&usqp=CAU" alt="" />

        },
        {
            link: '/friend',
            label: 'Bạn Bè',
            icon: <img src="./images/img_09.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Đã lưu',
            icon: <img src="./images/img_06.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Kỷ niệm',
            icon: <img src="./images/img_13.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Nhóm',
            icon: <img src="./images/img_02.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Video',
            icon: <img src="./images/img_15.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Bảng feed',
            icon: <img src="./images/img_18.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Chơi game',
            icon: <img src="./images/img_03.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Messager',
            icon: <img src="./images/img_16.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Sự kiện',
            icon: <img src="./images/img_17.png" alt="" />
        },
        {
            link: '/friend',
            label: 'Trang',
            icon: <img src="./images/img_04.png" alt="" />
        },
    ];

    return (
        <main className="overflow-x-scroll">
            <div className="pl-4 pt-6 flex relative items-start">
                <div className="sticky top-[65px] hiddenScroll border-b border-solid pb-2 border-gray-300 max-h-[100vh] sidebar">
                    <SidebarHome items={items} />
                </div>
                <div className="flex-1">
                    <Feed />
                </div>
                <div className="bg-[red] widgets">
                    <Widgets />
                </div>
            </div>
        </main>
    )
};

export default HomePage;