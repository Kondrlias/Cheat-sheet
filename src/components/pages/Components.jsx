import { Link } from 'react-router';

const Components = () => {
  return (
    <div>
      <h1>Components</h1>
      <article>
        <p>
          <span className="red-line">Приложения</span> React состоят из
          компонентов. <span className="text-red-500">Компонент</span> — это
          часть пользовательского интерфейса, которая имеет свою собственную
          логику и внешний вид. Компонент может быть маленьким, как кнопка, или
          большим, как целая страница.
        </p>
        <p>
          <span className="red-line">Компоненты</span> React — это функции
          JavaScript, которые возвращают разметку{' '}
          <span title="расширение языка JavaScript">JSX</span>:
        </p>
        <pre>
          <code>
            {`function Welcome() {
  return <h1> Привет, {props.name} </h1>;
}`}
          </code>
        </pre>
        <p>Их можно складывать вместе и многократно переиспользовать.</p>
      </article>
      <article>
        <h2>Функциональные и классовые компоненты</h2>
        <p>
          <span className="red-line">Компоненты </span> бывают:
          <ul className="red-line ">
            <li className="red-line"> &#9312; Функциональный</li>
            <li className="red-line "> &#9313; Классовый</li>
          </ul>
          <span className="red-line">Проще</span> всего объявить React-компонент
          как функцию (пример выше), или же использовать классовый компонент:
        </p>
        <pre className="code">
          <code>
            {` class Welcome extends React.Component {
    render() {
        return <h1> Привет, {this.props.name} </h1>;
    }
}`}
          </code>
        </pre>
        <p>С точки зрения React, эти два компонента эквивалентны.</p>
      </article>
      <div className="pt-5">
        <Link className="next-page" to={'/book/props'}>
          Props &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Components;
