import styles from './Backdrop.module.scss';

const { backdrop } = styles;

export interface BackdropProps {

}

const Backdrop: React.FC<BackdropProps> = () => {
  return (<div className={backdrop}>

  </div>);
}

export default Backdrop;