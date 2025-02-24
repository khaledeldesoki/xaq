import { Connection, PublicKey, clusterApiUrl, Keypair, Transaction, SystemProgram } from '@solana/web3.js';

// Example secret key; replace with a real secret key for actual use
const secret = new Uint8Array([/* your secret key array here */]);
const fromKeypair = Keypair.fromSecretKey(secret);

export const sendPayment = async (recipient, amount) => {
  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  const recipientPubKey = new PublicKey(recipient);
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: recipientPubKey,
      lamports: amount * 1000000000, // Convert SOL to lamports
    })
  );

  const signature = await connection.sendTransaction(transaction, [fromKeypair]);
  await connection.confirmTransaction(signature, 'confirmed');
};