import { ReactNode } from 'react';
import style from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './_components/homeLeft/NavMenu';
import zLogo from '../../../public/zlogo.png';
import LogOutButton from './_components/button/LogOutButton';
import TrendSection from './_components/homeRight/TrendSection';
import FollowRecommend from './_components/homeRight/FollowRecommend';
import RightSearchZone from './_components/homeRight/RightSearchZone';

type props = {
    children: ReactNode;
    modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: props) {
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
                        <main className={style.layoutMain}>{children}</main>
                        <section className={style.layoutRightSection}>
                            <RightSearchZone />
                            <div>
                                <TrendSection />
                            </div>
                            <div>
                                <FollowRecommend />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            {modal}
        </div>
    );
}
