import { Link } from 'react-router';
const useContext = () => {
  return (
    <div>
      {' '}
      <h1>UseContext</h1>
      <article>
        <p>
          <span className="red-line">Context</span> предоставляет способ
          передачи данных через дерево компонентов{' '}
          <b>
            без явной передачи пропсов от родительских компонентов к дочерним
          </b>
          . Это особенно полезно, когда необходимо передать данные глубоко в
          иерархии компонентов, избегая просачивания пропсов через несколько
          промежуточных компонентов.
        </p>
        <p>
          useContext — это React Hook, который позволяет вам читать и
          подписываться на контекст вашего компонента.
        </p>
        <h2>Какую проблему решает context? (props drilling)</h2>
        <p>
          В React пропс-дриллинг (props drilling) - это паттерн, который
          возникает,{' '}
          <i>
            когда компоненту нужно передать данные через несколько уровней
            других компонентов
          </i>
          . Он возникает, когда компоненты передают свойства (props) другим
          компонентам, чтобы они могли использовать эти данные.
        </p>
        <p>
          Пропс-дриллинг может стать проблемой, когда данные нужно передавать
          через несколько уровней компонентов, и при этом каждый компонент
          просто перенаправляет свойства следующему компоненту без реального
          использования этих свойств.
        </p>
      </article>
      <article>
        <h2>Использование Context</h2>
        <p>
          {' '}
          <b>Шаг 1: Создание контекста</b>
        </p>
        <p>
          Сначала мы должны создать контекст с помощью функции createContext()
          из модуля react
        </p>
        <pre>
          <code>{`import React from 'react';

const MyContext = React.createContext();

export default MyContext;`}</code>
        </pre>
        <p>
          <b>Шаг 2: Предоставление значения контекста</b>
        </p>
        <p>
          Затем нужно предоставить значение контекста внутри
          компонента-провайдера. Компонент-провайдер обертывает дерево
          компонентов, которым нужен доступ к контексту.{' '}
        </p>
        <pre>
          <code>{`import React from 'react';
import MyContext from './MyContext';
import ComponentA from './ComponentA';

const App = () => {
  const value = 'Hello, Context!';

  return (
    <MyContext.Provider value={value}>
      <ComponentA />
    </MyContext.Provider>
  );
}

export default App;`}</code>
        </pre>
        <p>
          Значение value будет доступно всем дочерним компонентам, которые
          подписаны на этот контекст.
        </p>
        <p>
          <b>Шаг 3: Использование хука useContext</b>
        </p>
        <p>
          Теперь можно использовать хук useContext внутри функционального
          компонента, чтобы получить доступ к значению контекста.{' '}
        </p>
        <pre>
          <code>{`import React, { useContext } from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const value = useContext(MyContext);

  return (
    <div>
      <h2>Component A</h2>
      <p>Received value from Context: {value}</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}</code>
        </pre>
        <p>
          В этом примере импортируем <span className="red">useContext</span> из
          react и вызываем его, передавая контекст{' '}
          <span className="red">MyContext</span>. Хук useContext возвращает
          текущее значение контекста, которое мы присваиваем переменной{' '}
          <span className="red">value</span>. Теперь можно использовать значение
          value внутри компонента без необходимости использования{' '}
          <span className="red">MyContext.Consumer</span>
        </p>
        <p>
          <b>Шаг 4: Подписка на контекст (еще один вариант) </b>
        </p>
        <p>Можно использавать MyContext.Consumer</p>
        <pre>
          <code>{`import React from 'react';
import MyContext from './MyContext';
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div>
      <h2>Component A</h2>
      <MyContext.Consumer>
        {(value) => (
          <p>Received value from Context: {value}</p>
        )}
      </MyContext.Consumer>
      <ComponentB />
    </div>
  );
}

export default ComponentA;`}</code>
        </pre>
        <p>
          В этом примере используется{' '}
          <span className="red">MyContext.Consumer</span> для получения значения
          контекста и отображения его внутри компонента. Значение контекста
          будет доступно внутри функции-рендерера в виде аргумента.
        </p>
      </article>
      <p>
        {' '}
        ⭐️ Рекомендуется использовать контекст там, где он действительно
        необходим, например, для глобального состояния приложения или смены темы
        (dark || light мод).
      </p>
      <div className="pt-5">
        <Link className="next-page" to={'/book/use-effect'}>
          &larr; UseEffect
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/use-memo'}>
          UseMemo &rarr;
        </Link>
      </div>
    </div>
  );
};

export default useContext;
