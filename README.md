### Referencing given code in the document for assignment 5, I found following 2 problems
***
 Use of 'this' keyword inside class constructor without calling 'super()', as given component inherits from React.component. We can't use props without super(props).
```javascript
 constructor(props) {
   // No Super Called-----------------------
   this.state = {
     clicks: 0
   };
 }

```
****
In given code snippet, attempt to set state with 'this.click' is being made instead of 'this.state.click'
```javascript
 clickHandler() {
   this.setState({
     clicks: this.clicks + 1////wrong------- should be this.state.click
   });
 }

```