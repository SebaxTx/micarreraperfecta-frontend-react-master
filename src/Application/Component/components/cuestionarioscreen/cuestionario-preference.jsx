import React, { useState, useEffect } from "react";
import {
  getPreferenceQuestions,
  sendPreferenceAnswers,
} from "../../services/generals.ts";
import "./stylecuestionario.css";
import { formatToPreferenceAnswerArray } from "../../helpers/helpers.ts";
import { useNavigate } from "react-router";

const CuestionarioPreference = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [error, setError] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const [questionsToShow, setQuestionsToShow] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Función para cargar preguntas desde el endpoint
    const cargarPreguntas = async () => {
      try {
        const respuesta = getPreferenceQuestions();
        respuesta.then(function (data) {
          console.log(data);
          setPreguntas(data);
        });
      } catch (error) {
        setError("Error al cargar preguntas");
      }
    };

    cargarPreguntas();
  }, []);

  const handleResponse = (index, response) => {
    console.log(index, response);
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [index]: response,
    }));
  };

  const handleShowMore = () => {
    setQuestionsToShow(questionsToShow + 10); // incrementamos la cantidad de preguntas que se muestran
  };

  const handleFinishSurvey = () => {
    let formatedAnswers = formatToPreferenceAnswerArray(respuestas);
    console.log(formatedAnswers);
    let resp = sendPreferenceAnswers(formatedAnswers);
    resp.then(function (data) {
      console.log(data);
      navigate("/test-intelligence");
    }).catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="cuestionario">
      <h1>Mi Carrera Perfecta</h1>
      <h2>Cuestionario</h2>
      {error && <p className="error-message">{error}</p>}
      {preguntas.slice(0, questionsToShow).map((pregunta, index) => (
        <div key={index} className="question-container">
          <h3>{pregunta.question}</h3>
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

export default CuestionarioPreference;
