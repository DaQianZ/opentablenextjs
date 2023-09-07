import Header from "../components/Header";
import Menu from "../components/Menu";
import RestautantNavBar from "../components/RestautantNavBar";

export default function RestaurantMenu() {
    return (
        <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestautantNavBar />
            <Menu />
        </div>
    )
}
