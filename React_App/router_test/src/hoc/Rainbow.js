import React from 'react'

 const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'blue', 'green', 'orange']
    const randomColour = colours[Math.floor(Math.random() * 5)]
    const textColour = randomColour + '-text'

    return(props) => {
        return(
            <div className={ textColour }>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow