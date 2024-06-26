import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[0.813rem]">
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4  hover:underline">
                Hizmet Şartları
            </Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4  hover:underline">
                Gizlilik Politikası
            </Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">
                Çerez Politikası
            </Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">
                Imprint
            </Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">
                Erişilebilirlik
            </Link>
            <Link to="/" className="text-[color:var(--color-base-secondary)] leading-4 hover:underline">
                Reklam bilgisi
            </Link>
            <div className="inline-flex gap-2 flex-wrap">
                <Popover className="relative inline-flex leading-4">
                    <Popover.Button className="text-[color:var(--color-base-secondary)] hover:underline inline-flex items-center outline-none">
                        Daha fazla
                        <svg viewBox="0 0 24 24" className="h-[1em] px-0.5"><path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                    </Popover.Button>
                    <Popover.Panel className="w-[9.375rem] max-w-[24rem] absolute bottom-0 right-0 bg-[color:var(--background-primary)] shadow-box rounded-xl grid overflow-hidden">
                        <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[color:var(--background-secondary)]">
                            Hakkımızda
                        </Link>
                        <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[color:var(--background-secondary)]">
                            Durum
                        </Link>
                        <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[color:var(--background-secondary)]">
                            İşletmeler için X
                        </Link>
                        <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-[color:var(--background-secondary)]">
                            Geliştiriciler
                        </Link>
                    </Popover.Panel>
                </Popover>
                <p className="text-[color:var(--color-base-secondary)] leading-4">@ 2024 X Corp.</p>
            </div>            
        </footer>
    )
}
