import PostForm from './_components/PostForm';
import Tab from './_components/Tab';
import TabProvider from './_components/TabProvider';
import style from './homePage.module.css';

export default function HomePage() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
            </TabProvider>
        </main>
    );
}
