import ProfileName from "./ProfileName"
import ProfilePronouns from "./ProfilePronouns"
import ProfileSubtitle from "./ProfileSubtitle"
import EducationBio from "./EducationBio"
import WorkBio from "./WorkBio"
import Location from "./Location"
import ProfileLinksContainer from "./ProfileLinksContainer"
import ImportantLinksContainer from "./ImportantLinksContainer"

const ProfileContainer = () => {
    return (
        <div className="z-10 snap-end flex-col justify-center bg-slate-800 w-10/12 lg:w-1/3 rounded-md pt-4 pb-4 items-center drop-shadow-2xl">
            <div className="flex space-x-8 overflow-hidden justify-center">
                <div><img className="inline-block h-20 w-20 rounded-full ring-2 ring-slate-900" src={require("./assets/display-picture.webp")} alt="Vidit Khandelwal" /></div>
            </div>
            <ProfileName name="Vidit Khandelwal"></ProfileName>
            <ProfilePronouns pronouns="He/Him"></ProfilePronouns>
            <ProfileSubtitle content="Software Engineer 💻"></ProfileSubtitle>
            <EducationBio></EducationBio>
            <WorkBio companyName="Pixus, Inc." position="Software Development Intern"></WorkBio>
            <div id="link-vk-main" className="flex-row justify-center text-white mt-2">
                <a href="https://v-k.pw/vOfk3l" target="_blank" rel="noreferrer"><p className="text-center underline decoration-sky-500 hover:text-slate-300">viditkhandelwal.com</p></a>
            </div>
            <Location location="United States"></Location>
            <ProfileLinksContainer></ProfileLinksContainer>
            <ImportantLinksContainer></ImportantLinksContainer>
        </div>);
}

export default ProfileContainer;