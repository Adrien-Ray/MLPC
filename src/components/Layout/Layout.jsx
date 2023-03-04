import './Layout.css';
export function Layout() {
    return (
            <div className='Layout'>
                <img src={window.location + '/logo512.png'} alt="logo" />
                <h1>ML PC</h1>
            </div>
    );
}

export default Layout;