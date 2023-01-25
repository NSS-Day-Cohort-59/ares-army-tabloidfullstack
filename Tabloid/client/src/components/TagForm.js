import { useState } from "react"
import { addTag } from "../modules/TagManager"
import { useNavigate } from "react-router-dom";

const TagForm = () => {
    const [newTag, setNewTag] = useState({ name: "" }),
        navigate = useNavigate()

    const changeState = (e) => {
        const copy = { ...newTag }
        copy[e.target.name] = e.target.value

        setNewTag(copy)
    }

    const addNewTag = () => {
        addTag(newTag)
            .then(res => {
                if (res.ok)
                    navigate("/tag")
            })
    }


    return (
        <>
            <div>
                <div class="mb-3"><h3>Add a New Tag</h3></div>
                <form>
                    <fieldset>
                        <div><label htmlFor="name">Tag Name</label></div>
                        <div><input className="my-3" name="name" onChange={changeState} value={newTag.name} /></div>
                    </fieldset>
                    <button type="button" className="btn btn-info" onClick={() => addNewTag()}>Save</button>
                </form>
            </div>
        </>
    )
}
export default TagForm