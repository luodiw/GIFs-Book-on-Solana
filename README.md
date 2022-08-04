# GIFs Book on Solana

GIFs (giffs or gifts) can now be collected on Solana's blockchain, verifying your ownership of them! Own and share GIFs with your friends with security and cool features.

(Naming takes inspiration from facebook :) )

![Screenshot](/assets/screenshot.png)

## Installating

### Getting the frontend up and running

Install the dependencies first for the project.

```sh
yarn
# OR
npm install
```

Go to the solana app, and install its dependencies in the same way.

```sh
cd solana_app

yarn
# OR
npm install
```

After completion, make sure that you have the solana toolchain ready. If you don't, there are instructions on how-to do that
in the section below.

Now, deploy the solana program. You can find the instructions in the section in the end of installation and
usage, on how you can do it.

Once you have deployed, copy the IDL file from `target/idl/solana_app.json` in `solana_app` to `src/assets` in react project
into a file called `idl.json`.

Now, generate the keypair for handling accounts.

```sh
cd src
node createKeyPair.js
cd ..
```

Open your Phantom Wallet and switch the network to Devnet. Then, deposit funds copying the public key and use this command, 

```sh
solana airdrop 5 <wallet-public-key>  --url https://api.devnet.solana.com
```

Now, run `npm run start` to start up the app, or host it anywhere ✨

### Solana and toolchain installation

To get started with Solana, Rust has to be installed on your local system.

To quickly install Solana, follow this [guide](https://docs.solana.com/cli/install-solana-cli-tools#use-solanas-install-tool).

Run it to confirm installation, 

```sh
solana --version
```

Make sure there are no errors,

Now it's time to install Anchor. You can install it easily by following the official documentation,
[here](https://project-serum.github.io/anchor/getting-started/installation.html#install-rust).

To test if it works fine too, use this command.

```sh
anchor --version
```

Now, generate a keypair using the solana CLI suite and check the address.

```sh
solana-keygen new
solana address
```

### Deploying your Solana program to devnet

To start deploying, first switch your net to devnet.

```sh
solana config set --url devnet
```

Finally, airdrop yourself some SOL on the devnet.

```sh
solana airdrop 2
solana balance
```

Now, configure the variables.

In `Anchor.toml`, change `[programs.localnet]` to `[programs.devnet]`.

Then, change `cluster = "localnet"` to `cluster = "devnet"`.

Run the build through anchor using,

```sh
anchor build
```

Access the newly created program ID,

```sh
solana address -k target/deploy/solana_app-keypair.json
```

Copy the ID and change it in the `declare_id!()` section in the `lib.rs` located inside `programs/solana_app/src`. Now,
go to `Anchor.toml`, and replace the ID with the same one you copied above under `[programs.devnet]`.

By default the location for the keypair for Anchor to load is set to `~/.config/solana/id.json`. If you are using a custom
path, make sure to update the `Anchor.toml` to use your custom path.

Run `anchor build`!

Deploy it using the final command - `anchor deploy`. Done! You're all set!

Track your program using the [Solana explorer](https://explorer.solana.com/?cluster=devnet), and by searching for your
program using the ID you obtained from the JSON file.

Credits to [Buildspace](https://buildspace.so) for helping me build this amazing project 🔥

<div align="center">Made with ❤️ by Luodi Wang</div>
