1. What problem does the context API help solve?

Complicated global state that needs to be accessed by multiple components. Avoids the need for prop drilling.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions-packets of information that describe events that have occured in the UI. An object consisting of a type and usually a payload. They are despatched to the reducer and tell the reducer how to update the state tree.

Reducers- function that takes state and returns new state, rather than mutating the original state
Store - is an object with methods on it that holds the entire state tree of the app. It is known as Single source of truth because the only way to change state inside it is to dispatch an action on it.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state kept locally(only accessible to the component.on which it resides.
Application state is for important shared state.
Top level gets pretty large so application state is better for more complicated apps.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is middleware for redux that allows us to directly access the dispatch method so we can 
make asyncronous calls. The action-creators return a function instead of an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

context API . It's relatively straight forward to set up and avoids the need for prop drilling 
but I need more practice with Redux so here goes :)