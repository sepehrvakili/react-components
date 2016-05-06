class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }
  onListItemMouseOver (event) {
    this.setState({
      hover: !this.state.hover
    });
  }
  render() {
    var style = {
      'fontWeight': this.state.hover ? 'bold' : 'none'
    }

    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.name}</li>
    );
  }
  
}

var GroceryList = (props) => (
  <ul>
    {props.fruits.map( element => 
      <GroceryListItem name={element} />
    )}    
  </ul>
)

ReactDOM.render(<GroceryList fruits={['Apple', 'Banana']}/>, document.getElementById("app"));