
export type branchModel = {
    id: number,
    name: string
}

export type careerModel = {
    id: number,
    name: string,
    branchId: number
}

export type preferenceAnswerArray = {
    answers: [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]
}

export type intelligenceAnswerArray = {
    "espacial": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "corporal": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "naturalista": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "musical": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "linguistica": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "intrapersonal": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "matematica": [boolean, boolean, boolean, boolean, boolean, boolean, boolean],
    "interpersonal": [boolean, boolean, boolean, boolean, boolean, boolean, boolean]
}