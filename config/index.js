"use strict";
// tslint:disable:object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    networks: {
        mainnet: {
            bip32: {
                private: 0x4358394,
                public: 0x43587cf,
            },
            name: 'mainnet',
            nethash: '5e67037fd290ba7ab378e84a591d251c46eb9770eb134983771fd602233bf193',
      token: 'Qredit',
      symbol: 'XQR',
      version: 0x3a,
      explorer: 'https://explorer.qredit.io/#',
      wif: 0xbb,
      p2pPort: 4101,
      apiPort: 4103,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '159.69.89.111',
        port: 4103,
      },
      peers: [
        { "ip": "136.144.170.17",  "port": 4103 },
        { "ip": "116.203.33.4", "port": 4103 },
        { "ip": "116.203.56.119", "port": 4103 },
        { "ip": "116.203.58.165", "port": 4103 },
        { "ip": "159.69.89.41", "port": 4103 }
      ],
        },
    },
    blockchain: {
        interval: 8,
        delegates: 51,
        date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
    },
};
//# sourceMappingURL=index.js.map