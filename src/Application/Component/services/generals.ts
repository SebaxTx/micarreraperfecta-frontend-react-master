import { branchModel, careerModel, intelligenceAnswerArray, preferenceAnswerArray } from "../interfaces/generals";


export default function getIntelligenceQuestions() {
    return new Promise(async (resolve) => {

        try {
            await fetch("http://localhost:8080/questions").then(async (data) => {
                if (data) {
                    const res = await data.json();
                    console.log(res.objectResponse);
                    resolve(res.objectResponse)
                }
            }).catch((error) => {
                console.log(error);
            });
        } catch (e) {
            throw new Error(e);
        }
    })

}

export function getPreferenceQuestions() {
    return new Promise(async (resolve) => {

        try {
            await fetch("http://localhost:8080/preferencegroup").then(async (data) => {
                if (data) {
                    const res = await data.json();
                    console.log(res.objectResponse);
                    resolve(res.objectResponse)
                }
            }).catch((error) => {
                console.log(error);
            });
        } catch (e) {
            throw new Error(e);
        }
    })

}

export async function sendIntlligenceAnswers(respuestas: intelligenceAnswerArray) {
    return new Promise((resolve) => {
        try {
            fetch('http://localhost:8080/questionnaire/answer/intelligence', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(respuestas)
            }).then(
                async (datos: any) => {
                    if (datos) {
                        const res = await datos.json();
                        console.log(res);
                        resolve(res);
                    }
                }
            ).catch((error) => {
                console.log(error);
            })
        } catch (e: any) {
            console.log(e)
        }
    })
}

export async function sendPreferenceAnswers(respuestas: preferenceAnswerArray) {
    return new Promise((resolve) => {
        try {
            fetch('http://localhost:8080/questionnaire/answer/preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(respuestas),
            }).then( async (datos: any) => {
                    if (datos) {
                        const res = await datos.json()
                        console.log(res);
                        resolve(res);
                    }
                }
            ).catch((error) => {
                console.log(error);
            })
        } catch (e: any) {
            console.log(e)
        }
    })
}

export async function getBranchCareers(branchId: number) {
    return new Promise((resolve) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            fetch(`http//:localhost:8080/questionnaire/answer/prference/${branchId}`, options).then(
                (datos: any) => {
                    if (datos) {
                        resolve(datos);
                    }
                }
            ).catch((error) => {
                console.log(error);
            })
        } catch (e: any) {
            console.log(e)
        }
    })
}

export async function getBranches(): Promise<object> {
    return new Promise((resolve) => {
        try {
            fetch(`http://localhost:8080/branch`)
                .then(async (data) => {
                    if (data) {
                        console.log(data);
                        let auxArr: branchModel[] = [];
                        const res = await data.json();
                        res.objectResponse.forEach(element => {
                            let aux: branchModel = { id: element[2], name: element[0] }
                            auxArr.push(aux);
                        });
                        resolve(auxArr);
                    }
                })
        } catch (e) {
            console.log(e)
        }
    })
}

export async function getCareersByBranches(id_branch): Promise<object> {
    return new Promise((resolve) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(id_branch)                
            }
            fetch(`http://localhost:8080/questionnaire/branch/career`,options)
                .then(async (data) => {
                    if (data) {
                        const res = await data.json();
                        console.log(res.objectResponse);
                        resolve(res.objectResponse);
                    }
                })
        } catch (e) {
            throw new Error(e);
        }
    })

}