import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid min-h-full place-content-center">
          <h1>Hello, Tab 3!</h1>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Tab3
