import { useRouter } from 'next/router';

const Nft = () => {
	const router = useRouter();
	const { pid } = router.query;

	return <p>NFT ID: {pid}</p>;
};

export default Nft;
