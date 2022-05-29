import React from 'react';
import './newRoomFormErrors.css'

export const FormErrors = ({formErrors}) =>
    <div className="message m-0">
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (
                    <span className="message_text" key={i}>{formErrors[fieldName]}</span>
                )
            } else {
                return '';
            }
        })}
    </div>