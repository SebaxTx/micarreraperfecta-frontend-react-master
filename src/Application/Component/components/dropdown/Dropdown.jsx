import { useState } from "react"
import "./dropdown.css"

export const Dropdown = ({branch, selectedBranch ,careerList, selectedCareer}) => {
    const [isDropdown, setIsDropdown] = useState(false)

    // muestra-oculta las opciones
    const handleToggle = ()=>{
        selectedBranch(branch.id_branch);
        setIsDropdown(!isDropdown);
    }
    //gurada la carrera selecionada
    const selectOptionCareer = (career)=>{
        //llama a selectedCareer cuando se selecciona una opción.
        selectedCareer(career);
        setIsDropdown(false);
    }
    return (
        <div className="dropdown">
            <div className="continer_branch">
                <button className="btn_branch" onClick={handleToggle}>
                    <span className="btn_title">{branch.name}</span>
                    <span className="btn_icon">{isDropdown ? '▲' : '▼'}</span>
                </button>
            </div>
            {/* careerList --> se recibe por parametro y se mapea para colocarlas como opcion*/
                isDropdown && careerList.length > 0 && (
                    <ul className="options">
                        {careerList.map(career => 
                            <li
                                key={career.id}
                                className="option"
                                onClick={()=>selectOptionCareer(career)}
                            >
                            {career.name}     
                            </li>
                         )}
                    </ul>
                )
            }
        </div>
    )
}
