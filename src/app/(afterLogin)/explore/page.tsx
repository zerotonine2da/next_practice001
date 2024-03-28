import SearchForm from '../_components/homeRight/SearchForm';
import Trend from '../_components/homeRight/Trend';
import TrendSection from '../_components/homeRight/TrendSection';
import style from './explorePage.module.css';

export default function explorePage() {
    return (
        <main className={style.main}>
            <div className={style.formZone}>
                <SearchForm />
                <TrendSection />
            </div>

            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
            </div>
        </main>
    );
}
