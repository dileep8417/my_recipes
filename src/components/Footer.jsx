import {VscGithub} from 'react-icons/vsc';
import { githubLink } from '../Constants';

const Footer = () => {
    return (
        <footer className="footer">
            <VscGithub className='icon' /> <a href="https://github.com/dileep8417" style={{color: "white", textDecoration: 'none'}}>{githubLink}</a>
        </footer>
    )
}

export default Footer;