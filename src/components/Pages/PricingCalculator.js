import React, { useState } from 'react';
import './PageStyles/Pricing.css';

function PricingCalculator() {
  const greenEnergySolutions = [
    {value: "solar", label: "Solar Panels"},
    {value: "wind", label: "Wind Turbines"}
  ]

  const [energyUsage, setEnergyUsage] = useState();
  const [selectedSolution, setSelectedSolution] = useState('solar');
  const [solutionDetails, setSolutionDetails] = useState(greenEnergySolutions[0]);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [systemSize, setSystemSize] = useState();
  const [rotorSweptArea, setRotorSweptArea] = useState();


  // Function to handle user input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'energyUsage') {
      setEnergyUsage(value);
    }
    else if (name === 'systemSize') {
      setSystemSize(value);
    }
    else if (name === 'rotorSweptArea') {
      setRotorSweptArea(value);
    }
    else {
      setSolutionDetails({
        ...solutionDetails,
        [selectedSolution]: {
          ...solutionDetails[selectedSolution],
          [name]: value,
        },
      });
    }
  };

  
  // Function to handle solution selection change
  const handleSolutionChange = (e) => {
    setSelectedSolution(e.target.value);
  };

  const prevEnergyCost = energyUsage * 0.13;

  // Function to calculate savings and update state
  const calculateSavings = () => {
    let calculatedSavings = 0;
    let updatedEnergyUsage = 0;
    const electircityRate = 0.13;

    switch (selectedSolution) {
      case 'solar':
        updatedEnergyUsage = (systemSize * 8) * 30;
        calculatedSavings = updatedEnergyUsage * electircityRate;
        break;

      case 'wind':
        updatedEnergyUsage = rotorSweptArea * 0.13;
        
        break;

      default:
        calculateSavings = 0;
        break;
    }

    setMonthlySavings(calculatedSavings);
    setSubmitButtonClicked(true);
  };
  

  return (
    <div className='calculator-wrapper'>
      <h2>Yearly/Monthly Savings Calculator</h2>
      <div>
        <label>
          Current Energy Usage (kWh/month):
          <input
            className='energy-usage-field'
            placeholder='average 10,000 kWh/m'
            type="number"
            name="energyUsage"
            value={energyUsage}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Select Green Energy Solution:
          <select
            className='solution-dropdown'
            name="selectedSolution"
            value={selectedSolution}
            onChange={handleSolutionChange}
          >
            {greenEnergySolutions.map((solution) => (
                <option key={solution.value} value={solution.value}>
                    {solution.label}
                </option>
            ))}
          </select>
        </label>
      </div>
      {selectedSolution === 'solar' && (
        <div>
          <label>
            Solar System Size (kW):
            <input
              className='system-size-field'
              type="number"
              name="systemSize"
              placeholder='average home is 10 kW'
              value={systemSize}
              onChange={handleInputChange}
            />
          </label>
        </div>
      )}
      {selectedSolution === 'wind' && (
        <div>
          <label>
            Rotor Swept Area (m^2):
            <input
              className='rotor-swept-field'
              type="number"
              name="rotorSweptArea"
              placeholder='avg is about 113 meters^2'
              value={rotorSweptArea}
              onChange={handleInputChange}
            />
          </label>
        </div>
      )}
      <button className='submit-button' onClick={calculateSavings}>Calculate Savings</button>
      <h3>NOTE: This is not an exact price, just a rough estimation.</h3>
      {submitButtonClicked && (
        // Elements to display when the button is clicked
        <div className='result-area'>
          <div className='prev-costs'>
          <p>
            Previous Monthly Cost: {prevEnergyCost.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          </div>
          <p>
            Monthly Cost With Solar Power: {monthlySavings.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          {/* Add more result elements here... */}
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;
