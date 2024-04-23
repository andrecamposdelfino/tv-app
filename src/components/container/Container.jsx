import "./style.css"
import Navbar from "../navbar/Navbar"
import Input from "../pesquisa/Input"
function Container(){
    return(
        <div className="container">
            <Navbar />
            <Input />
        </div>
    )
}

export default Container