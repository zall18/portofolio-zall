export default function Navbar() {
    return (
        // <div className="bg-[var(--card-blue)] w-auto h-[3rem] m-3 rounded-full pb-2 pr-2">
        <div className="bg-[var(--foreground)] w-auto h-[3rem] m-3 rounded-full shadow-[6px_6px_0px_0px_var(--card-pink)] hover:shadow-[0px_0px_0px_0px_var(--card-pink)] transition-all flex items-center justify-between">
            <div className="ml-4 font-semibold text-lg ">
                <p className="cursor-pointer">Muhamad Rizal Fikri</p>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="bg-[var(--card-blue)] shadow-[0px_4px_0px_0px_var(--card-pink)] rounded-full px-3 hover:bg-[var(--card-pink)] hover:shadow-[0px_4px_0px_0px_var(--card-blue)] hover:text-white transition-all"><a href="">About Me!</a></li>
                    <li className="bg-[var(--card-blue)] shadow-[0px_4px_0px_0px_var(--card-pink)] rounded-full px-3 hover:bg-[var(--card-pink)] hover:shadow-[0px_4px_0px_0px_var(--card-blue)] hover:text-white transition-all"><a href="">My Skills</a></li>
                    <li className="bg-[var(--card-blue)] shadow-[0px_4px_0px_0px_var(--card-pink)] rounded-full px-3 hover:bg-[var(--card-pink)] hover:shadow-[0px_4px_0px_0px_var(--card-blue)] hover:text-white transition-all"><a href="">Exprience</a></li>
                    <li className="bg-[var(--card-blue)] shadow-[0px_4px_0px_0px_var(--card-pink)] rounded-full px-3 hover:bg-[var(--card-pink)] hover:shadow-[0px_4px_0px_0px_var(--card-blue)] hover:text-white transition-all"><a href="">My Project</a></li>
                    <li className="bg-[var(--card-blue)] shadow-[0px_4px_0px_0px_var(--card-pink)] rounded-full px-3 hover:bg-[var(--card-pink)] hover:shadow-[0px_4px_0px_0px_var(--card-blue)] hover:text-white transition-all"><a href="">Contact Me!</a></li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-3 mx-2">
                    <li className=" w-8 h-8 p-2 bg-[var(--card-pink)] shadow-[0px_4px_0px_0px_var(--card-blue)] rounded-full hover:bg-[var(--card-blue)] hover:shadow-[0px_4px_0px_0px_var(--card-pink)] hover:text-white transition-all"><a href=""><img src="github-icon.png" alt="" /></a></li>
                    <li className=" w-8 h-8 p-2 bg-[var(--card-pink)] shadow-[0px_4px_0px_0px_var(--card-blue)] rounded-full hover:bg-[var(--card-blue)] hover:shadow-[0px_4px_0px_0px_var(--card-pink)] hover:text-white transition-all"><a href=""><img src="linkedin-icon.webp" alt="" /></a></li>
                    <li className=" w-8 h-8 p-2 bg-[var(--card-pink)] shadow-[0px_4px_0px_0px_var(--card-blue)] rounded-full hover:bg-[var(--card-blue)] hover:shadow-[0px_4px_0px_0px_var(--card-pink)] hover:text-white transition-all"><a href=""><img src="ig-icon.jpg" alt="" /></a></li>
                    <li className=" w-8 h-8 p-2 bg-[var(--card-pink)] shadow-[0px_4px_0px_0px_var(--card-blue)] rounded-full hover:bg-[var(--card-blue)] hover:shadow-[0px_4px_0px_0px_var(--card-pink)] hover:text-white transition-all"><a href=""><img src="gmail-icon.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
        // </div>
    )
}