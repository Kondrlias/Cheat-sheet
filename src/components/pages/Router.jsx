import { Link } from 'react-router';

const Router = () => {
  return (
    <div>
      {' '}
      <h1>Router</h1>
      <p>
        Основная цель роутинга в веб-приложениях заключается в том, чтобы
        позволить пользователям перемещаться по различным частям приложения{' '}
        <b>БЕЗ ПЕРЕЗАГРУЗКИ страницы</b>. Вместо того, чтобы каждый раз
        отправлять запрос на сервер и загружать новую страницу, роутинг
        позволяет динамически обновлять только необходимые компоненты или данные
        в соответствии с выбранным маршрутом
      </p>
      <p>Роутинг в React делается с помощью React Router V6</p>
      <pre>
        <code>{`npm install react-router-dom@next
      // прописывается в файле
      import { BrowserRouter } from 'react-router-dom';`}</code>
      </pre>
      <h2>Основные компоненты</h2>
      <p>
        <b>BrowserRouter:</b> Этот компонент оборачивает ваше приложение и
        использует HTML5 историю для управления маршрутизацией
      </p>
      <pre>
        <code>{`import { BrowserRouter } from 'react-router-dom';  

function App() {  
  return (  
    <BrowserRouter>  
      <YourRoutes />  
    </BrowserRouter>  
  );  
}`}</code>
      </pre>
      <p>
        <b>Routes:</b> Этот компонент используется для определения группы
        маршрутов. Он является контейнером для компонентов Route.
      </p>
      <pre>
        <code>{`import { Routes, Route } from 'react-router-dom';  

function YourRoutes() {  
  return (  
    <Routes>  
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} />  
    </Routes>  
  );  
}`}</code>
      </pre>
      <p>
        <b>Route:</b>Этот компонент определяет отдельный маршрут. Атрибут path указывает URL, а element — компонент, который будет рендериться.
      </p>
      <pre>
        <code>{`<Route path="/contact" element={<Contact />} />`}</code>
      </pre>
      <p>
        <b>Link:</b> Этот компонент используется для навигации между маршрутами. Он заменяет теги {`<a>`} в React-приложении.
      </p>
      <pre>
        <code>{`import { Link } from 'react-router-dom';  

function Navigation() {  
  return (  
    <nav>  
      <Link to="/">Home</Link>  
      <Link to="/about">About</Link>  
      <Link to="/contact">Contact</Link>  
    </nav>  
  );  
}`}</code>
      </pre>
      <p>
        <b>Outlet:</b> Этот компонент используется для рендеринга вложенных маршрутов. Он позволяет создавать иерархическую навигацию.
      </p>
      <pre>
        <code>{`import { Outlet } from 'react-router-dom';  

function Layout() {  
  return (  
    <div>  
      <Header />  
      <Outlet />  
    </div>  
  );  
}`}</code>
      </pre>

      <h2>Основные хуки</h2>
      <p>
        <b>useParams:</b> Используется для извлечения параметров URL в компонентах маршрутов.
      </p>
      <pre>
        <code>{`import { useParams } from 'react-router-dom';  

function User() {  
  const { userId } = useParams();  

  return <h2>User ID: {userId}</h2>;  
}`}</code>
      </pre>
      <p>
        <b>useNavigate:</b> Позволяет программно изменять маршрут. Это может быть полезно для навигации после выполнения действий.
      </p>
      <pre>
        <code>{`import { useNavigate } from 'react-router-dom';  

function Login() {  
  const navigate = useNavigate();  

  const handleLogin = () => {  
    // Логика входа...  
    navigate('/dashboard'); // Перейти на страницу кабинета после входа  
  };  

  return <button onClick={handleLogin}>Login</button>;  
}`}</code>
      </pre>
      <p>
        <b>BrowserRouter:</b> Этот компонент оборачивает ваше приложение и
        использует HTML5 историю для управления маршрутизацией
      </p>
      <pre>
        <code>{`import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}`}</code>
      </pre>
      <p>
        <b>useLocation: </b> Предоставляет информацию о текущем URL, такой как pathname и состояние.
      </p>
      <pre>
        <code>{`import { useLocation } from 'react-router-dom';  

function CurrentLocation() {  
  const location = useLocation();  

  return <div>Current location: {location.pathname}</div>;  
}`}</code>
      </pre>
      <p>
        <b>useRoutes:</b> Позволяет определять маршруты в виде массива, что может быть удобно для управления маршрутами в более сложных приложениях.
      </p>
      <pre>
        <code>{`import { useRoutes } from 'react-router-dom';  

function AppRoutes() {  
  const routes = [  
    { path: '/', element: <Home /> },  
    { path: '/about', element: <About /> },  
    { path: '/contact', element: <Contact /> },  
  ];  

  return useRoutes(routes);  
}`}</code>
      </pre>
      <div className="pt-5">
        <Link className="next-page" to={'/book/use-memo'}>
          &larr; useMemo
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/forms'}>
          Forms &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Router;
