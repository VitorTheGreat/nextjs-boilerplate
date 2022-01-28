import style from './Main.module.scss'

const Main = ({ title = 'React Avançado' }) => {
  return (
    <main>
      <h1 className={style.test}>{title}</h1>
    </main>
  )
}

export default Main
