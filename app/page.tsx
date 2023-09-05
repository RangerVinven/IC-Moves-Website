import Image from 'next/image'
import Navbar from './components/General/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className="flex h-screen w-full items-center justify-left">
				<h1>IC Moves</h1>
			</div>
		</div>
	);
}
