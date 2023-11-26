import { FastAverageColor } from "fast-average-color";
import { useEffect, useRef } from "react";

const ItemFeed = () => {
    const backgroundColorRef = useRef<any>(null);
    const imageRef = useRef<any>(null);
    const fac = new FastAverageColor();

    useEffect(() => {
        fac.getColorAsync(imageRef.current)
            .then(color => {
                backgroundColorRef.current.style.backgroundColor = color.rgba;
                backgroundColorRef.current.style.color = color.isDark ? '#fff' : '#000';
            })
            .catch(e => {
                console.log(e);
            });
    }, [imageRef]);

    return (
        <div className="bg-white shadow-component rounded-lg">
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <figure>
                            <img className="w-[40px] h-[40px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&usqp=CAU" alt="" />
                        </figure>
                        <div>
                            <p className="font-medium">Chúng Ta Của Hiện Tại</p>
                            <div className="text-color-1 text-small-1 flex items-center gap-[10px]">
                                <div className="relative">
                                    Tin
                                    <i className="absolute top-[50%] right-[-6px] translate-y-[-70%]">.</i>
                                </div>
                                <p className="relative">
                                    3 ngay
                                    <i className="absolute top-[50%] right-[-6px] translate-y-[-70%]">.</i>
                                </p>
                                <span className="relative">
                                    <i className="fa-solid fa-earth-americas text-inherit"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-color-1 text-[22px]">
                        <button className="w-[36px] h-[36px] flex justify-center items-center hover:bg-bg rounded-full">
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                        <button className="w-[36px] h-[36px] flex justify-center items-center hover:bg-bg rounded-full">
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <p className="mt-2 text-color-3">Đôi khi, trở về nhà, bên mẹ cha, bên những bữa ăn gia đình ấm cúng, lại khiến ta bình yên đến như vậy ❤️</p>
            </div>
            <figure className="relative w-full flex justify-center bg-bg" ref={backgroundColorRef}>
                <img ref={imageRef} className="max-w-[520px] h-[auto] object-cover" crossOrigin="anonymous" src="https://images.pexels.com/photos/14953694/pexels-photo-14953694/free-photo-of-anh-sang-thanh-ph-binh-minh-phong-c-nh.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </figure>
            <div className="px-4 pt-3 pb-1">
                <div className="flex items-center justify-between text-color-2 border-b border-solid border-border pb-2">
                    <div className="flex items-center">
                        <div className="flex items-center relative cursor-pointer">
                            <span className="rounded-full border-2 border-solid border-white z-[10]">
                                <img className="w-[18px] h-[18px] " src="../images/like.png" alt="" />
                            </span>
                            <span className="rounded-full border-2 border-solid ml-[-4px] z-[9] border-white">
                                <img className="w-[18px] h-[18px]" src="../images/heart.png" alt="" />
                            </span>
                            <span className="rounded-full border-2 border-solid ml-[-4px] z-[1] border-white">
                                <img className="w-[18px] h-[18px]" src="../images/smile.png" alt="" />
                            </span>
                        </div>
                        <p className="cursor-pointer pl-1 hover:underline">18K</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className="hover:underline cursor-pointer">438 bình luận</p>
                        <p className="hover:underline cursor-pointer">40 lượt chia sẽ</p>
                    </div>
                </div>
                <div className="pt-2 flex items-center justify-around text-color-2 gap-2">
                    <div className="flex-1 flex items-center justify-center hover:bg-bg rounded-md py-2 cursor-pointer">
                        <span><i className="fa-regular fa-thumbs-up mr-2 text-xl"></i></span>
                        <span className="font-medium">Thích</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center hover:bg-bg rounded-md py-2 cursor-pointer">
                        <span><i className="fa-regular fa-comment mr-2 text-xl"></i></span>
                        <span className="font-medium">Bình luận</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center hover:bg-bg rounded-md py-2 cursor-pointer">
                        <span><i className="fa-regular fa-share-from-square mr-2 text-xl"></i></span>
                        <span className="font-medium">Chia sẽ</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemFeed