import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", 
    {id: "heading", className: "headingclass"},
    "Hello from React" );

    const anotherHeading = React.createElement("h1", 
    {id: "heading", className: "headingclass"},
    "Hello from React 2.0" );
const divChild = React.createElement("div", {id: "child"}, heading, anotherHeading);

const divParent = React.createElement("div", {id: "parent"}, divChild);


const pera = React.createElement("p", {}, "This is paragraph ");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divParent);
