import React, {useEffect, useState} from "react";

const Dishes = () => {
    const [dish, setDish] = useState(null)
    const [food, setFood] = useState(null)

    useEffect (() => {

        fetch('http://localhost:5000/dishes',)
        .then(response => response.json())
        .then(json => {  console.log(json); setFood(json.dishes)})
        .catch(err => console.error(err));

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb229ddbc8msh9965bb3616d422ep1a5feajsn14aefeb9d896',
                'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
            }
        };
        
        fetch('https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0', options)
        .then(response => response.json())
        .then(json => {  console.log(json); setDish(json.feed)})
        .catch(err => console.error(err));

        }, []);

return (
    <div>
        <p>our dishes go here</p>
        {food && food.map((foo, i)=> {
            return (<div key={i}>
                <img src={foo?.image} alt="Dish" />
                <p>{foo.name}</p>
            </div>)
        })}
        {dish && dish.map((dis, i)=> {
            return (<div key={i}>
                <img src={dis?.display?.images[0]} alt="Dish" />
                <p>{dis.display.displayName}</p>
            </div>)
        })}
    </div>
    
)
};


export default Dishes;