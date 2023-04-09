

const Header = () => {

    return(
        <header className="flex justify-around
        items-center h-16 flex-shrink-0 font-semibold
        " >
            <button className="hover:border-b-2 
            hover:border-b-yellow-500 pb-1 text-xs
            font-bold hover:bg-slate-700 px-2 " >
                LOGO
            </button>
            <div className="flex justify-around text-sm w-1/2" >
                <button className="hover:bg-slate-700 px-2 
                hover:border-b-2 text-xs
                hover:border-b-yellow-500 pb-1" >Home</button>
                <button className="hover:bg-slate-700 px-2 
                hover:border-b-2 text-xs
                hover:border-b-yellow-500 pb-1" >Portfolio</button>
                <button className="hover:bg-slate-700 px-2 
                hover:border-b-2 text-xs
                hover:border-b-yellow-500 pb-1" >Services</button>
            </div>
            <button className="px-4 py-2
            bg-yellow-500 text-black
            rounded-2xl text-xs" >Contact</button>
        </header>
    )
}
export default Header;