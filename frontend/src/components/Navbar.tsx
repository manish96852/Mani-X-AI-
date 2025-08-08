import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HBARLogo from "../assets/hbar-logo.svg";
import { useWalletInterface } from "../services/wallets/useWalletInterface";
import { WalletSelectionDialog } from "./WalletSelectionDialog";
import { shortenAddress, isEvmAddress } from "../utils/address";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { accountId, walletInterface } = useWalletInterface();

  const handleConnect = async () => {
    if (accountId) {
      walletInterface.disconnect();
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (accountId) {
      setOpen(false);
    }
  }, [accountId]);

  const getDisplayAddress = (address: string) => {
    if (isEvmAddress(address)) {
      return shortenAddress(address);
    }
    return address;
  };

  return (
    <nav className="bg-black/80 border-b border-green-500">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          {/* <img
            src={HBARLogo}
            alt="An upper case H with a line through the top"
            className="hbarLogoImg"
          /> */}
          <img
            src="/images/logo-icon.svg"
            alt="MANI X AI"
            className="w-9 h-auto rounded-sm "
          />
          <h1 className="text-cyber-green font-retro text-sm text-glow-sm">
            MANI X AI
          </h1>
        </Link>
        <button className="cyber-button" onClick={handleConnect}>
          {accountId
            ? `Connected: ${getDisplayAddress(accountId)}`
            : "Connect Wallet"}
        </button>
      </div>
      <WalletSelectionDialog
        open={open}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
      />
    </nav>
  );
}
