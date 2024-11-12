import "./testResult.css";
import { Dropdown } from "../dropdown/Dropdown";
import { useState, useEffect } from "react";
import { getCareersByBranches } from "../../services/generals.ts";
import { useLocation } from "react-router";


const TestResult = () => {

  const location = useLocation();

  const [selectedCareer, setSelectedCareer] = useState({});
  const [selectedBranch, setSelectedBranch] = useState(0);
  const [branches, setDataBranches] = useState([]);
  const [careers, setDataCareer] = useState([]);
  console.log("selectedCarrer")
  console.log(selectedCareer)

    useEffect(() => {
        if (location.state && location.state.branchs) {
          const responseBranches = location.state.branchs;
          console.log("Objeto traído:", responseBranches);
          setDataBranches(responseBranches);
        }
      }, [location.state]);

    //Obtiene las carreras segun id de rama seleccionada
    useEffect(() => {
        if (selectedBranch) {
            const fetchData = async () => {
                const careers = await getCareersByBranches(selectedBranch);
                setDataCareer(careers);
            };
            fetchData();
        }
    }, [selectedBranch]);

    //Obtengo id branch
    const handleSelectedBranch = (branch)=>{
        setSelectedBranch(branch)
    }


  //Almacena datos de carrera seleccionada
  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
  };
  console.log(selectedCareer);

  return (
    <div className="container_result">
      <h1 className="result_title">RESULTADOS</h1>
      {/* map --> genera por cada rama un dropdown. CarrerList --> Enviar lista de carreras para que se muestre como opcion*/}
      {branches.map((branch) => (
        <Dropdown
          key={branch.id_branch}
          branch={branch}
          selectedBranch={handleSelectedBranch}
          careerList={careers.filter((carrer) => carrer.id_branch === branch.id_branch)}
          selectedCareer={handleSelectCareer}
        ></Dropdown>
      ))}
      {
        /*Muestra mensaje de carrera seleccionada*/
        selectedCareer && (
          <div className="selectedCareer">
            Seleccionaste: {selectedCareer.name}
          </div>
        )
      }
    </div>
  );
};

export default TestResult;
