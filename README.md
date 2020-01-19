##Todo App

###ReactJs
###JSX
You can pass arrays into JSX code.
You can pass all props of object via spread operator
```javascript
<TodoListItem {...item}/>
```
####Props
Props object passes to every component
You can pass any object that you want in props
```javascript
const Comp = (props) => {
    return (<i>{ props.name }</i>);
}
```
####Components
- Functional components

For stateless components
```javascript
const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </div>
    );
};
```
- Class components

For stateful components
```javascript
class AppHeader extends Component {
    render() {
        return (
            <div className="app-header d-flex">
                <h1>Todo List</h1>
                <h2>{this.props.todo} more to do, {this.props.done} done</h2>
            </div>
        );
    }
}
```
- Classes extends React.Component
- Method render() returns react element
- props property accessible via this.props

####Event Handling
onClick, onBlur... all event props should be named in camelCase

Should pass function
```javascript
onClick={ this.onLabelClick }
```

####State
State inits in class constructor

State must be immutable after initialization

There is a method to change state: setState(newState)

You need to pass only state changes into setState
```javascript
this.setState({
    done: true
});
```

setState can work asynchronosly

You can pass function into setState to update state
```javascript
this.setState((state) => {
    return {
        important: !state.important
    }
});
```
If new state do not relies on old state it's ok to use set state directly

If nes state depends on old state, you need to pass function in setState

Do not change state!!! Use a copy

####Form
Action on form should be handled by onSubmit event

e.preventDefault();

####Controlled component
Element on a form that has value property and it's controlled by component

```javascript
<input
    type="text"
    className="form-control"
    onChange={this.onLabelChange}
    value={this.state.label}
    placeholder="What needs to be done?"
/>
```
####Reconciliation
key prop used to compare virtualDOM and realDOM
by default React set number ordered key(1,2,3)

###Webpack
Webpack searches index.js file in component directory, if directory specified in import.
It is useful to have separate component directory with component js, css and index.js file for useful imports.