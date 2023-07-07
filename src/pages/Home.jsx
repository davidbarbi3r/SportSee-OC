import './Home.css'
import { useLocation } from "react-router-dom"
import DataCard from '../components/DataCard'
import DailyActivityChart from '../components/DailyActivityChart'
import SessionsChart from '../components/SessionsChart'
import StrenghtChart from '../components/StrenghtChart'
import GoalChart from '../components/GoalChart'
import useUserService from '../service/useUserService'

function Home() {
    const {pathname} = useLocation()
    const userId = pathname.split('/')[1]
    const USEMOCKED = false
    const {data, error, loading} = useUserService('user', userId, USEMOCKED)
    const {data: activityData, error: activityError, loading: activityLoading} = useUserService('activity', userId, USEMOCKED)
    const {data: sessionData, error: sessionError, loading: sessionLoading} = useUserService('average-sessions', userId, USEMOCKED)
    const {data: performanceData, error: performanceError, loading: performanceLoading} = useUserService('performance', userId, USEMOCKED)
   
    if (loading || activityLoading || sessionLoading || performanceLoading) {
        return <div>Chargement...</div>
    }

    if (error || activityError || sessionError || performanceError) {
        return <section className='home not-found'>
            <p>{error.code}</p>
            <h2>{error.message}</h2>
        </section>
    }

  return (
    <section className='home'>
        <h2>Bonjour <span>{data.data.userInfos.firstName}</span></h2>
        <p>Félicitation vous avez explosé vos objectifs hier 👏</p>
        <div className="home-card-container">
            <div className="home-activity-container">
                <article className='activity-chart'>
                    <DailyActivityChart activityData={activityData.data.sessions} />
                </article>
                <div className='square-charts'>
                    <article className='sessions-chart'>
                        <SessionsChart sessionData={sessionData} />
                    </article>
                    <article className='strength-chart'>
                        <StrenghtChart performanceData={performanceData}/>
                    </article>
                    <article className='goal-chart'>
                        <GoalChart score={data.data} />
                    </article>
                </div>
            </div>
            <div className="home-data-container">
                {Object.keys(data.data.keyData).map((key, index) => (
                    <DataCard key={index} type={key} keyData={data.data.keyData[key]} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Home