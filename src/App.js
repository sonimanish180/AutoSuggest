import { useEffect, useState } from "react";
import "./styles.css";
const data = ["Manish", "Ram", "Jacob", "Kenny"];

export default function App() {
  let [listOfStudent, setListOfStudents] = useState([]);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    let typedData = e.target.value.toLowerCase();
    let newListOfStudents = [...data];
    let finalDisplay = newListOfStudents.filter((el) =>
      el.toLocaleLowerCase().includes("" + typedData)
    );
    setListOfStudents(finalDisplay);
  };

  useEffect(() => {
    setListOfStudents(data);
  }, []);

  return (
    <div className="App">
      <h1>Auto Suggest</h1>
      <input type="text" onChange={(e) => handleOnChange(e)} />
      <div className="suggestionConatiner">
        {listOfStudent.map((el) => {
          return <div>{el}</div>;
        })}
      </div>
    </div>
  );
}
