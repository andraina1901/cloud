import { 
	IonButton, 
	IonCardTitle, 
	IonCol, 
	IonContent,
	IonFooter, 
	IonGrid, 
	IonHeader, 
	IonImg, 
	IonPage, 
	IonRouterLink, 
	IonRow, 
} from '@ionic/react';
import { Action } from '../components/Action';
import './Home.css';

const Home = () => {
	
	return (
		<IonPage className='homePage'>
			<IonHeader>
				{/* <IonToolbar className="ion-no-margin ion-no-padding"> */}
					<IonImg className='imageHome' src="assets/images/login2.jpeg" />
				{/* </IonToolbar> */}
			</IonHeader>
			<IonContent fullscreen>

				<div className='getStarted'>
					<IonGrid>
						<IonRow className={ `ion-text-center ion-justify-content-center heading` }>
							<IonImg src="assets/images/Logo.png" />
							<IonCol size="11" className='headingText'>
								<IonCardTitle>Join millions of other people discovering their car</IonCardTitle>
							</IonCol>
						</IonRow>

						<IonRow className={ `ion-text-center ion-justify-content-center` }>
							<IonRouterLink routerLink="/signup" className="custom-link">
								<IonCol size="11">
									<button className='getStartedButton'>Get started &rarr;</button>
								</IonCol>
							</IonRouterLink>
						</IonRow>
					</IonGrid>
				</div>
			</IonContent>

			<IonFooter>
				<IonGrid>
					<Action message="Already got an account?" text="Login" link="/login" />
				</IonGrid>
			</IonFooter>
		</IonPage>
	);
};

export default Home;