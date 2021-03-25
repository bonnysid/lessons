# React / Redux
## Class components:
- Наследуется от React.Component или PureComponent
- Обязательно должен присутствовать метод render.
```javascript
class Comp exetends React.Component {
    render () {
        return (
            .....jsx
        )
    }
}
```
- State изменяется только припомощи setState(newState)
```javascript
    onClick = (e) => {
        ...
        this.setState(prev => {count: prev.count + 1})
    }
```
- Методы создаются при помощи стрелочных функций (для того чтобы не потерять контекст this) / если делать методы без стрелочных функций то при передаче или в кострукторе нужно забайндить этот метод.
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
## React-redux
## Redux
## Thunk
## React-router-dom
## React-form
## React-test renderer
## HoC
## Selectors
## API
## Reducers
## Dispatch
## React.memo / Pure Component
