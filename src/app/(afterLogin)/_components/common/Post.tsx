import Link from 'next/link';
import style from './post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import PostActionButton from '../../home/_components/PostActionButton';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {
    const target = {
        User: {
            id: 'test',
            nickname: 'test닉네임',
            image: '/defaultImg.jpg',
        },
        content: '오예',
        createAt: new Date(),
        Images: [],
    };

    return (
        <article className={style.post}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}></img>
                    </Link>
                </div>

                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`} className={style.postMetaInfo}>
                            <span className={style.postUserName}>{target.User.id}&nbsp;</span>
                            <span className={style.postUserNickName}>@{target.User.nickname}&nbsp;</span>
                            &nbsp;·&nbsp;
                            <span>{dayjs(target.createAt).fromNow(true)}</span>
                        </Link>
                    </div>
                    <div>{target.content}</div>
                    <PostActionButton />
                </div>
            </div>
        </article>
    );
}
