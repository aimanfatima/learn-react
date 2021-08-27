import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
    const history = useHistory();
    function addMeetupHandler(meetUpData) {
        fetch(
            'https://react-getting-started-13467-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body : JSON.stringify(meetUpData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }
    return <section>
        <h1>Add New Meeetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}

export default NewMeetup;