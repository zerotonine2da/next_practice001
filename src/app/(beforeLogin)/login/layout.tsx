import { ReactNode } from 'react';
type props = { children: ReactNode; modal: ReactNode };

export default function LoginLayout({ children, modal }: props) {
    return (
        <div>
            로그인화면
            {children}
            {modal}
        </div>
    );
}
