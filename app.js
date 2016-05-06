// TODO
var GroceryList =  () => (
  <div>
    <h1>Grocery List</h1>
    {props.groceryItems.map(groceryitem =>
      <GroceryListItem groceryItem = {groceryItem} />
    )}
  </div> 
);

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }
}



// var Apples = () => (
//   <li>Apples are red</li>
// );

// var Oranges = () => (
//   <li>Oranges are orange</li>
// );

ReactDOM.render(<GroceryList />, document.getElementById('app'));
