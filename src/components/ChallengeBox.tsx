import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenges, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handChallengeSucceeded() {
        completeChallenge();
        resetCountdown();

    }

    function handChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenges ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenges.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p> {activeChallenges.description} </p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={handChallengeFailed}>Falhei</button>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handChallengeSucceeded}>Completei</button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeNotActive}>
                    <strong>
                    Finalize um ciclo para receber um desafio
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios
                        </p>
                    </strong>
                </div>
            )}
        </div>
    )
}