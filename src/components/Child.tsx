import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cls from './child.scss';

interface State {
    name: string;
}

interface Props {
    userName: string;
}

export default class Child extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: 'Max'
        };
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        let newName: string = this.state.name === 'Max' ? 'not Max' : 'Max';
        this.setState({ name: newName });
    }

    render() {
        return (
            <div className={cls.header}>
                <h2>Hi {this.props.userName}</h2>
                <header onClick={this.changeName}>I am a js component {this.state.name} 12</header>
                <Link to="/page1">PAGE ONE ENTER</Link>
            </div>
        );
    }

}
