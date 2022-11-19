import React from "react";

interface Props {
  netId: number;
}

function getNetwork(netId: number) {
  switch (netId) {
    case 1:
      return "Mainnet";
    case 5:
      return "Goerli network";
    case 11155111:
      return "Sepolia network";
    default:
      return "Unknown network";
  }
}

const Network: React.FC<Props> = ({ netId }) => {
  return <div>{getNetwork(netId)}</div>;
};

export default Network;
