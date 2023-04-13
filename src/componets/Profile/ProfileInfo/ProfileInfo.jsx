import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://profiauto.pl/blog/wp-content/uploads/2022/02/Skoda-Enyaq-Coupe-premiera.jpg'></img>
            </div>

            <div className={s.descriptionBlock}>
                  Ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;