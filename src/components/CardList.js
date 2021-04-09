import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map(each => <Card
                key={each.id}
                name={each.name}
                email={each.email}
                id={each.id} />)}
        </div>
    );
}

export default CardList;