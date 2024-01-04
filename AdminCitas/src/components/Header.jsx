import "./styles/header.css";

function Header(){
    
    return(
        <div className="mb-20">
            <h1 className="text-5xl text-center header_title">Seguimiento de {" "} <span className="text-indigo-600">Pacientes</span></h1>
        </div>
    );
}

export default Header;