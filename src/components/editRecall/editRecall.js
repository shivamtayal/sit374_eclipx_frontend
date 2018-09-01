import React, {Component} from 'react';
import './editRecall.css'

class editRecall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: "",
      list: []
    };
  }

  componentDidMount(){
    localStorage.removeItem("manufacturer")
    localStorage.removeItem("model")
    localStorage.removeItem("year")
    localStorage.removeItem("vin")
    this.hydrateStateWithLocalStorage();
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });

    // update localStorage
    localStorage.setItem(key, value);
  }

  addItem() {
    // create a new item
    const newItem = {
      id: 1 + Math.random(),
      manufacturer: this.state.manufacturer.slice(),
      model: this.state.model.slice(),
      year: this.state.year.slice(),
      vin: this.state.vin.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
      manufacturer: "",
      model: "",
      year: "",
      vin: ""
    });
    
    // update localStorage
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("manufacturer", "");
    localStorage.setItem("model", "");
    localStorage.setItem("year", "");
    localStorage.setItem("vin", "");
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  render() {
    return (
      <div className="editRecall">
          <h1 className="editRecall-title">Add Recall</h1>
        <div
          style={{
            padding: 50,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
          Vehicle details
          <br /><br />
          <input
            type="text"
            placeholder="Manufacturer"
            value={this.state.manufacturer}
            onChange={e => this.updateInput("manufacturer", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Model"
            value={this.state.model}
            onChange={e => this.updateInput("model", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="Year"
            value={this.state.year}
            onChange={e => this.updateInput("year", e.target.value)}
          />
          <br /><br />
          <input
            type="text"
            placeholder="VIN"
            value={this.state.vin}
            onChange={e => this.updateInput("vin", e.target.value)}
          />
          <br /><br />
          <button
            onClick={() => this.addItem()}
            //disabled={!this.state.manufacturer.length}
          >
          Save
          </button>

          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>

        </div>
      </div>
    );
  }
}

export default editRecall;