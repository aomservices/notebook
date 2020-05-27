import React from 'react'

export const ArchivedCard = props => {
    return (
        <div>
            <label className="checkbox">
                <input
                    type="checkbox"
                    checked={props.isChecked}
                    onChange={e => props.callback(e.target.checked)}
                />
                Show archived cards
            </label>
        </div>
    )
}
