// import React, { Children } from "react";
function customRender(reactElement,container)
{
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);
    */

    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props)
    {
        if(prop==='children')
        {
            continue;
        }
        else
        {
            domElement.setAttribute(prop,reactElement.props[prop]);
        }
    }
    container.appendChild(domElement);
}
const reactElement = {
    type: 'a',  //here we write about the type of tag we use a which means anchor tag
    props: {  //props means attributes
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google' //content
};
const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)


//2:09:00