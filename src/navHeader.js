const Nav = ({toggelmenu, status}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

        <div className="burger-container" onClick={() => toggelmenu(status)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/@twister19/twtable">Click Here for Twtable npm package</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;