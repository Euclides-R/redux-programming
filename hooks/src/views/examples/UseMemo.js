import React from 'react';

const UseMemo = (props) => {
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
        </div>
    )
}

export default UseMeimport React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseReducer = (props) => {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}

export default UseReducer;
