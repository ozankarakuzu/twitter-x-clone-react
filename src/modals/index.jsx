import modals from "~/routes/modals"
import { useModal } from "~/store/modal/hooks"

export default function Modal(){

    const modal = useModal()
    const currentModal = modals.find(m=>m.name == modal.name)

    return(
        <div className="fixed insert-0 bg-[#5b7083]/40 flex items-center justify-center z-20 left-0 w-full h-full">
            <div className="bg-black max-w-[600px] rounded-2xl max-h-[90vh] overflow-auto">
                {currentModal && <currentModal.element/>}
            </div>
        </div>
    )
}