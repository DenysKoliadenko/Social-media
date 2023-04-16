import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    
    return (
        <div className={s.content}>
            <div>
                <ProfileInfo />
                <MyPosts
                    State={props.ProfilePage}
                    addPost={props.addPost}
                    newPostText={props.ProfilePage.newPostText}
                    updateNewPostText={props.updateNewPostText} />
            </div>
        </div>
    )
}

export default Profile;