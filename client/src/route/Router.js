import Header from '../component/Header';
import Footer from '../component/Footer';
import AppNavbar from '../component/AppNavbar';
import { Fragment } from 'react';


const MyRouter = () =>(
    <Fragment>
        <AppNavbar/>
        <Header/>
        <div>hello Body</div>
        <Footer/>
    </Fragment>
)


export default MyRouter;