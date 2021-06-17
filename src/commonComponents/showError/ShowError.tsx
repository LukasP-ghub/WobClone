import styles from './ShowError.module.scss';

const { err } = styles;

export interface ShowErrorProps {

}

const ShowError: React.FC<ShowErrorProps> = () => {
  return (<div className={err}>Something went wrong. Try reload</div>);
}

export default ShowError;