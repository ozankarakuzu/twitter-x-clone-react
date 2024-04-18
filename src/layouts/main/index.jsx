import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";

export default function MainLayout(){

    const modal = useModal()

    return(
        <div className="w-[1265px] mx-auto flex">
            {modal && <Modal/>}
            <Sidebar/>
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 border-x border-[#2f3336] max-w-[600px]">
                    <Outlet/>
                </main>
            </main>            
            <RightBar/>
        </div>
    )
}