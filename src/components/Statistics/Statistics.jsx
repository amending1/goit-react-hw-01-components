import PropTypes from 'prop-types';
import css from './statistics.module.css';

export function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}

      <ul className={css.statList}>
        {stats.map((data) => (
          <li
            key={data.id}
            className={css.item}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
}

Statistics.propTypes.stats = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default Statistics;
