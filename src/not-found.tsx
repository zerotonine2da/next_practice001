import { NextPage } from 'next';
import Link from 'next/link';

const notFound: NextPage = () => {
    return (
        <div>
            <div>이 페이지는 존재하지 않습니다. 다른페이지를 검색해보세요.</div>
            <Link href="/search">검색</Link>
        </div>
    );
};

export default notFound;
