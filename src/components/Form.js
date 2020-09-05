import React from 'react';

export default function Form({ data, onChangeData }) {
  const { initialValue, monthlyPeriod, monthlyInterest } = data;

  const handleChangeInitialValue = (event) => {
    onChangeData(+event.target.value, null, null);
  };

  const handleChangeMonthlyInterest = (event) => {
    onChangeData(null, +event.target.value, null);
  };

  const handleChangeMonthlyPeriod = (event) => {
    onChangeData(null, null, +event.target.value);
  };

  return (
    <div className="center row">
      <div className="col input-field s6 m4 l3">
        <input
          id="inputInitialValue"
          type="number"
          value={initialValue}
          min="100"
          step="100"
          onChange={handleChangeInitialValue}
        />
        <label htmlFor="inputInitialValue" className="active">
          Initial Value:
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyInterest"
          type="number"
          value={monthlyInterest}
          min="-12"
          step="0.1"
          max="12"
          onChange={handleChangeMonthlyInterest}
        />
        <label htmlFor="inputMonthlyInterest" className="active">
          Monthly Interest:
        </label>
      </div>

      <div className="col input-field s6 m4 l3">
        <input
          id="inputMonthlyPeriod"
          type="number"
          value={monthlyPeriod}
          min="1"
          max="36"
          onChange={handleChangeMonthlyPeriod}
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          MonthlyPeriod:
        </label>
      </div>
    </div>
  );
}
