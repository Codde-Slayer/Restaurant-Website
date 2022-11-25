import axios from "axios"
import { useState } from "react";
import File from "./File";


const AddDish = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [dish, setDish] = useState({
    image: "",
    name: "",
    type: "",
    ingredients: "",
    origin:"",
    description:"",
    recipe: "",
    available: true,
    
  });

  const imagesHandler = (images) => {
    setDish({ ...dish, image: images[0]?.url });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setDish({
      ...dish,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/create_dish`, dish, {})
      .then((response) => {
        setSuccess(response.data.message);
        setDish({
          image: "",
          name: "",
          type: "",
          ingredients: "",
          origin:"",
          description:"",
          recipe: "",
          available: true,
      
        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="addDishtContainer">
      {success && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          {success}
        </p>
      )}
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      )}

      <File
        imagesHandler={(images) => imagesHandler(images)}
        reset={false}
      />
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="addDishContainerForm"
      >
        <input
          name="name"
          type="text"
          value={dish.name}
          placeholder="Enter dish name"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="type"
          type="text"
          value={dish.type}
          placeholder="Enter dish type"
          onChange={(event) => handleChange(event)}
        />
        <br />
        
        <br />
        <input
          name="ingredients"
          value={dish.ingredients}
          placeholder="Enter dish ingredients"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="origin"
          value={dish.origin}
          placeholder="Enter  dish origin"
          onChange={(event) => handleChange(event)}
        />
        <br />
        <input
          name="description"
          value={dish.description}
          placeholder="Enter dish description"
          onChange={(event) => handleChange(event)}
        />
        <input
          name="recipe"
          value={dish.recipe}
          placeholder="Enter dish recipe"
          onChange={(event) => handleChange(event)}
        />
        <select
          name="available"
          onChange={(event) => handleChange(event)}
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <br />
        <button type="submit">Add Dish</button>
      </form>
    </div>
  );
};
export default AddDish;
