import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('user'); 

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return children;
};

export default PrivateRoute;

