export default class strengthLogic {

     wiks(sex, white, total) {

        let get_wilcs_standart = function (resolt) {
            if (resolt < 120) {
                return "Un-trained"
            }
            else if (resolt > 120 && resolt <= 199) {
                return "Novice"
            }
            else if (resolt > 199 && resolt <= 237) {
                return "Intermediate"
            }
            else if (resolt > 237 && resolt <= 326) {
                return "Advanced"
            }
            else if (resolt > 413) {
                return "Elite"
            }

        }
        let sets = {
            "maile": {
                a: -216.0475144,
                b: 16.2606339,
                c: -0.002388645,
                d: -0.00113732,
                e: 7.01863E-06,
                f: -1.291E-08
            },
            female: {

                a: 594.31747775582,
                b: 27.23842536447,
                c: 0.82112226871,
                d: - 0.00930733913,
                e: 4.731582E-05,
                f: -9.054E-08,

            }
        }
        let graound = sets[sex].a + (sets[sex].b * white) + (sets[sex].c * Math.pow(white, 2)) + (sets[sex].d * Math.pow(white, 3)) + (sets[sex].e * Math.pow(white, 4)) + (sets[sex].f * Math.pow(white, 5))
        let score = total * (500 / graound)
        return {
            score: score,
            leval: get_wilcs_standart(score)

        }
    }


     oneRepMax(white, reps) {
        let formilas = {
            McGlothin: (100 * white) / (101.3 - 2.67123 * reps),
            Lombardi: white * Math.pow(reps, 0.1),
            // Mayhew  : (100*white) / (52.2 + Math.pow(41.9*Math.E, -0.055*reps)) , 
            OConner: white * (1 + reps / 40),
            Epley: white * (1 + reps / 30),
            Brzycki: white * (36 / (37 - reps)),
            // Wathan : (100*white) / (52.2 + Math.pow(53.8*Math.E, -0.075*reps))
        }
        const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length
        formilas["Avg"] = arrAvg(Object.values(formilas))
        return formilas
    }



}

