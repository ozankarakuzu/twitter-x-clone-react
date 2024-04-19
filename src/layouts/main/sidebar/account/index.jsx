import { Popover,Transition } from "@headlessui/react"
import { useAccount } from "~/store/auth/hooks"
import More from "./more"
export default function Account(){

    const account = useAccount()
    return(
        <div className="mt-auto">
            <Popover className="relative">
                <Popover.Button className="my-3 p-3 rounded-full hover:bg-[color:var(--background-third)] w-full flex text-left items-center outline-none">
                    <img src={account.avatar} className="w-10 flex-shrink-0 h-10 rounded-full" />
                    <div className="mx-3">
                        <h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
                        <div className="text-[color:var(--color-base-secondary)]">
                            @{account.userName}
                        </div>    
                    </div>
                    <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]"><path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>                
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom=" opacity-0"
                    enterTo=" opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom=" opacity-100"
                    leaveTo=" opacity-0">
                    <Popover.Panel className="py-3 absolute bottom-[71px] w-[300px] left-1/2 -translate-x-1/2 shadow-box rounded-2xl overflow-hidden bg-[color:var(--background-primary)]">
                        {(close)=>(
                            <More close={close}/>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}