import { Outlet } from 'react-router-dom'; //Outlet é o componente que renderiza o conteúdo da rota, "children" do react-router-dom
import stylesTema from 'styles/Tema.module.scss';
import styles from './PaginaPadrao.module.scss';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}