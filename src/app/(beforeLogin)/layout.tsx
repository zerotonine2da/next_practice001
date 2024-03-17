import { ReactNode } from 'react';
type props = {
    children: ReactNode;
    modal: ReactNode;
};

export default function LoginLayout({ children, modal }: props) {
    return (
        <div>
            로그인 레이아웃
            {children}
            {modal}
        </div>
    );
}
