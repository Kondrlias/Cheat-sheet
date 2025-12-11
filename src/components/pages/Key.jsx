import { Link } from 'react-router';

const Key = () => {
  return (
    <div>
      <h1>Key</h1>
      <p>
        {' '}
        <span className="red-line">Ключи</span> помогают React определять, какие
        элементы были изменены, добавлены или удалены. Их необходимо указывать,
        чтобы React мог сопоставлять элементы массива с течением времени:
      </p>
      <pre>
        <code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li key={number}>
        {number}
    </li>
);`}</code>
      </pre>
      <p>
        {' '}
        <span className="red-line">Лучший </span>способ выбрать ключ — это
        использовать строку, которая будет явно отличать элемент списка от его
        соседей. Чаще всего ты будешь использовать ID из твоих данных как ключи.
        Если нет ID используй библиотеку uuid:
      </p>
      <pre>
        <code>{`const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);`}</code>
      </pre>
      <p>
        ⭐️ Ключи нужно определять непосредственно внутри массивов. Ключи
        оптимизируют работу с элементами массивов, уменьшают количество ненужных
        удалений и созданий элементов.
      </p>
      <p>
        ‼️ Без key механизм reconciliation сверяет компоненты попарно между
        текущим и новым VDOM. Из-за этого может происходить большое количество
        лишних перерисовок интерфейса, что замедляет работу приложения.
      </p>
      <p>
        <span className="red-line">Добавляя</span> key, мы помогаем механизму
        reconciliation тем, что с key он сверяет не попарно, а ищет компоненты с
        тем же key (тег / имя компонента при этом учитывается) — это уменьшает
        количество перерисовок интерфейса. Обновлены/добавлены будут только те
        элементы, которые были изменены/не встречались в предыдущем дереве.{' '}
      </p>
      <div className="pt-5">
        <Link className="next-page" to={'/book/events'}>
          &larr; Events
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/refs'}>
          Refs &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Key;
