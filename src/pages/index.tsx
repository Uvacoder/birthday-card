import Layout from '../components/Layout'
import Card from '../components/Card'
import Header from '../components/Header'
import Timer from '../components/Countdown'
import { Signature, Body } from '../components/Note'
import Page from '../components/Page'
import config from '../../config'
import React from 'react'
import ConfettiGenerator from 'confetti-js'
import Button from '../components/Button'

function Index() {
    if(Date.now() < config.activationDate.getTime()){
        return(
            <Layout title={`No peeking!`}>
                <br/>
                <Header>It's not {config.name}'s birthday yet!</Header>
                <br/>
                <br/>
                <br/>
                <Timer>Until {config.name}'s birthday</Timer>
            </Layout>
        )
    }
    else{
        const [confettiOn, setConfetti] = React.useState<boolean>(false)
        React.useEffect(() => {
            const confettiSettings = { target: 'confetti-card', respawn: true, start_from_edge: true, max: 100}
            const confetti = new ConfettiGenerator(confettiSettings)
            
            if(!confettiOn){
                confetti.clear()
            } else {
                confetti.render()
            }
            return () => confetti.clear()
        })
        return(
            <Layout style={{ overflow: 'hidden' }} title={`🎂 Happy birthday ${config.name}!`}>
                <canvas id="confetti-card"/>
                <br/>
                <Header>🎉Happy Birthday {config.name}!!!🎉</Header>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card>
                    <Page side="left">
                    <Button onClick={() => setConfetti(!confettiOn)}>{confettiOn ? "on":"off"}</Button>
                    </Page>
                    <Page side="right"></Page>
                </Card>
                <br/>
            </Layout>
        )
    }
}

export default Index