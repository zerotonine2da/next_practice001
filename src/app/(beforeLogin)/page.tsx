// 'use client';

// import { useRouter } from 'next/router';
// import { redirect } from 'next/navigation';
import Main from './_components/Main';

export default function LoginPage() {
    // const router = useRouter();
    // router.replace('/i/flow/login'); // 홈 -login - 팝업 (replace: 뒤로가기> 홈 이동) / (push: login창으로 가서 무한루트)
    return <Main />;
    // redirect('/i/flow/login');
}
