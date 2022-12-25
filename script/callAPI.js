        let getPlanets = (async() => {
            let obj;
            const res = await fetch('./api/v1/PLANETS.JSON')
            obj = await res.json();
            return obj
        }) 

        let getCategory = (async() => {
            let obj;
            const res = await fetch('./api/v1/CATEGORY.JSON')
            obj = await res.json();
            return obj
        }) 
        const PLANETS = await getPlanets()
        const CATEGORY = await getCategory()
        export default {PLANETS, CATEGORY}