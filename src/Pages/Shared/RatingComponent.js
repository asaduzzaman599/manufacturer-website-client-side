import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RatingComponent = ({ review }) => {
    return (
        <Rating
            initialRating={review?.rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
            readonly
        ></Rating>
    );
};

export default RatingComponent;