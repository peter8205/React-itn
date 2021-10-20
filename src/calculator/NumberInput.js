import React from 'react';

let NumberInput = () => {

    return (
        <label htmlFor="x">
            První číslo
            <input
                id="x"
                type="number"
                name="x"
                required value="0"
            />
        </label>
    );
};

export default NumberInput;