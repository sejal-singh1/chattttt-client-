// import React from "react";
// import { Avatar, Stack, Typography } from "@mui/material";
// import {
//   Face as FaceIcon,
//   AlternateEmail as UserNameIcon,
//   CalendarMonth as CalendarIcon,
// } from "@mui/icons-material";
// import moment from "moment";
// import { transformImage } from "../../lib/features";
// import './Profile.css';

// const Profile = ({ user }) => {
//   return (
//     <Stack className='profile-container' >
//       <Avatar
//         src={transformImage(user?.avatar?.url)}
//         className="profile-avatar" 
//       />
//       <ProfileCard heading={"Bio"} text={user?.bio} />
//       <ProfileCard
//         heading={"Username"}
//         text={user?.username}
//         Icon={<UserNameIcon />}
//       />
//       <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
//       <ProfileCard
//         heading={"Joined"}
//         text={moment(user?.createdAt).fromNow()}
//         Icon={<CalendarIcon />}
//       />
//     </Stack>
//   );
// };

// const ProfileCard = ({ text, Icon, heading }) => (
//   <Stack
//     direction={"row"}
//     alignItems={"center"}
//     spacing={"1rem"}
//     color={"white"}
//     textAlign={"center"}
//   >
//     {Icon && Icon}

//     <Stack>
//       <Typography variant="body1">{text}</Typography>
//       <Typography color={"gray"} variant="caption">
//         {heading}
//       </Typography>
//     </Stack>
//   </Stack>
// );

// export default Profile;




import { Avatar, Stack, Typography } from '@mui/material';
import { 
    Face as FaceIcon, 
    AlternateEmail as UserNameIcon, 
    CalendarMonth as CalendarIcon 
  } from "@mui/icons-material";
import './Profile.css';
import moment from "moment";
import { transformImage } from '../../lib/features';

const Profile = ({user}) => {
  return (
   <Stack className='profile-container' >
    <Avatar 
      src={transformImage(user?.avatar?.url)}
    
    className="profile-avatar" />

    <ProfileCard heading={"Bio"} text={user?.bio}/>
    <ProfileCard heading={"Username"} text={user?.username}
 Icon={UserNameIcon} />
    <ProfileCard heading={"Name"} text={user?.name}   Icon={FaceIcon}/>
    <ProfileCard heading={"Joined"} text={moment(user?.createdAt).fromNow()} Icon={CalendarIcon}/>
   </Stack>
  )
}
const ProfileCard=({text,Icon,heading})=>
     <Stack 
direction={"row"}
alignItems={"center"}
spacing={"1rem"}
color={"black"}
textAlign={"center"}

     
     
     
     >
{Icon && <Icon/>}
<Stack>
    <Typography variant='body1'>{text}</Typography>
    <Typography color='gray' variant='caption'>{heading}</Typography>
</Stack>
     </Stack>

export default Profile;