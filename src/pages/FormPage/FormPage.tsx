import { useState } from 'react';
import { FormBuilder } from '../../components/FormBuilder/FormBuilder';
import { FormConfig } from '../../types';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [liveConfig, setLiveConfig] = useState<FormConfig>({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const [renderedConfig, setRenderedConfig] = useState<FormConfig | null>(null);
  const navigate = useNavigate();
  const handleChange = (key: keyof FormConfig, value: number) => {
    setLiveConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleBuildClick = () => {
    setRenderedConfig({ ...liveConfig }); 
  };

  return (
    <div>
    <div>
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
      {['input', 'textarea', 'checkbox'].map(type => (
        <div key={type}>
          <label>{type}</label>
          <input
            type="number"
            min={0}
            value={liveConfig[type as keyof FormConfig]}
            onChange={e => handleChange(type as keyof FormConfig, Number(e.target.value))}
          />
        </div>
      ))}
      <button onClick={handleBuildClick}>Build</button>

      {renderedConfig && <FormBuilder config={renderedConfig} />}
    </div>
  );
};

export default FormPage;
