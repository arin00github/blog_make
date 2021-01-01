import Header from '../component/Header';
import Footer from '../component/Footer';
import AppNavbar from '../component/AppNavbar';
import { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import PostCardList from '../route/normal/PostCardList';
import PostWrite from '../route/normal/PostWrite';
import PostDetail from '../route/normal/PostDetail'
import PostEdit from '../route/normal/PostEdit';
import Search from '../route/normal/Search';
import CategoryResult from '../route/normal/CategoryResult';
import Profile from '../route/normal/Profile';

const MyRouter = () =>(
    <Fragment>
        <AppNavbar/>
        <Header/>
        <Container id="main-body">
            <Switch>
                <Route exact path="/" component={PostCardList}></Route>
                <Route path="/post" component={PostWrite}></Route>
                <Route path="/post/:id" component={PostDetail}></Route>
                <Route path="/post/category/:categoryName" component={CategoryResult}></Route>
                <Route path="/search/:searchTerm" component={Search}></Route>
                <Redirect from="*" to="/"/>

            </Switch>
        </Container>
        <Footer/>
    </Fragment>
)


export default MyRouter;