'use client';

import style from './followRecomend.module.css';

export default function FollowRecommend() {
    const onFollow = () => {};

    const user = {
        image: '/defaultImg.jpg',
        id: 'test',
        nickname: 'test',
    };
    return (
        <>
            <div className={style.followRecommend}>
                <h3>팔로우 추천</h3>
            </div>
            <div className={style.container}>
                <div className={style.userLogoSection}>
                    <div className={style.userLogo}>
                        <img src={user.image} alt={user.id} />
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div className={style.title}>{user.nickname}</div>
                    <div className={style.count}>@{user.id}</div>
                </div>
                <div className={style.followButtonSection}>
                    <button onClick={onFollow}>팔로우</button>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.userLogoSection}>
                    <div className={style.userLogo}>
                        <img src={user.image} alt={user.id} />
                    </div>
                </div>
                <div className={style.userInfo}>
                    <div className={style.title}>{user.nickname}</div>
                    <div className={style.count}>@{user.id}</div>
                </div>
                <div className={style.followButtonSection}>
                    <button onClick={onFollow}>팔로우</button>
                </div>
            </div>
        </>
    );
}
