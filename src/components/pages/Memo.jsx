import { Link } from 'react-router';

const Memo = () => {
  return (
    <div>
      {' '}
      <h1>React.Memo</h1>
      <p>
        {' '}
        <span className="red">React.memo</span> — это функция высшего порядка
        (HOC), которая используется для оптимизации функциональных компонентов.
        Она предотвращает ненужные повторные рендеры, если пропсы компонента не
        изменились
      </p>
      <pre>
        <code>{`import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов
  return (
    <div>
      {props.text}
    </div>
  );
}); `}</code>
      </pre>
      <p>
        ⚠️ В React.memo можно использовать второй параметр — функцию сравнения.
      </p>
      <pre>
        <code>{`import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
}); `}</code>
      </pre>
      <p>
        Использование React.memo позволяет сократить количество повторных
        рендеров и улучшить производительность приложения, особенно для
        компонентов с большим количеством данных или сложными вычислениями
        внутри.
      </p>
      <p>
        ⭐️ Оптимизация с помощью memo имеет смысл только в том случае, если ваш
        компонент часто повторно рендерится с одними и теми же реквизитами, а
        его логика повторного рендеринга требует больших затрат. Если нет
        заметной задержки при повторном рендеринге вашего компонента, в memo, в
        этом случае, нет необходимости.
      </p>
      <div className="pt-5">
        <Link className="next-page" to={'/book/fragment'}>
          &larr; Fragment
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/use-effect'}>
          UseEffect &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Memo;
