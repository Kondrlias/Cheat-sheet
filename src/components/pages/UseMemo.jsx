import { Link } from 'react-router';

const UseMemo = () => {
  return (
    <div>
      <h1>UseMemo</h1>
      <article>
        <p>
          <span className="red-line res">useMemo</span> — это React Hook,
          который позволяет кэшировать результат вычислений между повторными
          рендерингами.
        </p>
        <pre>
          <code>{`const cachedValue = useMemo(calculateValue, dependencies)`}</code>
        </pre>
        <p>
          <b>calculateValue:</b> Функция, вычисляющая значение, которое вы
          хотите кэшировать.
        </p>
        <p>
          <b>dependencies:</b>
          Список всех реактивных значений, на которые ссылается calculateValue.
          При изменении которых вычесление будет выполняться заново.
        </p>
        <pre>
          <code>{`function App({ number }) {
  const squared = useMemo(() => {
    console.log('Выполняем тяжёлый расчёт...');
    return number ** 2;
  }, [number]);

  return <p>Результат: {squared}</p>;
}`}</code>
        </pre>
        <p>
          В этом примере результат вычисления squared будет сохраняться и
          пересчитываться только при изменении number. При последующих рендерах,
          если number не изменилось, будет использован сохраненный результат.
        </p>
      </article>
      <p>
        ⭐️ Используйте, если у вас есть дорогие вычисления, результаты которых
        нужно запомнить.
      </p>
      <div className="pt-5">
        <Link className="next-page" to={'/book/use-context'}>
          &larr; UseContext
        </Link>
        <Link className="next-page" to={'/book/components'}>
          В начало
        </Link>
        <Link className="next-page" to={'/book/router'}>
          Router &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UseMemo;
