import './HeaderActionIcons.css';

const HeaderActionIcons = ({name,title}) => {
    return(
        <button className="header-action-btn">
            <ion-icon name={name} aria-hidden="true"></ion-icon>
            <p className="header-action-label">{title}</p>
        </button>
    );
}

export default HeaderActionIcons;