import { Link } from 'react-router';

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <p>
        <span className="red-line">В</span> React события (events) являются
        важной частью взаимодействия с пользователем. Они позволяют обрабатывать
        действия пользователя, такие как клики, наведение, отправка формы и
        другие.
      </p>
      <p>
        Вот несколько наиболее часто используемых событий в React и примеры их
        применения:
      </p>
      <h2>onClick (Клик):</h2>
      <pre>
        <code>
          {`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`}
        </code>
      </pre>
      <h2>onChange (Изменение):</h2>
      <pre>
        <code>
          {`const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
    или
    <input type="text" onChange={event => handleChange(event)} />
  );
}`}
        </code>
      </pre>
      <h2>onSubmit (Отправка формы):</h2>
      <pre>
        <code>
          {`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );`}
        </code>
      </pre>
      <p>
        <span className={'red-line'}> Существует</span> множество других
        событий, таких как <span className="red">onKeyDown</span>,{' '}
        <span className="red">onFocus</span>,{' '}
        <span className="red">onBlur</span>,{' '}
        <span className="red">onScroll</span> и т. д., которые могут быть
        использованы в зависимости от конкретных потребностей твоего приложения.
      </p>
      <p>
        ⭐️ В React, параметр <span className="text-cyan-500">event (e)</span> в
        callback-функции представляет объект события, который генерируется при
        изменении значения элемента формы или компонента.{' '}
        <span className="text-cyan-500">event.target.value</span> содержит
        текущее значение input элемента.
      </p>
      <pre>
        <code>{`const handleChange = e => {  
    console.log(e.target.value);  
};  

<input type="text" onChange={handleChange} />`}</code>
      </pre>
      <div className="pt-5">
        <Link className="next-page" to={'/book/lifecycle'}>
          &larr; LifeCycle
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/key'}>
          Key &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Events;
