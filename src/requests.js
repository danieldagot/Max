import axios from 'axios';

export default class Requests {
    food(name) {
        name = "raw+" + name
        let url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${name}&sort=n&max=1&offset=0&api_key=zVGkx37GaEO8h0hWHtLeQIVwZUWHZd0hB7p9ELEn`
        axios.get(url)
            .then(res => {
                console.log(res);
                let item = res.data
                let ndbno = item.list.item[0].ndbno
                console.log(ndbno);
                const url2 = `https://api.nal.usda.gov/ndb/reports/?ndbno=${ndbno}&type=b&format=json&api_key=zVGkx37GaEO8h0hWHtLeQIVwZUWHZd0hB7p9ELEn`
                axios.get(url2)
                    .then(res => {
                        let food = res.data
                        let mes = food.report.food.nutrients
                        let userFilter = mes.filter(u => (u.nutrient_id == 208) || (u.nutrient_id == 203) || (u.nutrient_id == 204) || (u.nutrient_id == 205))
                            .map(u => {
                                return {
                                    "name": u.name,
                                    value: u.value
                                }
                            })
                        console.log(userFilter);
                        // let userMap = users.map(u => { return { name: u.name, companyName: u.company } })
                        // console.log(userMap);
                        // res.send(userFilter)
                        return userFilter
                    })
            })
    }

}

