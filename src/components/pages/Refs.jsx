import { Link } from 'react-router';

const Refs = () => {
  return (
    <div>
      <h1>Refs</h1>

      <p>
        Refs (ссылки) позволяют получить доступ к DOM-элементам или компонентам,
        созданным React. Это полезно, когда необходимо напрямую
        взаимодействовать с элементами, например, для управления фокусом,
        текстом или анимацией.
      </p>

      <p>
        Для работы с Refs необходимо использовать хук{' '}
        <span className="red">useRef(initialValue)</span>.
      </p>
      <p>
        useRef возвращает объект с одним свойством: current: Изначально
        установленное в initialValue. Позже вы можете установить его на что-то
        другое. Если вы передадите объект ref в React как ref атрибут узла JSX,
        React установит его current свойство. При следующих рендерах useRef
        будет возвращаться тот же объект.
      </p>
      <p>
        ⭐️ Использование refs не запускает ререндер компонентов. А также
        сохраняется значение refs между рендерами.
      </p>

      <pre>
        <code>{`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}</code>
      </pre>

      <div className="pt-5">
        <Link className="next-page" to={'/book/key'}>
          &larr; Key
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/fragment'}>
          Fragment &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Refs;
