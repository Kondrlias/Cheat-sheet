import { Link } from 'react-router';

const Props = () => {
  return (
    <div>
      <h1>Props</h1>
      <article>
        <p>
          {' '}
          <span className="red-line">Пропсы</span>{' '}
          <b>(сокращение от properties)</b> - это данные, которые передаются в
          компоненты React для настройки их поведения и внешнего вида. Они
          позволяют передавать информацию из родительского компонента в дочерний
          компонент. Дочерний компонент может читать эти{' '}
          <b className="red">props</b> и использовать их, например, для вывода
          данных на экран или для изменения своего поведения
        </p>
      </article>
      <h2>Передача пропсов компонентам</h2>
      <article>
        <p>
          <span className="red-line">Пропсы</span> передаются в компоненты в
          виде атрибутов при их использовании в JSX. Например,{' '}
          <span className="red">{`<ChildComponent message="Привет, Redev!" />`}</span>{' '}
          передает пропс message со значением "Привет, Redev!" в компонент
          ChildComponent.
        </p>
        <pre>
          <code>{`// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}`}</code>
        </pre>
        <p>
          <span className="red-line">В</span> этом примере родительский
          компонент передает сообщение "Привет, Redev!" в дочерний компонент
          через props. Дочерний компонент выводит это сообщение на экран.
        </p>
      </article>
      <article>
        <h2>Доступ к пропсам внутри компонентов</h2>
        <p>
          <span className="red-line">В</span> функциональных компонентах пропсы
          доступны как параметр функции компонента. Например,{' '}
          <span className="red">{`(props) => { . . . }`}</span>.{' '}
        </p>
        <pre>
          <code>{`
// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}

// либо сразу сделать деструктуризацию, ведь props это обычный объект
const ChildComponent = ({message}) => {
  return <div>{message}</div>;
}`}</code>
        </pre>
      </article>

      <div className="pt-5">
        <Link className="next-page" to={'/book/components'}>
          &larr; Components
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/state'}>
          State &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Props;
