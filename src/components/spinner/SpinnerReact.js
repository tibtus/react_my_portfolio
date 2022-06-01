import logo from '../../logo.svg';
import './SpinnerReact.scss';

function SpinnerReact() {

    return (
        <div className="SpinnerReact">
            <header className="SpinnerReact-header">
                <img src={logo} className="SpinnerReact-logo" alt="logo" />
                <p>
                    Edit and save to reload.
                </p>


            </header>
        </div>
    );
}

export default SpinnerReact;