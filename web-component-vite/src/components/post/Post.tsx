import { useEffect, useState} from "react"
import styles from "./post.scss?inline"

export interface IPostProps {
}

interface IPostResponseProps {
    id: number;
    title: number;
    body: string;
    userId: number;
}

export const Post = () => {
    const [post, setPost] = useState<IPostResponseProps>();
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${filter}`)
            .then(resp => resp.json())
            .then(data => setPost(data))
    }, [filter])

    return (
        <div>
            <style>{styles}</style>
            <div className="post">
                <input 
                    className="post__input"
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder="Filtre pelo Id do post"
                />
                <div>
                    <h1 className="post__title">Post: {post?.title}</h1>
                </div>
                <div>
                    <p className="post__body">{post?.body}</p>
                </div>
            </div>
        </div>
    )
}