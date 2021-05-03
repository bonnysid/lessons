# [BACK](https://github.com/bonnysid/lessons/tree/main)
# React

## UI Libs:
- [antd](https://ant.design/docs/react/introduce)
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [material-ui](https://material-ui.com/getting-started/installation/)
## DAL Libs:
- [axios](https://github.com/axios/axios)
- [graphql](https://graphql.org/code/)
- [apollo](https://www.apollographql.com/docs/react/get-started/)
## BLL Libs:
- [redux](https://redux.js.org/introduction/getting-started)
- [react-redux](https://react-redux.js.org/introduction/getting-started)
- [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [recompose](https://github.com/acdlite/recompose)
- [mobx](https://mobx.js.org/react-integration.html)
## Other Libs:
- [lodash](https://lodash.com/docs/4.17.15)

## Class components:
- Extends by React.Component or PureComponent
- The render method must be present
```javascript
class Comp exetends React.Component {
    render () {
        return (
            .....jsx
        )
    }
}
```
- State changes only with setState(newState)
```javascript
    onClick = (e) => {
        ...
        this.setState(prev => {count: prev.count + 1})
    }
```
- Methods are created with arrow functions (so as not to lose the this context) / if you make methods without arrow functions, you must bind this method when passing or in the constructor.
```javascript
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.someMethod = this.someMethod.bind(this)
    }
    
    someMethod() {
        ...
    }
}
```
```javascript
class Counter extends React.Component {
    someMethod = () => {
        ...
    }
}
```
```javascript
class Counter extends React.Component {
    state = {
        count: 0
    }
    
    onClick = (e) => {
        ...
        this.setState(prev => {count: prev.count + 1})
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <button onClick={this.onClick}>plus</button>
            </>
        )
    }
}
```
## Life cycles:
1) **constructor(props)**
```javascript
constructor(props) {
    super(props)
    state = {...}
}
```
2) **componentWillMount()**_:void_ - before mount
3) **render()**:_jsx_ - mount
4) **componentDidMount()**:_void_ - after mount component
5) **componentShouldUpdate(nextProps, nextState)**:_boolean_ - true - component will update, else not
6) **componentWillReceiveProps(nextProps)** - is invoked before a mounted component receives new props
6) **componentWillUpdate(nextProps, nextState)**:_void_ - before update
7) **componentDidUpdate(prevProps, prevState, snapshot)**:_void_ - after update
8) **componentWillUnmount()**:_void_ - before unmount
![lifecycle](https://miro.medium.com/max/1600/0*_UWbSFyhbBMVeCkj.jpeg)

## Func components:
- To use state and life cycles hooks are used
- return jsx
```javascript
const someComponent = (props) => {
    const [count, setCount] = useState(0)
    
    const onClick = () => setCount(prev => prev + 1);
    
    return (
        <>
            <p>{count}</p>
            <button onClick={onClick}>increase</button>
        </>
    )
}
```
## Hooks
### React:
- **useState(initState)**:_[value,setValue]_ - returns [state, setState]
```javascript
const [value, setValue] = useState('')
const onChange = e => {
    setValue(e.target.value)
}
```
- **useEffect(callback, [deps])**:_func_ - same as componentDidMount, componentDidUpdate, componentWillUnmount
```javascript
// Same as componentDidMount
useEffect(() => {
    ...
   fetchData()
}, []);
```
```javascript
// Same as componentDidUpdate
useEffect(() => {
...
fetchData(url)
}, [url]);
```

```javascript
// Same as componentWillUnmount
useEffect(() => {
    return () => {
        removeData(url);
    }
}, [url]);
```
- **useLayoutEffect(callback, [deps])** - same as useEffect but sync
```javascript
const RandomValue = () => {
    const [value, setValue] = useState(0)

    useLayoutEffect(
        () => {
            if(value === 0) setValue(Math.random() * 99 + 99)
        },
        [value]
    );
    
    
    return <div onClick={setValue(0)}>{value}</div>
}
```
- **useReducer(reducer)**
- **useRef(initValue)**:_obj.current_ - same as setState but when value change render will not invoke / get link to html element
```javascript
const Component = () => {
    const [value, setValue] = useState('')
    const renderCount = useRef(1);
    
    useEffect(() => renderCount.current++)
    
    return (
        <>
            <p>Renders: {renderCount.current}</p>
            <input value={value} onChange={e => setValue(e.target.value)}>
        </>
    )
}
```
```javascript
const Component = () => {
    const [value, setValue] = useState('')
    const input = useRef(null);
    
    return (
        <>
            <p>Renders: {renderCount.current}</p>
            <input ref={input} value={value} onChange={e => setValue(e.target.value)}>
        </>
    )
}
```
- **useContext(context)** - get to component values od context
```javascript
const {theme, toggleTheme} = useContext(ThemeContext);
```
- **useMemo(callback, [deps])**:_memoValue_ - remembers some values if _deps_ wasn't change
```javascript
 const child = useMemo(() => <Child a={a}/>,[a]);
```
```javascript
const TodoList = ({todos, query}) => {
    // Recalculated on every render BAD
    const filtered = filterTodos(todos, query)
    // Recalculate only when inputs change
    const filtered = useMemo(
        () => filterTodos(todos, query), 
        [todos, query])
}
```
- **useCallback(callback, [deps])** - remembers some func if _deps_ wasn't change
```javascript
// Function will recreate on every render
const hello = (name, age) => {name, age}
// Function will create only on first render
const helloCB = useCallback(
    (name, age) => {name, age},
    [],
);
// Function will recreate only when name change
const helloCB = useCallback(
    (name, age) => {name, age},
    [name],
);

```
### Read-router-dom:
- **useParams()** - return params in url
- **useHistory()** - return history
- **useLocation()** - return location
```typescript
import React, {useEffect} from 'react';
import Profile from "./Profile";
import {useHistory, useParams} from "react-router-dom";
import Preloader from "../common/Preloader";
import withSuspense from "../../hoc/withSuspense";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface RouteParams {
    id: string
}

const ProfileContainer: React.FC = (props) => {

    const {isFetching, userStatus, userPageInfo: userInfo} = useTypedSelector(state => state.profilePage)
    const {userId: yourId} = useTypedSelector(state => state.auth.userId)
    const {id} = useParams<RouteParams>();
    const {savePhoto, saveProfile, updateUserStatus, getUserInfo} = useActions();
    const history = useHistory();
}
```
![lifecycle](https://repository-images.githubusercontent.com/196048036/cc006f00-a420-11e9-99a6-d0bdf5f0c7bb)
## Suspense/Lazy
- Used to load some components not in the main bundle, but only when they are needed.
```javascript
const Settings = React.lazy(() => import('./modules/Settings'))
const ProfileContainer = React.lazy(() => import('./modules/Profile/ProfileContainer'))
const Music = React.lazy(() => import('./modules/Music'))

const App = () => {

    return (
        <>
            <Route path='/profile/:id?' render={withSuspense(ProfileContainer)}/>
            <Route path='/settings' render={withSuspense(Settings)}/>
        </>
    )
}
```

```javascript
const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    };
}
```
## HoC
**High order Component(Hoc)** - this is a function that takes a component and adds some properties to it
```javascript
const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    };
}
```
## React-router-dom
**React-router-dom** - libs, whose add routing to react
1) **Route** (props: exact, path, render, component)
2) **BrowserRouter** - wrapper
2) **HashRouter** - wrapper
```javascript
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Route exact={true} path={'/'} render={() => <Home />}/>
            <Route path={'/login'} render={() => <Login />}/>
            <Route path={'/profile/:id?'} render={() => <Profile />}/>
        </BrowserRouter>
    )
}
```
## React.memo / Pure Component
- **React.memo** - wrapper for func components
- **PureComponent** - class for class components, default componentShouldUpdate
- They add a property to components that is responsible for checking whether the component needs to be re-rendered or not
```javascript
const Component = React.memo(() => {})
```
```javascript
class Component extends React.PureComponent {}
```

