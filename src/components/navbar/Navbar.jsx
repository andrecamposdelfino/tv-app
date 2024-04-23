
import "./style.css"
import { HiFilm } from "react-icons/hi"
import { HiOutlineViewGrid } from "react-icons/hi"
import { MdBookmarkBorder } from "react-icons/md"
function Navbar(){
    return (
        <nav>
            <div className="navContainer">
                <a className="hifilm"><HiFilm/></a>
                <a className="hiotline"><HiOutlineViewGrid /></a>
                <a className="hifilm2"><HiFilm/></a>
                <a className="mdbook"><MdBookmarkBorder /></a>
            </div>
            <div className="navAvatar">
                <img src="https://imgs.search.brave.com/Lp4YgkhGQsjtcLH_9gqJe_wLvSk_AkKWSqhlWbfAVlc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MDk2OTc0OC9waG90/by9kZXZlbG9wZXIt/d29ya2luZy13aXRo/LW5ldy1wcm9ncmFt/LndlYnA_Yj0xJnM9/MTcwNjY3YSZ3PTAm/az0yMCZjPUdGbEJn/V1dRNnNqcVVhNEYx/dkdZX3N5Qlh4T1lO/cHNuZFZHOVhHWWNO/bnc9" 
                alt="avatar" 
                width={40}
                height={40}
                />
            </div>
        </nav>
    )
}

export default Navbar