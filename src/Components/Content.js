import React from 'react';
import './App.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { stat } from 'fs';


class Content extends React.Component {
  constructor(){
   super();
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
 
  render(){
  return (
    <div className="App-content">
      <h1>Desastres Naturales</h1>
    <form>
      <label>Categoria: 
        <select>
        <option value="Tsunami">Tsunami</option>
        <option value="Tornado">Tornado</option>
        <option selected value="Terremoto">Terremoto</option>

        </select>
      </label>
        <br/>
      <label>Nombre:<input type="text"></input></label>
        <br/>
      <label>Fecha: 
        <DatePicker 
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </label>
      <br/>
      <label>Descripcion:<textarea></textarea></label>
      <div>
        <label>Magnitud:
          <br/>
          <input type="radio" value="option1" checked={this.state.selectedOption === "option1"} onChange={this.handleOptionChange}></input>0 - 2
          <br/>
          <input type="radio" value="option2" checked={this.state.selectedOption === "option2"} onChange={this.handleOptionChange}></input>2.1 - 4
          <br/>
          <input type="radio" value="option3" checked={this.state.selectedOption === "option3"} onChange={this.handleOptionChange}></input>4.1 - 6
          <br/>
          <input type="radio" value="option4" checked={this.state.selectedOption === "option4"} onChange={this.handleOptionChange}></input>6.1 - 8
        </label>
      </div>
      <input type="submit" value="Enviar" />
    </form>
     </div>
  )
}

};
export default Content;
