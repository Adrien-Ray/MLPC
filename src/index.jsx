import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
import TextATrou from './components/TextATrou/TextATrou';
import Form from './components/Form/Form';
import Layout from "./components/Layout/Layout";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RealRoot() {
    const [useStateForm, updateFormValue] = React.useState({});
    return(
        <div>
            <Layout/>
            <Form updateFormValue={updateFormValue}/>
            <TextATrou useStateForm={useStateForm}/>
            <Layout/>
        </div>
    );
};

root.render(
    <React.StrictMode>
        {/* <App/> */}
        <RealRoot/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();