import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Select from 'react-select';
import Result from './Result';

const CalculatorForm = (props) => {
    const [selectedOptionState, setSelectedOptionState] = useState({
        selectedOption: {
            value: '--Vyberte operaci--',
            label: '--Vyberte operaci--',
        },
    });
    const [resultState, setResultState] = useState(null);

    const options = [
        { value: 'ADD', label: 'Sčítání' },
        { value: 'SUBTRACT', label: 'Odčítání' },
        { value: 'MULTIPLY', label: 'Násobení' },
        { value: 'DIVIDE', label: 'Dělení' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        //const result = calculate(); // tuto funkci implementujeme později, kód se ale nezkompiluje, pokud tyto dva řádky do té doby nezakomentujeme
        //setResultState(result);
    };
    const handleChange = (selectedOptionState) => {
        setSelectedOptionState({ selectedOptionState });
    };
    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput
                    OnChange={props.xOnChange}
                    name="x"
                    label="První číslo:"
                    value={props.x}
                />
                <NumberInput
                    OnChange={props.yOnChange}
                    name="y"
                    label="Druhé číslo:"
                    value={props.y}
                />
                <Select
                    onChange={handleChange}
                    value={selectedOptionState.value}
                    options={options}
                />
                <input value="Spočítej" type="submit" />
            </form>
            <Result value={resultState} />
        </div>
    );
};

export default CalculatorForm;