import { PublicKey } from "@solana/web3.js";

const WALLET = new PublicKey("EUpX3WNe7Uv3YP1nya2h2bBo6sRJCMVdDcsFhLc6fESQ");
const PROGRAM_ID = new PublicKey("11111111111111111111111111111111");

const [vaultPda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("vault"), WALLET.toBuffer()],
  PROGRAM_ID
);

console.log("Authority:", WALLET.toBase58());
console.log("Program ID:", PROGRAM_ID.toBase58());
console.log("Vault PDA:", vaultPda.toBase58());
console.log("Bump:", bump);
