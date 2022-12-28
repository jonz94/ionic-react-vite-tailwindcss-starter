import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="grid min-h-full place-content-center">
          <h1>Hello, Tab 1!</h1>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
