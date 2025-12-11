import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book/components');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Шпаргалка по React</h1>
        <p>
          Официальная документация:
          <a
            className="main-link hover:underline"
            target="_blank"
            href="https://react.dev/"
          >
            React.dev
          </a>
        </p>
        <button onClick={handleClick} className="primary text-cyan-500">
          Поехали...
        </button>
      </div>
    </>
  );
};

export default Home;
