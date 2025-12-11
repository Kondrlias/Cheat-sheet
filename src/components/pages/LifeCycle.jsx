import { Link } from 'react-router';

const LifeCycle = () => {
  return (
    <div>
      <h1>Жизненный цикл компонентов - LifeCycle</h1>
      <p>
        В React методы жизненного цикла компонентов делятся на классовые и
        функциональные компоненты (с использованием хуков).
      </p>
      <h2>Методы жизненного цикла в React</h2>
      <p>
        &#9312; Методы монтирования (Mounting Methods) Это этап, когда компонент
        создаётся и вставляется в DOM.{' '}
      </p>
      <p>
        {' '}
        <span className="red-line">&bull;</span> constructor() Здесь происходит
        инициализация состояния и привязка методов.
      </p>
      <pre>
        <code>{`constructor(props) {
  super(props);
  this.state = { data: null };
}`}</code>
      </pre>
      <p>
        {' '}
        <span className="red-line">&bull;</span> render(): Метод, который
        возвращает JSX-разметку. Вызывается при создании и обновлении
        компонента.
      </p>
      <p>
        {' '}
        <span className="red-line">&bull;</span> componentDidMount() -
        Вызывается один раз после того, как компонент вставлен в DOM. Отличное
        место для запросов к серверу, подписки на события или установки
        таймеров.
      </p>
      <pre>
        <code>{`componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}`}</code>
      </pre>

      <p>
        &#9313; Методы обновления (Updating Methods). Компонент может
        обновляться, когда изменяются его props или state.
      </p>
      <p>
        <span className="red-line">&bull;</span> shouldComponentUpdate():
        Позволяет контролировать, следует ли перерисовывать компонент. Можно
        использовать для оптимизации производительности.
      </p>
      <p>
        <span className="red-line">&bull;</span> render(): Вызывается снова для
        обновления отображения.
      </p>
      <p>
        <span className="red-line">&bull;</span> componentDidUpdate():
        Вызывается сразу после обновления компонента. Здесь можно, например,
        реагировать на изменение данных, выполнять дополнительные запросы или
        работать с изменённым DOM.
      </p>
      <pre>
        <code>{`componentDidUpdate(prevProps, prevState) {
  if (prevState.data !== this.state.data) {
    console.log('Данные обновились!');
  }
}`}</code>
      </pre>
      <p>
        &#9314; Методы размонтирования (Unmounting Methods):Это момент, когда
        компонент удаляется из DOM.
      </p>
      <p>
        <span className="red-line">&bull;</span> componentWillUnmount(): Здесь
        происходит очистка: отписка от событий, остановка таймеров, отмена
        сетевых запросов. Это помогает избежать утечек памяти.
      </p>
      <pre>
        <code>{`componentWillUnmount() {
  // Отписываемся от событий, очищаем таймеры и т.д.
  console.log('Компонент удалён');
}`}</code>
      </pre>
      <p>
        &#9315; Методы обработки ошибок (Error Handling Methods). Если во время
        работы компонента происходит ошибка, можно её перехватить и обработать.
      </p>
      <p>
        <span className="red-line">&bull;</span> componentDidCatch(error, info):
        Позволяет записать информацию об ошибке или отправить её на сервер для
        дальнейшего анализа.
      </p>
      <h2>Жизненный цикл функциональных компонентов:</h2>
      <p>
        ⭐️ <span className="red">useEffect</span> - это хук в React,
        предназначенный для работы с методами жизненного цикла в функциональных
        компонентах.
      </p>
      <p>
        <b>Первый параметр:</b> Функция, которая должна выполниться при
        монтировании компонента и при каждом обновлении.
      </p>
      <p>
        <b>Второй параметр:</b> Массив зависимостей определяет, на что конкретно
        должен реагировать useEffect. Если массив пуст, useEffect выполняется
        только при монтировании и размонтировании. Если в массиве указаны
        определенные значения, то useEffect будет выполняться только тогда,
        когда эти значения изменяются.
      </p>

      <pre>
        <code>{`// Отработает как componentDidMount
useEffect(() => { console.log("componentDidMount") }, []) 

// Отработает как componentDidUpdate 
useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

// Отработает как componentDidMount и componentDidUpdate
useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

 // Отработает как componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
}, [])`}</code>
      </pre>

      <h2>Жизненный цикл классовых компонентов</h2>
      <p>
        В классовых компонентах жизненный цикл компонента можно управлять с
        помощью различных методов: constructor(props), render(),
        componentDidMount(), componentDidUpdate(prevProps, prevState),
        componentWillUnmount().
      </p>

      <p>
        <span className="red-line">⭐️</span> В классовых компонентах жизненный
        цикл происходит с помощью <span className="red">различных методов</span>
        , в функциональных компонентах через хук{' '}
        <span className="red">useEffect</span>, что делает код более компактным
        и понятным.
      </p>

      <div className="pt-5">
        <Link className="next-page" to={'/book/state'}>
          &larr; State
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/events'}>
          Events &rarr;
        </Link>
      </div>
    </div>
  );
};

export default LifeCycle;
