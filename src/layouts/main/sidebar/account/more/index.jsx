import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/actions";
import { useAccount, useAccounts } from "~/store/auth/hooks"
export default function More({close}){

    const currentAccount = useAccount()
    const accounts = useAccounts()
    return(
        <div>
            {accounts.map((account,index) =>(
                <button 
                    key={index}
                    disabled={currentAccount.id == account.id}
                    onClick={()=>{
                        setCurrentAccount(account)
                        close()
                    }}
                    className={classNames("py-3 px-4 flex items-center text-left w-full transtion-colors",{
                    "hover:bg-[#eff3f41a]":currentAccount.id != account.id
                })}>
                    <img src={account.avatar} className="w-10 h-10 rounded-full" />
                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b]">
                            @{account.userName}
                        </div>    
                    </div>
                    {currentAccount.id == account.id && (
                        <svg viewBox="0 0 24 24" class="mr-2 ml-3 h-[1.172rem]" fill="#00ba7c"><path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"></path></svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3"/>
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transtion-colors font-bold text-[15px] text-[#e7e9ea]">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transtion-colors font-bold text-[15px] text-[#e7e9ea]">
                Hesapları yönet
            </button>
            <button className="py-3 px-4 text-left hover:bg-[#eff3f41a] w-full transtion-colors font-bold text-[15px] text-[#e7e9ea] leadging-[20px]">
                <div className="max-w-[228px]">
                    @ozan_karakuzu hesabından çıkış yap
                </div>
            </button>
        </div>
    )
}