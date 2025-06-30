// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export const responseRejected = (id: number) => ({ id, jsonrpc: '2.0', error: { code: 5000, message: 'User rejected' } });
