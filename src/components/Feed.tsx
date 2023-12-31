import ItemFeed from "./ItemFeed";
import Post from "./Post";
import Stories from "./Stories";


const Feed = () => {
    return (
        <div className="lg:max-w-[680px] mx-auto pb-7">
            <Stories />
            <Post />
            <div className="flex flex-col gap-6">
                {
                    Array(4).fill('a').map((item: any, idx: number) => {
                        return (
                            <ItemFeed key={idx} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Feed;