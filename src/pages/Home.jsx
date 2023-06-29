import './Home.css'
import usersData from '../assets/user-main-data.json'
import { useLocation } from "react-router-dom"
import DataCard from '../components/DataCard'
import DailyActivityChart from '../components/DailyActivityChart'
import SessionsChart from '../components/SessionsChart'
import StrenghtChart from '../components/StrenghtChart'
import GoalChart from '../components/GoalChart'

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
                <article className='activity-chart'>
                    <DailyActivityChart />
                </article>
                <div className='square-charts'>
                    <article className='sessions-chart'>
                        <SessionsChart />
                    </article>
                    <article className='strength-chart'>
                        <StrenghtChart />
                    </article>
                    <article className='goal-chart'>
                        <GoalChart />
                    </article>
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