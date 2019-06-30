import React from 'react';

const withClass = (Component, classNmae) => {
    return (props)=>{
        return (
            <section className={classNmae}>
                <Component {...props}/>
            </section>
        )
    }
}

export default withClass;