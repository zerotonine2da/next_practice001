import Trend from './Trend';
import style from './trendSection.module.css';

export default function TrendSection() {
    return (
        <div className={style.trendSectionTrendBg}>
            <div className={style.trendSectionTrend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
}
