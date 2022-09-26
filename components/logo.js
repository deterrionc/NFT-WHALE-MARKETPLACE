import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../public/assets/images/main-logo.png';

function Logo() {
	return (
		<Link href='/'>
			<a>
				<Image
					src={logoPic}
					width='170'
					height='75'
					alt='VAULT3D NFT Marketplace'
				/>
			</a>
		</Link>
	);
}

export default Logo;
