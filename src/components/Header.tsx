import * as React from 'react';
import cls from './header.scss';
import Child from './Child';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initDataList, getDataList } from '../store/actions';

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.props.getDataList()
    }

    render() {
        console.log(this.props.totalData)
        return (
            <section className={cls.header}>
                <div>header sections</div>
                <Child userName={'MAX- the lion'} />
            </section>
        );
    }
}

const mapStateToProps = (state: any): any => {
    return {
        totalData: state.TotalDataList,
    };
};

const mapDispatchToProps = (dispatch: any): any => {
    return bindActionCreators({ initDataList, getDataList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);