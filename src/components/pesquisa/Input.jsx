import "./style.css"
import { CiSearch } from "react-icons/ci"
function Input(){
    return(
        <div className="form_control">
            <div className="box_lupa">
                <CiSearch className="lupa"/>
            </div>
            <input type="text"  placeholder="Search for movies or TV series"/>
        </div>
    )
}

export default Input