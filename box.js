var recipe = {
  key : 1,
  name: "Bolognesa sauce",
  ingredients: [
    "Onions",
    "Bell peppers",
    "Meat"
  ]
};

var recipeList = [
  recipe
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
    var ingNodes = this.props.ingredients.map(function(text) {
      return (
        <Ingredient text={text} />
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
      <div className="tab-pane active" id={this.props.recipe.id}>
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
      <li key={this.props.recipe.key}>
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
    
    return (
      <ul className="nav nav-pills">
        {tabNodes}
      </ul>
    )
  }
});


ReactDOM.render(
  <TabPills recipes={recipeList}/>,
  document.getElementById('content')
);
