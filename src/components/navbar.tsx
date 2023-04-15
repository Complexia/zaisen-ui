import MetamaskConnect from "./metamaskConnectButton";
import LensConnect from "./lensConnectButton";
import NotificationIcon from "./notificationIcon";

export default function Navbar() {
	return (
        <nav className="flex top-0 justify-between w-full pr-4 mr-auto gap-8 relative">
            <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
                {/* <img className={styles.alchemy_logo} src="/alchemy_logo.svg"></img> */}
            </a>
            <div className="flex items-center">
                <div className="pr-2">
                    <NotificationIcon />
                </div>
                <div className="pr-2">
                    <LensConnect />
                </div>
                <MetamaskConnect />
            </div>
        </nav>
	);
}