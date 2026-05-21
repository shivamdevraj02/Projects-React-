function Sidebar({ selectTab  , setSelectTab }) {
    const handleOnClick = (tabName) => {
        setSelectTab(tabName);
    };

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px' }}>
            
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-4">Sidebar</span>
            </a>

            <hr />


            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className={`nav-link ${selectTab === 'home' ? 'active' : ''}`} onClick={() => handleOnClick('home')}>
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#home"></use>
                        </svg>
                        Home
                    </a>

                    
                </li>


                <li>
                    <a href="#" className={`nav-link ${selectTab === 'create-post' ? 'active' : ''}`} onClick={() => handleOnClick('create-post')}>
                        <svg className="bi pe-none me-2" width="16" height="16">
                            <use xlinkHref="#speedometer2"></use>
                        </svg>
                        Create Post
                    </a>
                </li>

                
            </ul>

            <hr />

            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
            </div>

        </div>
    )
 }

export default Sidebar;