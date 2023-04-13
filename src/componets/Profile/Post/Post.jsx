import React from "react"
import s from './Post.module.css'

const Post = (props) => {
    return (
      


        <div className={s.Post}>
            <div className={`${s.item} ${s.active}`}>Post </div>
            <div className={s.item}>
                <img src='https://a.allegroimg.com/original/11071c/c382baca42b689579490323192b7/Logo-SKODA-na-sciane-prezent-do-domu-garazu-50cm'></img>
            </div>
            <div>{props.message}</div>
           

            <span>Like {props.likeKaunas} </span>
            <span>Dislike {props.DisLikeKaunas}</span>

        </div>


    )
}

export default Post