'use client';

import { ReactNode, createContext, useState } from 'react';

export const TabContext = createContext({
    tab: 'rec',
    setTab: (value: 'rec' | 'fol') => {},
});

type props = { children: ReactNode };

export default function TabProvider({ children }: props) {
    const [tab, setTab] = useState('rec');

    return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
