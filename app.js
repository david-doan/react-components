// TODO
var GroceryList =  () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryListItem groceryItems={['Apples','Oranges']}/>
  </div> 
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
);

// var Apples = () => (
//   <li>Apples are red</li>
// );

// var Oranges = () => (
//   <li>Oranges are orange</li>
// );

ReactDOM.render(<GroceryList />, document.getElementById('app'));
