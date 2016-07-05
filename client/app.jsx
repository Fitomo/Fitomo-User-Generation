/* global
  React
  ReactDOM
  Fetch
  $
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'fitbit',
      amountOfUsers: 1,
      gender: 'male',
      difficulty: 'light',
      amountOfDays: 1,
      bodyType: 'slim',
    };
    this.submitUserGeneration = this.submitUserGeneration.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.submitUserGeneration = this.submitUserGeneration.bind(this);
  }
  submitUserGeneration() {
    const dataObject = {
      type: this.state.type,
      amountOfUsers: this.state.amountOfUsers,
      gender: this.state.gender,
      difficulty: this.state.difficulty,
      amountOfDays: this.state.amountOfDays,
      bodyType: this.state.bodyType,
      data: '',
    };
    // send a request to the server to proccess data into the generator
    $.get(`${window.location.href}api/generateUsers`, dataObject, (data) => {
      // set the property data (which the textarea's value is set to) to the returned json.
      this.setState({ data });
    });
  }
  // handles string events which are controlled by drop downs
  handleChange(event) {
    const type = event.target.name;
    const value = event.target.value;
    if (value === 'random') {
      // random should be empty string as the function takes these as default params
      this.setState({ [type]: '' });
    } else {
      // if not random allow it to set the value
      this.setState({ [type]: value });
    }
  }
  // Numbers need to be floored because they are not controlled by drop downs.
  handleNumberChange(event) {
    console.log(event.target.name);
    const type = event.target.name;
    const value = Math.floor(event.target.value);
    this.setState({ [type]: value });
  }
  // Don't submit (and refersh!!) when the user presses enter in a text box
  disalowEnterSubmit(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className="outerContainer">
        <div className="container">
          <div className="title">Generate Mock Users</div>
          <div className="choice">
            <span>Device Type: </span>
            <select className="float-right" name="type" onChange={this.handleChange}>
              <option value="fitbit">Fitbit</option>
              <option value="jawbone">Jawbone</option>
              <option value="random">random</option>
            </select>
          </div>
          <div className="choice">
            <form name="amountOfUsers" onChange={this.handleNumberChange} onKeyPress={this.disalowEnterSubmit}>
              <span> Amount of Users: </span>
              <input className="float-right" type="number" name="amountOfUsers" min="1" />
            </form>
          </div>
          <div className="choice">
            <span>Gender: </span>
            <select className="float-right" name="gender" onChange={this.handleChange}>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="random">random</option>
            </select>
          </div>
          <div className="choice">
            <span>Workout Intesity: </span>
            <select className="float-right" name="difficulty" onChange={this.handleChange}>
              <option value="light">light</option>
              <option value="moderate">moderate</option>
              <option value="heavy">heavy</option>
              <option value="random">random</option>
            </select>
          </div>
          <div className="choice">
            <form name="amountOfDays" onChange={this.handleNumberChange} onKeyPress={this.disalowEnterSubmit}>
              <span>Number of Days: </span>
              <input className="float-right" type="number" name="amountOfDays" min="1" />
            </form>
          </div>
          <div className="choice">
            <span>Body Type: </span>
            <select className="float-right" name="bodyType" onChange={this.handleChange}>
              <option value="slim">slim</option>
              <option value="moderate">moderate</option>
              <option value="heavy">heavy</option>
              <option value="overweight">overweight</option>
              <option value="random">random</option>
            </select>
          </div>
          <button className="submit" onClick={this.submitUserGeneration}>Get Mock User(s) JSON</button>
        </div>
        <div className="data">
          <div className="tag">USER DATA:</div>
          <textarea className="text" value={this.state.data}>
          </textarea>
        </div>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
window.App = App;
