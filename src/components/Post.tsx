const Post = () => {
    return (
        <div className="py-6">
            <div className="bg-white shadow-component rounded-md p-4">
                <div className="flex items-center gap-2 pb-3 border-b border-solid border-border">
                    <figure>
                        <img className="w-[40px] h-[40px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngDLxVdX-4fhpWyG8hDPxUWyGV1B9uOXJ3Q&usqp=CAU" alt="" />
                    </figure>
                    <input type="text" className="flex-1 rounded-full p-2 bg-bg" placeholder="Khánh ơi, bạn đang nghĩ gì thế?" />
                </div>
                <div className="flex items-center justify-around px-2 pt-3">
                    <button className="flex-1 flex items-center justify-center gap-2 hover:bg-bg py-2 rounded-lg ">
                        <i className="fa-solid fa-clapperboard text-2xl text-red-500"></i>
                        <p className="opacity-70 font-medium">Video trực tiếp</p>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-bg rounded-lg">
                        <i className="fa-regular fa-images text-2xl text-green-500"></i>
                        <p className="opacity-70 font-medium">Ảnh/video</p>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-bg rounded-lg">
                        <i className="fa-solid fa-face-laugh-squint text-2xl text-yellow-500"></i>
                        <p className="opacity-70 font-medium">Cảm súc/hoạt động</p>
                    </button>
                </div>
            </div>
            <div className="bg-[#ffffff96] fixed top-0 left-0 right-0 bottom-0 z-[900] flex items-center justify-center">
                <div className="w-1/3 xl:w-1/4 bg-white rounded-md shadow-xl">
                    <div className="p-4 border-b border-solid border-border relative">
                        <p className="font-medium lg:text-title-lg-2 flex justify-center">Tạo bài viết</p>
                        <span className="w-[40px] h-[40px] bg-bg rounded-full flex items-center justify-center absolute right-3 top-[50%] translate-y-[-50%]">
                            <i className="fa-solid fa-xmark text-[20px]"></i>
                        </span>
                    </div>
                    <div className="p-2">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;