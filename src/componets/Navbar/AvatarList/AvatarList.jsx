import s from './AvatarList.module.css'


const AvatarList = (props) => {
    return props.avatars.map(ava => <div>
        Slava
        <img src={ava.ava} className={s.avatarimg}></img>
    </div>);
}

export default AvatarList