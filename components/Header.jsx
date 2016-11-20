import React from 'react';
var name = function(a,b){
    return a+b;
};

export default class Header extends React.Component{

    render(){
        return (
            <h1>It is {name(1,2)}</h1>
        )
    }

}
