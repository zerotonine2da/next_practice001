'use client';

import style from './postActionButton.module.css';

export default function PostActionButton() {
    return (
        <div className={style.postActionButton}>
            <div className={style.CommentButton}>ㅇ</div>
            <div className={style.RepostButton}>ㅇ</div>
            <div className={style.HeartButton}>ㅇ</div>
        </div>
    );
}
