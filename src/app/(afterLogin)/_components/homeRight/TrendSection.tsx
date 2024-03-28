'use client';

import { usePathname } from 'next/navigation';
import Trend from './Trend';
import style from './trendSection.module.css';

export default function TrendSection() {
    const pathName = usePathname();
    if (pathName == '/explore') return null;
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
