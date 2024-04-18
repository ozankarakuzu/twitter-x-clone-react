import Button from "../buttons";

export default function Premium(){
    return(
        <section className="bg-[#16181c] rounded-2xl border border-[#16181c] py-3 px-4 flex flex-col gap-2.5 text-[#e7e9ea] mb-4">
            <h6 className="text-xl font-extrabold leading-6">Premium'a Abone Ol</h6>
            <p className="leading-5 text-[15px] font-bold ">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
            <div className="self-start">
                <Button>Abone ol</Button>
            </div>            
        </section>
    )
}