import React from 'react';

export const placeholder = () => {
    var placeholder = ["Write the twosum algorithm ", "Reverse a linked list ", "Delete all files in home directory ", "Create a cirular queue in golang "]
    return(
            placeholder[Math.floor(Math.random() * placeholder.length)]
    ) 
    //placeholder[Math.floor(Math.random() * placeholder.length)]
}