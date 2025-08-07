import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/form')}>FORM</button>
    </div>
  );
};


