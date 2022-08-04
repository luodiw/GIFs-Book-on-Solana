// Single deploy script initiated by CLI injecting configured provide from
// workspace's Anchor.toml.

const anchor = require('@project-serum/anchor');

module.exports = async function (provider) {
  // Configure client to use the provider.
  anchor.setProvider(provider);

  // Add your deploy script here.
};
