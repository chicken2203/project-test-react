import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Customers from '~/pages/Customers';
import SignIn from '~/pages/Sessions/SignIn';
import NotFound from '~/pages/Sessions/NotFound';
import ProductsAddNew from './pages/Home/ProductsAddNew';
import ProductUpdate from './pages/Home/ProductUpdate';
import TopBar from './components/ShareComponents/TopBar';
import { connect } from 'react-redux';

function App(props) {
    return (
        <Router>
            <div className="App">
                <TopBar className="top-bar"></TopBar>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/product/home" element={<Home />} />
                    <Route path="/product/addnew" element={<ProductsAddNew />} />
                    <Route path="/product/update" element={<ProductUpdate />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => ({
    user: state.login.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
