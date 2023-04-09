

const Picture = () => {

    return(
        <section className="w-1/2 flex flex-col
        items-center" >
            <div className="w-2/3 flex flex-col">
            <div className="
              flex items-center justify-center " >
                <img src="/bo.jpg" alt="logo" 
                className="w-full rounded-md" />
            </div>
                <div className="inline-block bg-yellow-500 text-black 
                 p-4  -mt-6 self-end" >
                    <div className="inline-flex items-center  
                     transition-transform transform
                    hover:translate-x-2 transition duration-500 
                    ease-in-out text-base font-bold ">&#8594;
                    
                    </div>
                    <div className="text-xs font-semibold mt-1" >
                        Listen to our CEO
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Picture;