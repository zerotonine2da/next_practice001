import BackButton from '../_components/button/BackButton';
import Post from '../_components/common/Post';

import style from './profile.module.css';

export default function Profile() {
    const user = {
        id: 'test',
        nickname: '테스트짱짱',
        image: '/defaultImg.jpg',
    };

    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>{user.nickname}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user.image} alt={user.id} />
                </div>
                <div className={style.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                {/* <button className={style.followButton}>팔로우</button> */}
            </div>
            <div>
                <Post />
                <Post />
            </div>
        </main>
    );
}
