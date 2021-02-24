import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mr-soulfox.png" alt="Foto github"/>
            <div>
                <strong>Marcos Paulo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1

                </p>
            </div>
        </div>
    )
}