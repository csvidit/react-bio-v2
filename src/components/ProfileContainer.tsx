import ProfileName from "./ProfileName";
import ProfilePronouns from "./ProfilePronouns";
import ProfileSubtitle from "./ProfileSubtitle";
import EducationBio from "./EducationBio";
import WorkBio from "./WorkBio";
import Location from "./Location";
import ProfileLinksContainer from "./ProfileLinksContainer";
import ImportantLinksContainer from "./ImportantLinksContainer";
import React from "react";
import StudioLink from "./StudioLink";

const ProfileContainer = () => {
  return (
    <div className="z-10 w-10/12 snap-end flex-col items-center justify-center rounded-md bg-slate-800 pt-4 pb-4 drop-shadow-2xl lg:w-1/3">
      <div className="flex justify-center space-x-8 overflow-hidden">
        <div>
          <img
            className="inline-block h-20 w-20 rounded-full ring-2 ring-slate-900"
            src={require("./assets/display-picture.webp")}
            alt="Vidit Khandelwal"
          />
        </div>
      </div>
      <ProfileName name="Vidit Khandelwal"></ProfileName>
      <ProfilePronouns pronouns="he/him"></ProfilePronouns>
      <ProfileSubtitle content="Software Engineer 💻"></ProfileSubtitle>
      <EducationBio></EducationBio>
      {/* <WorkBio
        companyName="Pixus, Inc."
        position="Software Development Intern"
      ></WorkBio> */}
      <StudioLink />
      <div
        id="link-vk-main"
        className="mt-2 flex-row justify-center text-white"
      >
        <a href="https://v-k.pw/vOfk3l" target="_blank" rel="noreferrer">
          <p className="text-center underline decoration-sky-500 hover:text-slate-300">
            viditkhandelwal.com
          </p>
        </a>
      </div>

      <Location location="United States"></Location>
      <ProfileLinksContainer></ProfileLinksContainer>
      <ImportantLinksContainer></ImportantLinksContainer>
    </div>
  );
};

export default ProfileContainer;
