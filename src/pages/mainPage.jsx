import './mainPage.css'
import CustomButton from "../components/customButton";
import {ReactComponent as GitLogo} from '../icons/github-icon-1-logo-svgrepo-com.svg';
import {ReactComponent as LinkedinLogo} from '../icons/linkedin-svgrepo-com.svg';
import {ReactComponent as PdfLogo} from '../icons/pdf-svgrepo-com.svg';
import {Helmet} from "react-helmet";

const links = [
    {
        icon: <PdfLogo/>,
        text: 'Tone Board',
        url: 'pdfs/tone-board-sezin-sozden.pdf'
    },
    {
        icon: <PdfLogo/>,
        text: 'Booklet',
        url: 'pdfs/tone-booklet.pdf'
    },
    {
        icon: <PdfLogo/>,
        text: 'User Manual',
        url: 'pdfs/tone-user-manual.pdf'
    },
    {
        icon: <PdfLogo/>,
        text: 'Project Folder',
        url: 'pdfs/tone-project-folder.pdf'
    },
    {
        icon: <LinkedinLogo/>,
        text: 'Linkedin',
        url: 'https://tr.linkedin.com/in/sezin-sözden-8351142a5',
    },
    {
        icon: <GitLogo/>,
        text: 'Github',
        url: 'https://github.com/AtaCanYmc/ToneProject',
    },
];

export const MainPage = () => {
    return (
        <div className="social-links">
            <Helmet>
                <title>Tone Equalizer</title>
            </Helmet>
            {links.map((link, index) => (
                <CustomButton
                    key={index}
                    className="button-icon"
                    icon={link.icon}
                    text={link.text}
                    url={link.url}
                />
            ))}
        </div>
    );
};
