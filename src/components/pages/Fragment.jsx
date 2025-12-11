import { Link } from 'react-router';

const Fragment = () => {
  return (
    <div>
      {' '}
      <h1>Fragment</h1>
      <p>
        <span className="red-line">Fragment</span> позволяет группировать
        несколько элементов без добавления лишнего узла в DOM. Это помогает
        сохранить структуру документа и избежать ненужных div-ов.
      </p>
      <p>
        Используем <span className="text-red-500">React.Fragment</span> или
        выполняем импорт, чтобы использовать Fragment:
      </p>
      <pre>
        <code>{`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}</code>
      </pre>
      <p>
        Существует сокращенная запись (импортировать не нужно) - недостаток
        сокращенной записи: нельзя использовать атрибуты, например className или
        key: <span className="text-red-500">{` <> </>  `}</span>
      </p>
      <pre>
        <code>{`import React, { Fragment } from 'react';

const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>
`}</code>
      </pre>
      <div className="pt-5">
        <Link className="next-page" to={'/book/refs'}>
          &larr; Refs
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/memo'}>
          Memo &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Fragment;
