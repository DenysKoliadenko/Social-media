import React from "react"
import s from './MyPosts.module.css'
import Post from "../Post/Post"

const MyPosts = (props) => {
    


    let PostElements = props.State.PostData.map(p => < Post message={p.message} likeKaunas={p.likeKaunas} DisLikeKaunas={p.DisLikeKaunas} />)
    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        
    }
    let onPostChange = () => {
        
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }



    return (
        

        <div className={s.MyPosts}>
            <div className={s.postBlock}><h3>My posts</h3></div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.Post}>
                {PostElements}
            </div>


        </div>

    )
}









export default MyPosts