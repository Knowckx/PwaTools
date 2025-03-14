import React, { useState, FC } from "react";
import { LucideIcon } from "lucide-react"; // For TypeScript Icon Type
import { cn } from "@/lib/utils"; // Assuming you have utils/cn
import { Button } from "@/components/ui/button";

export interface Tab {
    label: string;
    component: React.FC;
    icon?: LucideIcon;
}

interface BottomNavigatorProps {
    tabs: Tab[];
}

/* 底部导航栏 */
export const BottomNavigator: FC<BottomNavigatorProps> = ({ tabs }) => {
    // Initialize with the first tab's label or empty string
    const [activeContent, setActiveContent] = useState(tabs[0]?.label || "");

    const handleTabChange = (tabValue: string) => {
        setActiveContent(tabValue);
    };

    // 创建 ComponentMap
    const componentMap: { [key: string]: React.FC } = tabs.reduce(
        (acc: { [key: string]: React.FC }, tab) => {
            acc[tab.label] = tab.component;
            return acc;
        },
        {}
    );

    const ActiveComponent =
        componentMap[activeContent] || (() => <div>Tab Not Found</div>); // 默认组件

    return (
        <div>
            {/* Content area (conditionally render based on activeContent) */}
            <ActiveComponent />
            <OneTabBar tabs={tabs} onTabChange={handleTabChange} />
        </div>
    );
};


interface OneTabBarProps {
    tabs: Tab[];
    onTabChange: (tabValue: string) => void;
}

/** 每一个按钮 */
export const OneTabBar: React.FC<OneTabBarProps> = ({ tabs, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    const handleTabClick = (tabValue: string) => {
        setActiveTab(tabValue);
        onTabChange(tabValue); // Optional: Call a parent component to update content
    };

    return (
        <div className="fixed bottom-0 left-0 w-full h-20 bg-white border-t shadow-md flex justify-around items-center">
            {tabs.map((tab) => (
                <React.Fragment key={tab.label}>
                    <OneIcon tab={tab} activeTab={activeTab}  fn={handleTabClick} />
                </React.Fragment>
            ))}
        </div>
    );
};


interface OneIconProps {
    isShow?: boolean
    tab: Tab
    activeTab: string
    fn?: (inp: string)=>void
}
/** 一个大图标 下面有一行文字 */
const OneIcon: React.FC<OneIconProps> = ({ isShow, tab, activeTab, fn }) => {
    const UseActiveClass =  activeTab === tab.label
    ? "text-primary" //选中
    : "text-muted-foreground"  //未选中

    const UseClass =  cn(
        "flex flex-col font-bold items-center", UseActiveClass
    )
    if (isShow === false) return null;
    return (
        <div className={UseClass} onClick={() => fn?.(tab.label)}>
                {tab.icon && <tab.icon size={36} />}
                <span className="">{tab.label}</span>
                <Button className="text-primary">111</Button>
        </div>

    )
}

