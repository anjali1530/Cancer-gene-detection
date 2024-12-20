import React, { useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory';

const ChartArea = () => {
  const [geneData, setGeneData] = useState([
    { gene: 'Gene A', frequency: 10 },
    { gene: 'Gene B', frequency: 20 },
    { gene: 'Gene C', frequency: 15 },
    { gene: 'Gene D', frequency: 12 },
  ]);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    const updatedGeneData = geneData.map((gene) =>
      gene.gene === name ? { ...gene, frequency: parseInt(value) || 0 } : gene
    );
    setGeneData(updatedGeneData);
  };

  return (
    <div>
      <h2>Chart Visualization</h2>
      <div style={{ width: '500px', height: '300px' }}>
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={geneData.map((gene) => gene.gene)}
            tickFormat={geneData.map((gene) => gene.gene)}
          />
          <VictoryAxis dependentAxis />
          <VictoryBar
            data={geneData}
            x="gene"
            y="frequency"
            style={{ data: { fill: 'rgba(75, 192, 192, 0.6)' } }}
          />
        </VictoryChart>
      </div>
      <div>
        <h3>Gene Expression</h3>
        {geneData.map((gene) => (
          <div key={gene.gene}>
            <label htmlFor={gene.gene}>{gene.gene}:</label>
            <input
              type="number"
              name={gene.gene}
              value={gene.frequency}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartArea;
