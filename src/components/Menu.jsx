import {Link} from 'react-router-dom'

function Menu(){
    return(
        <nav style={{background: "#333", padding:"10px"}}>
            <Link style={{color: "white", marginRight: "20px"}} to={"/"} >Home</Link>
            <Link style={{color: "white", marginRight: "20px"}} to={"/sobre"}>Sobre</Link>
            <Link style={{color: "white", marginRight: "20px"}} to={"/contatos"}>Contatos</Link>
        </nav>
    )
}
export default Menu