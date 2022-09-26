import supportedChains from './chains';
import { IChainData } from './types';

export function getChainData(chainId?: number): IChainData {
	if (!chainId) {
		return null;
	}
	const chainData = supportedChains.filter(
		(chain: any) => chain.chain_id === chainId
	)[0];

	if (!chainData) {
		throw new Error('ChainId missing or not supported');
	}

	const API_KEY = 'e35ef239aa8349438df353aa77d6af9b';

	if (
		chainData.rpc_url.includes('infura.io') &&
		chainData.rpc_url.includes('%API_KEY%') &&
		API_KEY
	) {
		const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

		return {
			...chainData,
			rpc_url: rpcUrl,
		};
	}

	return chainData;
}

export function ellipseAddress(address = '', width = 10): string {
	if (!address) {
		return '';
	}
	return `${address.slice(0, width)}...${address.slice(-width)}`;
}
