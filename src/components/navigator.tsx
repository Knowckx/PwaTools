import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { BadgeDollarSign, Mail } from "lucide-react"
import { Calculator, SettingsIcon } from "lucide-react";
import { RecruitApp } from "@/components/RecruitApp";
import { BottomNavigator } from "infa";


const TableHome: React.FC = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`count is `, count)
    }, [count]);
    return (
        <>
            <h2 className="text-2xl font-bold underline text-center">
                Minimal React template
            </h2>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-lightblue w-52 h-24 text-center">
                    <Button variant="outline" onClick={() => setCount((count) => count + 1)}><Mail /> count is {count}</Button>
                </div>
            </div>
        </>
    )
}

interface CenterAppProps {
    isShow?: boolean
    comp: React.FC
}

const CenterApp: React.FC<CenterAppProps> = ({ isShow, comp: Comp }) => {
    if (isShow === false) return null;
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-lightblue w-52 h-24 text-center">
                <Comp />
            </div>
        </div>
    )
}

const TodoSettingsComponent: React.FC = () => (
    <div>Todo.. Settings..</div>
);

const TableSetting: React.FC = () => <CenterApp comp={TodoSettingsComponent} />;

const tabs = [
    { label: "Calculator", icon: Calculator, component: TableHome },
    { label: "ShopCalc", icon: BadgeDollarSign, component: RecruitApp },
    { label: "Settings", icon: SettingsIcon, component: TableSetting },
];

export function NavigatorApp() {
    return (
        <>
            <BottomNavigator tabs={tabs} />
        </>
    )
}