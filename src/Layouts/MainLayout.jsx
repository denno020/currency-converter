import PropTypes from 'prop-types';

import Header from './Header';
import Menu from './Menu';

import ConversionContext from '../context/ConversionContext';

import './MainLayout.css';

const MainLayout = (props) => {
    return (
        <div id="container">
            <Menu />
            <div id="main">
                <Header title={props.title} />
                <ConversionContext>
                    <div id="content">{props.children}</div>
                </ConversionContext>
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
};

export default MainLayout;
