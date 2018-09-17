import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import Header from './components/Header';

const history = createHistory();



export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const getExclamationMarks: (numChars: number) => void =
    (numChars: number) => Array(numChars + 1).join('!');

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

class PageOne extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            num: 2
        }
    }
    add() {
        let oriNum = this.state.num
        oriNum++
        this.setState({num: oriNum})
    }
    decrement() {
        let oriNum = this.state.num
        if (oriNum < 2) oriNum = 1
        else oriNum--
        this.setState({num: oriNum})
    }
    render() {
        return <Hello name="test" enthusiasmLevel={this.state.num}
                    onIncrement={this.add.bind(this)}
                    onDecrement={this.decrement.bind(this)}/>
    }
}



class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/main" />} />
                    <Route path="/main" component={Header} />
                    <Route path="/page1" component={PageOne} />
                </Switch>
            </Router>
        );
    }
}

export default App;