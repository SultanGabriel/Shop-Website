import React from 'react'
import {ReactComponent as UserProfileIcon} from '../img/profile.svg'
// FIXME better name
function UserProfile() {
  return (
    <div className="mx-2">
        <UserProfileIcon width="32px" height="32px"/>
    </div>
  )
}

export default UserProfile
