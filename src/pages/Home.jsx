import './Home.css'
import usersData from '../assets/user-main-data.json'
import { useLocation } from "react-router-dom"
import DataCard from '../components/DataCard'

function Home() {
    const {pathname} = useLocation()
    const userId = pathname.split('/')[1]
    const user = usersData.find(user => user.data.id == userId)

  return (
    <section className='home'>
        <h2>Bonjour <span>{user.data.userInfos.firstName}</span></h2>
        <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
        <div className="home-card-container">
            <div className="home-activity-container">
                <article></article>
                <div>
                    <article></article>
                    <article></article>
                    <article></article>
                </div>
            </div>
            <div className="home-data-container">
                {Object.keys(user.data.keyData).map((key, index) => (
                    <DataCard key={index} type={key} keyData={user.data.keyData[key]} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Home