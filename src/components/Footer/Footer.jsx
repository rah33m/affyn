import {
  DiscordIcon,
  Logo,
  OpenSeaIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../ui/icons";
import "./style.css";

const socialLinks = [
  {
    label: "Discord",
    icon: <DiscordIcon />,
    url: "#",
  },
  {
    label: "Youtube",
    icon: <YoutubeIcon />,
    url: "#",
  },
  {
    label: "Telegram",
    icon: <TelegramIcon />,
    url: "#",
  },
  {
    label: "Twitter",
    icon: <TwitterIcon />,
    url: "#",
  },
  {
    label: "Opensea",
    icon: <OpenSeaIcon />,
    url: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="footer_container">
      <Logo />
      <div className="social-links">
        {socialLinks.map((link, i) => (
          <a href={link.url} key={i}>
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};
