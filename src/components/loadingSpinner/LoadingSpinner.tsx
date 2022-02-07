import styles from './LoadingSpinner.module.scss';

const { wrapper, spinner, dot } = styles;

export default function LoadingSpinner() {
  const arr = new Array(12).fill('dot');
  const dots = arr.map((item, index) => <div key={`${item}${index}`} className={`${dot} ${styles[`${item}${index + 1}`]}`}></div>)

  return (
    <div className={wrapper}>
      <div className={spinner}>
        {dots}
      </div>
    </div>
  )
}
