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
        </div>
    );
}

export default Post;