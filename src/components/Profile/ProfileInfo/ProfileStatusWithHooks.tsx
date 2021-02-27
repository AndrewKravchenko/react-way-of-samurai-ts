import React, {ChangeEvent, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEeditMode = () => {
        setEditMode(true)
    }
    const deactivateEeditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateEeditMode}>
                        {props.status || "----"}
                    </span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onChange={onStatusChange}
                       onBlur={deactivateEeditMode}
                       value={status}
                />
            </div>
            }
        </div>
    )
}
