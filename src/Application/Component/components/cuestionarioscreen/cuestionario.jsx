import React, { useState, useEffect } from "react";
import getIntelligenceQuestions, { sendIntlligenceAnswers } from "../../services/generals.ts";
import "./stylecuestionario.css";
import formatAnswers from "../../helpers/helpers.ts";
import { useNavigate } from "react-router";


const Cuestionario = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [error, setError] = useState(null);
  const [respuestas, setRespuestas] = useState({}); 
  const [questionsToShow, setQuestionsToShow] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const respuesta = getIntelligenceQuestions();
    respuesta.then(function (data) {
      console.log(data);
      setPreguntas(data);
    }).catch((error) => {
      setError(error.message);
    });
  }, []);

  const handleResponse = (index, response) => {
    console.log(index, response)
    setRespuestas((prevRespuestas) => ({...prevRespuestas, [index]: response }));
  };

  const handleShowMore = () => {
    setQuestionsToShow(questionsToShow + 7); // incrementamos la cantidad de preguntas que se muestran
  };

  const handleFinishSurvey = () => {
    let respFormateadas = formatAnswers(respuestas);
    let resp = sendIntlligenceAnswers(respFormateadas);
    resp.then(function (data) {
      let branchs = data.objectResponse;
      console.log("como enviodatos del cuestionario")
      console.log(branchs)
      navigate("/results", { state: { branchs } });
    });
  };

  return (
    <div className="cuestionario">
      <h1>Mi Carrera Perfecta</h1>
      <h2>Cuestionario</h2>
      {error && <p className="error-message">{error}</p>}
      {preguntas.slice(0, questionsToShow).map((pregunta, index) => (
        <div key={index} className="question-container">
          <h3>{pregunta.questions}</h3>
          <p>{pregunta.description}</p>
          <button
            className={`mr-2 px-4 py-2 border rounded ${
              respuestas[index] === true
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:text-[#F1FEEE]"
            }`}
            onClick={() => handleResponse(index, true)}
          >
            Si
          </button>
          <button
            className={`mr-2 px-4 py-2 border rounded ${
              respuestas[index] === false
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-600 hover:text-[#F1FEEE]"
            }`}
            onClick={() => handleResponse(index, false)}
          >
            No
          </button>
        </div>
      ))}
      {preguntas.length > questionsToShow && (
        <button onClick={handleShowMore} className="btn-ver-mas">
          Ver más preguntas
        </button>
      )}
      {questionsToShow >= preguntas.length && (
        <button onClick={handleFinishSurvey} className="btn-terminar-encuesta">
          Terminar encuesta
        </button>
      )}
      <h3>Total de preguntas: {preguntas.length}</h3>
    </div>
  );
};

export default Cuestionario;