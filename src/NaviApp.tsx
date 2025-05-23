
import { BadgeDollarSign } from "lucide-react"
import { Calculator, SettingsIcon } from "lucide-react";
import PriceCalculator from "@/components/PriceCalculator";
import { BottomNavigator } from "infa";
import { TextCalcApp } from "./components/TextCalcApp";

const tabs = [
    { label: "Calculator", icon: Calculator, component: PriceCalculator },
    { label: "ShopCalc", icon: BadgeDollarSign, component: TextCalcApp },
    { label: "Settings", icon: SettingsIcon, component: ()=>(<p>Empty</p>) },
];


export function NavigatorApp() {
    return (
        <BottomNavigator tabs={tabs} />
    )
}