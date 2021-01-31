import React, { useState } from 'react';


function QuestionCard(props) {


    return (
        <div className="QuestionCard">
            <div>{props.question}</div>
        </div>
    );
}

export default QuestionCard;
