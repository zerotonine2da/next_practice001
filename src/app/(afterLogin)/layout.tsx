import { ReactNode } from 'react';
import style from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './_components/home/NavMenu';
import zLogo from '../../../public/zlogo.png';
import LogOutButton from './_components/button/LogOutButton';

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className={style.container}>
                <header className={style.leftSectionWrapper}>
                    <section className={style.leftSection}>
                        <div className={style.leftSectionFixed}>
                            <Link className={style.logo} href={'/home'}>
                                <div className={style.logoPill}>
                                    <Image src={zLogo} alt="logo" width={40} height={40} />
                                </div>
                            </Link>
                            <nav>
                                <ul>
                                    <NavMenu />
                                </ul>
                                <Link href={'/compose/tweet'} className={style.postButton}>
                                    게시하기
                                </Link>
                            </nav>
                            <LogOutButton />
                        </div>
                    </section>
                </header>
                <div className={style.rightContainer}>
                    <div className={style.rightContentInner}>
                        <main className={style.layoutMain}>
                            <main className={style.homeMain}>
                                <div className={style.tabHomeFixed}>
                                    <div className={style.tabHomeText}>홈</div>
                                    <div className={style.tabHomeTab}>
                                        <div className={style.tabHomeRecommend}>추천</div>
                                        <div className={style.tabHomeFollow}>팔로우중</div>
                                    </div>
                                </div>
                            </main>
                        </main>
                        <section className={style.layoutRightSection}>
                            <div className={style.search}>
                                <form className={style.searchZone}>
                                    <svg width="20" viewBox="0 0 24 24" aria-hidden="true">
                                        <g>
                                            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                                        </g>
                                    </svg>
                                    <input type="search" name="search"></input>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}
