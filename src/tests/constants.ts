import * as helios from "@koralabs/helios";

/// setup
helios.config.set({ IS_TESTNET: true, AUTO_SET_VALIDITY_RANGE: true });

const HANDLE_POLICY_ID =
  "f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a";
const SPAM_TOKEN_POLICY_ID =
  "01234567890123456789012345678901234567890123456789999999";
const AUTHORIZERS_PUB_KEY_HAHSES = [
  helios.PubKeyHash.fromHex(
    "633a0061fcdb8aca5b86ef3a177fdcb0c178ccca3066b0be7197f3a1"
  ), /// valid
  helios.PubKeyHash.fromHex(
    "01234567890123456789012345678901234567890123456789000002"
  ),
  helios.PubKeyHash.fromHex(
    "01234567890123456789012345678901234567890123456789000003"
  ),
];
const OWNER_PUB_KEY_KEY_HASH =
  "01234567890123456789012345678901234567890123456789111111";

const MARKETPLACE_ADDRESS =
  "addr_test1qp3n5qrplndc4jjmsmhn59mlmjcvz7xvegcxdv97wxtl8gthwj7fp7cy0tpvdzmd46u3c9tvjfxrpjc2faaqzm43wrpshmp3xw";

const PAYOUT_ADDRESSES = [
  helios.Address.fromHashes(
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789555551"
    ),
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789666661"
    )
  ).toBech32(),
  helios.Address.fromHashes(
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789555552"
    ),
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789666662"
    )
  ).toBech32(),
  helios.Address.fromHashes(
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789555553"
    ),
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789666663"
    )
  ).toBech32(),
  helios.Address.fromHashes(
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789555554"
    ),
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789666664"
    )
  ).toBech32(),
  helios.Address.fromHashes(
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789555555"
    ),
    helios.PubKeyHash.fromHex(
      "01234567890123456789012345678901234567890123456789666665"
    )
  ).toBech32(),
];

const minLovelace = 10_000_000n;

export {
  AUTHORIZERS_PUB_KEY_HAHSES,
  HANDLE_POLICY_ID,
  MARKETPLACE_ADDRESS,
  minLovelace,
  OWNER_PUB_KEY_KEY_HASH,
  PAYOUT_ADDRESSES,
  SPAM_TOKEN_POLICY_ID,
};
