import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import VerifiedIcon from "../assets/verified.svg";

const socialMedia = [
  {
    name: "Github",
    icon: GithubIcon,
    link: "https://github.com/Mirian97",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/dev-mirian-quispe/",
  },
];

export const Profile = () => {
  return (
    <div className="p-2 pb-6 my-6 bg-[#FCFCFC] backdrop-blur-3xl shadow-profile w-76 max-w-full mx-auto rounded-[40px]">
      <img
        src="https://github.com/Mirian97.png"
        className="rounded-4xl w-72 mb-4 mx-auto"
        alt="Avatar"
      />
      <div className="px-6 text-neutral-900">
        <div className="flex mb-1">
          <h2 className="text-[22px] font-medium leading-tight">
            Mirian Quispe
          </h2>
          <img src={VerifiedIcon} alt="Verified icon" className="size-5 ml-2" />
        </div>
        <p className="text-gray-800 font-medium text-xs mb-2">
          Frontend Developer
        </p>
        <p className="text-gray-500 text-sm">
          Frontend with expertise in frameworks such as React, Angular, and Vue,
          focusing on accessibility, SEO, and scalability for large-scale
          applications.
        </p>
        <div className="flex gap-4 mt-2">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <img
                src={social.icon}
                alt={`${social.name} icon`}
                className="size-5"
              />
              <span className="text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
