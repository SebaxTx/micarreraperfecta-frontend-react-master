const formatAnswers = (respuestas: boolean[]) => {
    const formattedAnswers = {
        espacial: Array(7).fill(false),
        corporal: Array(7).fill(false),
        naturalista: Array(7).fill(false),
        musical: Array(7).fill(false),
        linguistica: Array(7).fill(false),
        intrapersonal: Array(7).fill(false),
        matematica: Array(7).fill(false),
        interpersonal: Array(7).fill(false),
    };

    Object.keys(respuestas).forEach(indice => {
        const index = parseInt(indice, 10);
        const answer = respuestas[index];
        const categoryIndex = Math.floor(index / 7);
        const questionIndex = index % 7;

        switch (categoryIndex) {
            case 0:
                formattedAnswers.espacial[questionIndex] = answer;
                break;
            case 1:
                formattedAnswers.corporal[questionIndex] = answer;
                break;
            case 2:
                formattedAnswers.naturalista[questionIndex] = answer;
                break;
            case 3:
                formattedAnswers.musical[questionIndex] = answer;
                break;
            case 4:
                formattedAnswers.linguistica[questionIndex] = answer;
                break;
            case 5:
                formattedAnswers.intrapersonal[questionIndex] = answer;
                break;
            case 6:
                formattedAnswers.matematica[questionIndex] = answer;
                break;
            case 7:
                formattedAnswers.interpersonal[questionIndex] = answer;
                break;
            default:
                break;
        }
    });

    return formattedAnswers;
};

export function formatToPreferenceAnswerArray(input) {
    // Extraer los primeros 8 elementos y convertirlos en una tupla
    const answers = {
        "cognitiva": input[0],
        "social": input[1],
        "motor": input[2],
        "creativo": input[3],
        "emocional": input[4],
        "linguistico": input[5],
        "tecnologico":input[6],
        "resolutivo": input[7],
        "adaptativo": input[8],
        "eticoymoral": input[9],
    };

    // Devolver el objeto en el formato deseado
    return {
        answers
    };
}

export default formatAnswers;