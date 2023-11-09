import { useRef, useState, useEffect } from "react";
import ItemStory from "../ItemStory";
import { data } from "./data";


const Stories = () => {
    const groupRef = useRef<any>(null);
    const prevRef = useRef<any>(null);
    const nextRef = useRef<any>(null);
    const [translate, setTranslate] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const widthItem = 141;
    const marginRight = 8;

    const handlePrev = () => {
        const widthContainer = groupRef.current.offsetWidth;
        const numberShowItem = Math.floor(groupRef.current.offsetWidth / (141 + marginRight));
        const widthItemMissing = widthContainer - (widthItem * numberShowItem);
        if (count === 1) {
            let numberTranslate = widthContainer - widthItemMissing - marginRight;
            groupRef.current.style.transform = `translateX(-${translate - numberTranslate}px)`;
            setTranslate(translate - numberTranslate);
            setCount(count - 1);
            prevRef.current.style.display = 'none';

        } else {
            setCount(count - 1);
            let numberTranslate = (widthItem * numberShowItem) + (marginRight * numberShowItem);
            groupRef.current.style.transform = `translateX(-${translate - numberTranslate}px)`;
            setTranslate(translate - numberTranslate);
        }
        nextRef.current.style.display = 'flex';
    };

    const handleNext = () => {
        const widthContainer = groupRef.current.offsetWidth;
        const numberShowItem = Math.floor(groupRef.current.offsetWidth / 141);
        const widthItemMissing = widthContainer - (widthItem * numberShowItem);
        const widthAllItem = ((data.length + 1) * widthItem) + ((data.length + 1) * marginRight);
        if (count === 0) {
            setCount(count + 1);
            let numberTranslate = widthContainer - widthItemMissing - marginRight;
            groupRef.current.style.transform = `translateX(-${translate + numberTranslate}px)`;
            setTranslate(translate + numberTranslate);
        } else {
            setCount(count + 1);
            let numberTranslate = (widthItem * numberShowItem) + (marginRight * numberShowItem);
            groupRef.current.style.transform = `translateX(-${translate + numberTranslate}px)`;
            setTranslate(translate + numberTranslate);
        }
        prevRef.current.style.display = 'flex';
    };

    useEffect(() => {
        const widthContainer = groupRef.current.offsetWidth;
        const widthAllItem = ((data.length + 1) * widthItem) + ((data.length + 1) * marginRight);
        if ((widthAllItem - widthContainer - translate) > 0) {
            nextRef.current.style.display = 'flex';
        } else {
            nextRef.current.style.display = 'none';
        }
    }, [translate])


    return (
        <div className="relative w-full overflow-x-scroll no-scrollbar">
            <div className="h-[250px] flex relative grow-1 transition" ref={groupRef}>
                <div className="group  cursor-pointer h-full  grow-0 shrink-0 basis-[141px] mr-[8px] pb-1 rounded-lg bg-white overflow-hidden relative flex flex-col items-center justify-between shadow-component">
                    <figure className="">
                        <img className="h-[205px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmwWQIrVvOza5_9GSFKoc4yGyeW63v5MTwg&usqp=CAU" alt="" />
                    </figure>
                    <div className="w-[40px] h-[40px] bg-white rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-[200px] left-[50%] p-1 ">
                        <div className="bg-main rounded-full p-2 flex items-center justify-center">
                            <i className="fa-solid fa-plus text-white"></i>
                        </div>
                    </div>
                    <p className="text-[13px] font-medium">Tạo tin</p>
                    <div className=" group-hover:block hidden bg-[#00000024] w-full h-full absolute top-0 left-0">
                    </div>
                </div>
                {data.map((item: any, idx: number) => {
                    return (
                        <ItemStory item={item} key={idx} />
                    )
                })}
            </div>

            <button ref={prevRef} onClick={handlePrev} className="absolute top-[50%] left-4 translate-y-[-50%] w-[50px] h-[50px] rounded-full bg-white hidden items-center justify-center">
                <i className="fa-solid fa-chevron-left opacity-80"></i>
            </button>
            <button ref={nextRef} onClick={handleNext} className="absolute top-[50%] right-4 translate-y-[-50%] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                <i className="fa-solid fa-chevron-right opacity-80"></i>
            </button>
        </div>
    )
};

export default Stories;