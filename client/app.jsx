class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'none',
      amountOfUsers: 0,
      gender: 'none',
      difficulty: '',
      amountOfDays: '1',
      bodyType: '',
    };
  }
  render() {
    return (
      <div>
        <div>GenerateUsers</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
window.App = App;
