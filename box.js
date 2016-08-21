var recipe = {
  key : 1,
  name: "Bolognesa sauce",
  ingredients: [
    "Onions",
    "Bell peppers",
    "Meat"
  ]
};

var recipe2 = {
  key : 2,
  name : "Test stuff",
  ingredients: [
    "I 1",
    "I 2"
  ]
};

var recipeList = [
  recipe,
  recipe2
];


var Ingredient = React.createClass({
  render: function() {
    return (
      <li className="list-group-item">
        {this.props.text}
      </li>
    );
  }
});

var IngredientList = React.createClass({
  render: function() {
    var ingNodes = this.props.ingredients.map(function(text, key) {
      return (
        <Ingredient text={text} key={key}/>
      )
    });
    
    return (
      <ul className="step-group list-group">
        {ingNodes}
      </ul>
    )
  }
});

var RecipePanel = React.createClass({
  render: function() {
    return (
      //Set the first element as active
      <div className={this.props.recipe.key === 1 ? "tab-pane active" : "tab-pane"} id={this.props.recipe.key}>
        <IngredientList ingredients={this.props.recipe.ingredients}/>
        <div>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
});

var RecipeTab = React.createClass({
  render: function() {
    return (
      <li className={this.props.recipe.key === 1 ? "active" : "" } key= {this.props.recipe.key}>
        <a href={"#" + this.props.recipe.key} data-toggle="tab">
          {this.props.recipe.name}
        </a>
      </li>
    );
  }
});

var TabPills = React.createClass({
  render: function() {
    var tabNodes = this.props.recipes.map(function(recipe) {
      return (
        <RecipeTab key={recipe.key} recipe={recipe} />
      );
    });
      
    var recipePanels = this.props.recipes.map(function(recipe) {
      return (
        <RecipePanel recipe={recipe} key={recipe.key} />
      ) 
    });
    
    return (
      <div>
        <ul className="nav nav-pills">
          {tabNodes}
        </ul>
        <div className="tab-content">
          {recipePanels}
        </div>
      </div>
    )
  }
});

class EditButton extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick()
}


ReactDOM.render(
  <TabPills recipes={recipeList}/>,
  document.getElementById('content')
);
