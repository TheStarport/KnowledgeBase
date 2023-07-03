---
title: Running multiple freelancer clients on a single machine
---

Sometimes, when testing multiplayer-specific changes, it's nessecary to run multiple Freelancer clients on the same machine so you can have two controlled clients connected to a local server for testing or research purposes. By default, Freelancer is not able to run more than a single client at a time, even when executables are renamed or called from different folders.

## Running multiple clients

1. Download and install your hex editor of choice. Our recommendation would be [Hexplorer](https://adhoc2.github.io/HEXplorer/), but any editor should be able to do this.
2. Open `Freelancer.exe` and jump to the address [`0x1E6DCC`](https://wiki.the-starport.net/wiki/fl-binaries/limit-breaking/miscellaneous/#miscellaneous). This offset is usually used to rename `lpName` when Freelancer calls `CreateMutex`, but in this case we're going to set it to null, Change the bytes here from `46` to `00` and save your executable.
3. You should now be able to run multiple instances of Freelancer on the same machine. Ensure you are ruining them with the `-w` shortcut switch so you're able to quickly jump between the two clients.

## Connecting multiple clients to a single server

Unfortunately in order to connect multiple clients on one machine to the same server, you will need to hot-swap your multiplayer ID: 
1. Download and run [Freelancer Account Manager](https://www.moddb.com/games/freelancer/downloads/freelancer-account-manager) as administrator.
2. Select 'FL' and then hit 'Select FL Path'. Point the program at your local instance of Freelancer.
3. Create an additional account by pressing 'Tools' and then 'Generate new account.
4. Run FLServer, then start one instance of Freelancer and connect to your local server.
5. Swap accounts in FAM by right clicking on your second account and hitting apply.
6. Start a second instance of Freelancer and connect to the server again. You should be connected with a separate account and able to run two characters simultaneously. 
