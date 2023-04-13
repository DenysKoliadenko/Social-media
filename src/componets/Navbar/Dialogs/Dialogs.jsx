import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"


const Dialogs = (props) => {

    let DialogsElements =
        props.State.DialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessagsElements =
        props.State.MessagesData.map(m => <Message message={m.message} />);
    let addNewDialog = React.createRef();
    let addDialog = () => {
        let text = addNewDialog.current.value;
        alert(text)
    }




    return (
        <div className={s.dialogs}>




            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>



            <div className={s.messages}>
                {MessagsElements}
            </div>
            <div>
                <textarea ref={addNewDialog}></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addDialog}>Add dialog</button>
            </div>


        </div>
    )

}
export default Dialogs