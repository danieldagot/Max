
export default class Logic {

    get_bmi(height, weight) {
        let Mhight = height / 100
        return Math.round((weight / (Mhight * Mhight)))
    }
    get_bmr(height, weight, age, sex) {

        if (sex == "male") {
            const bmr = (weight * 10) + (height * 6.25) - (5 * age) + 5

            return bmr
        }
        if (sex == "female") {
            const bmr = (weight * 10) + (height * 6.25) - (5 * age) - 161
            return bmr
        }
    }

    get_cal(bmr, activity) {

        if (activity == 1) {
            const cal = bmr * 1.2
            return Math.round(cal)
        }
        if (activity == 2) {
            const cal = bmr * 1.375
            return Math.round(cal)
        }
        if (activity == 3) {
            const cal = bmr * 1.55
            return Math.round(cal)
        }
        if (activity == 4) {
            const cal = bmr * 1.1725
            return Math.round(cal)
        }
        if (activity == 5) {
            const cal = bmr * 1.9
            return Math.round(cal)
        }
    }

    get_bmi_standart(bmi) {
        if (bmi < 16) {
            return "Severely underweight"
        }
        else if (bmi > 16 && bmi <= 19) {
            return "Underweight"
        }
        else if (bmi > 19 && bmi <= 24) {
            return "Normal"
        }
        else if (bmi > 24 && bmi <= 30) {
            return "Overweight"
        }
        else if (bmi > 30) {
            return "Obese"
        }

    }

    get_recomandet_dcal(weight, height, bmi, time = 24, cal) {
        let Mhight = height / 100
        const target = Math.abs(22 - bmi) - (Mhight * Mhight)
        console.log(target);

        let gcal = 7700 * target
        console.log(gcal);
        let tcg = gcal / time

        if (22 - bmi >= 0) {
            let r = cal + (tcg / 7)
            console.log(r);

            return Math.round(r)
        }
        else {
            let r = cal - (tcg / 7)
            console.log(r);
            return Math.round(r)
        }

    }
    get_whater(weight, activity) {
        return (weight / 30) + (0.125 * activity)
    }


    get_cal_spit(carbs, protin, fat, caloris) {

        let cal4C = carbs / 100
        let cak4P = protin / 100
        let cal9 = fat / 100
        console.log(caloris);

        let split = {
            carbs:  Math.round( (cal4C * caloris) / 4 ) ,
            protin: Math.round( (cak4P * caloris) / 4 ) ,
            fat:  Math.round( (cal9 * caloris) / 9 )

        }
        console.log(split);

        return split

    }

    get_split(name, cal, carbs = 40, proitin = 30 , fat = 30 ) {


        let nutrition = {
            regular: this.get_cal_spit(40, 30, 30, cal),
            kito: this.get_cal_spit(5, 45, 50, cal),
            low_fat: this.get_cal_spit(60, 30, 10, cal),
            low_protin: this.get_cal_spit(60, 10, 30, cal),
        }
        this.castom_sptit_test = {
            carbs: carbs,
            proitin: proitin,
            fat: fat
        }

        if (name == "castom") {
        this.castom_sptit = {
            carbs: carbs,
            proitin: proitin,
            fat: fat
        }
            nutrition.castom = this.get_cal_spit(this.castom_sptit.carbs, this.castom_sptit.proitin, this.castom_sptit.fat, cal)

        }

        return nutrition[name]
    }





    constructor(height = 0, weight = 0, age = 0, sex = "male", activity = 1, split = "regular") {
        this.height = height
        this.weight = weight
        this.age = age
        this.sex = sex
        this.activity = activity
        this.split = split
        this.bmi = this.get_bmi(height, weight)
        this.bmr = this.get_bmr(height, weight, age, sex)
        this.cal = this.get_cal(this.bmr, activity)
        this.condition = this.get_bmi_standart(this.bmi)
        this.recomandetCal = this.get_recomandet_dcal(weight, height, this.bmi, 24, this.cal)
        this.water = this.get_whater(weight, activity)
        // this.split = this.get_cal_spit("regular", this.recomandetCal)
        this.diet_spit = this.get_split(split, this.recomandetCal)
    }
}

