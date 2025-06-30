// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import * as bip39 from 'bip39';

export async function loadMnemonicSlow(mnemonic: string): Promise<ArrayBuffer> {
  return await bip39.mnemonicToSeed(mnemonic);
}
