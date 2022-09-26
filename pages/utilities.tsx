import { providers, Wallet } from 'ethers';
import { useCallback, useEffect, useReducer } from 'react';
import WalletLink from 'walletlink';

import Web3Modal from 'web3modal';

import Fortmatic from 'fortmatic';
import Portis from '@portis/web3';
import { ellipseAddress, getChainData } from '../lib/utilities';

const INFURA_ID = 'e35ef239aa8349438df353aa77d6af9b';

import WalletConnectProvider from '@walletconnect/web3-provider';

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: INFURA_ID, // required
		},
	},
	'custom-walletlink': {
		display: {
			logo: 'https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0',
			name: 'Coinbase',
			description: 'Connect to Coinbase Wallet (not Coinbase App)',
		},
		options: {
			appName: 'Coinbase', // Your app name
			networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
			chainId: 1,
		},
		package: WalletLink,
		connector: async (_, options) => {
			const { appName, networkUrl, chainId } = options;
			const walletLink = new WalletLink({
				appName,
			});
			const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
			await provider.enable();
			return provider;
		},
	},
	portis: {
		package: Portis, // required
		options: {
			id: '7468841b-efc5-4b45-8e8d-3f2c39ecb9b5', // required
		},
	},
	fortmatic: {
		package: Fortmatic, // required
		options: {
			key: 'pk_live_C8B9E78124235C6B', // required
		},
	},
};

// useEffect(() => {
let web3Modal;
if (typeof window !== 'undefined') {
	web3Modal = new Web3Modal({
		network: 'mainnet', // optional
		cacheProvider: true,
		providerOptions, // required
	});
}
// }, []);

type StateType = {
	provider?: any;
	web3Provider?: any;
	address?: string;
	chainId?: number;
};

type ActionType =
	| {
			type: 'SET_WEB3_PROVIDER';
			provider?: StateType['provider'];
			web3Provider?: StateType['web3Provider'];
			address?: StateType['address'];
			chainId?: StateType['chainId'];
	  }
	| {
			type: 'SET_ADDRESS';
			address?: StateType['address'];
	  }
	| {
			type: 'SET_CHAIN_ID';
			chainId?: StateType['chainId'];
	  }
	| {
			type: 'RESET_WEB3_PROVIDER';
	  };

const initialState: StateType = {
	provider: null,
	web3Provider: null,
	address: null,
	chainId: null,
};

function reducer(state: StateType, action: ActionType): StateType {
	switch (action.type) {
		case 'SET_WEB3_PROVIDER':
			return {
				...state,
				provider: action.provider,
				web3Provider: action.web3Provider,
				address: action.address,
				chainId: action.chainId,
			};
		case 'SET_ADDRESS':
			return {
				...state,
				address: action.address,
			};
		case 'SET_CHAIN_ID':
			return {
				...state,
				chainId: action.chainId,
			};
		case 'RESET_WEB3_PROVIDER':
			return initialState;
		default:
			throw new Error();
	}
}
export const Utilities = (): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { provider, web3Provider, address, chainId } = state;

	const connect = useCallback(async function () {
		// This is the initial `provider` that is returned when
		// using web3Modal to connect. Can be MetaMask or WalletConnect.
		const provider = await web3Modal.connect();

		// We plug the initial `provider` into ethers.js and get back
		// a Web3Provider. This will add on methods from ethers.js and
		// event listeners such as `.on()` will be different.
		const web3Provider = new providers.Web3Provider(provider);

		const signer = web3Provider.getSigner();
		const address = await signer.getAddress();

		const network = await web3Provider.getNetwork();

		dispatch({
			type: 'SET_WEB3_PROVIDER',
			provider,
			web3Provider,
			address,
			chainId: network.chainId,
		});
	}, []);

	const disconnect = useCallback(
		async function () {
			await web3Modal.clearCachedProvider();
			if (provider?.disconnect && typeof provider.disconnect === 'function') {
				await provider.disconnect();
			}
			dispatch({
				type: 'RESET_WEB3_PROVIDER',
			});
		},
		[provider]
	);

	// Auto connect to the cached provider
	useEffect(() => {
		if (web3Modal.cachedProvider) {
			connect();
		}
	}, [connect]);

	// A `provider` should come with EIP-1193 events. We'll listen for those events
	// here so that when a user switches accounts or networks, we can update the
	// local React state with that new information.
	useEffect(() => {
		if (provider?.on) {
			const handleAccountsChanged = (accounts: string[]) => {
				// eslint-disable-next-line no-console
				console.log('accountsChanged', accounts);
				dispatch({
					type: 'SET_ADDRESS',
					address: accounts[0],
				});
			};

			// https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
			const handleChainChanged = (_hexChainId: string) => {
				window.location.reload();
			};

			const handleDisconnect = (error: { code: number; message: string }) => {
				// eslint-disable-next-line no-console
				console.log('disconnect', error);
				disconnect();
			};

			provider.on('accountsChanged', handleAccountsChanged);
			provider.on('chainChanged', handleChainChanged);
			provider.on('disconnect', handleDisconnect);

			// Subscription Cleanup
			return () => {
				if (provider.removeListener) {
					provider.removeListener('accountsChanged', handleAccountsChanged);
					provider.removeListener('chainChanged', handleChainChanged);
					provider.removeListener('disconnect', handleDisconnect);
				}
			};
		}
	}, [provider, disconnect]);

	const chainData = getChainData(chainId);

	return (
		<>
			<div className='max-w-4xl mx-auto bg-gray-800 rounded-xl p-10 my-10'>
				<div className='text-center'>
					<h1 className='text-offwhite text-3xl mb-6 uppercase'>
						Vault3d Utility Box
					</h1>
					<p className='text-offwhite text-xl font-thin mb-6 max-w-xl mx-auto'>
						This is our utility box. You are likely here because one of our
						customer support specialists have sent you to this page.
					</p>

					<p className='text-offwhite font-thin text-xl italic mb-6 max-w-xl mx-auto'>
						Please only perform the actions that the customer support agent
						instructs. Thank you!
					</p>

					<div className='border border-gray-600 bg-gray-900 max-w-xl mx-auto pb-10 pt-6 px-4'>
						<p className='italic text-offwhite mb-6'>
							Utility 1: Manual wallet disconnector – use in case you have
							selected an incorrect wallet provider and need to reset the
							connection.
						</p>
						<button
							className='text-offwhite hover:text-purple-300 bordergradient w-3/5'
							type='button'
							onClick={disconnect}
						>
							Send Wallet Disconnect Command
						</button>
					</div>

					<div className='border border-gray-600 bg-gray-900 max-w-xl mx-auto pb-10 pt-6 px-4'>
						<p className='italic font-thin text-offwhite mb-6'>
							Misc – Connection Info:
						</p>
						<p className='font-thin text-offwhite'>
							<span className='font-bold'>Current address: </span>
							{ellipseAddress(address)}
						</p>
						<p className='font-thin text-offwhite'>
							<span className='font-bold'>Current network: </span>
							{chainData?.name}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Utilities;
