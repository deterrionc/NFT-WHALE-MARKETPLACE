import React from 'react';
import HeroSection from './HeroSection';
import PostCard from '../../components/PostCard';
import Image from 'next/image';

export default function BlogDetail() {
  return (
    <div className="relative bg-dark-gradient bg-no-repeat pb-20 lg:pb-28">
      <div className="sm:px-6 lg:px-28 gap-x-8 pt-28">
        <div className='flex justify-center'>
          <Image src="/assets/images/cover-landing.png" alt='' width={1447} height={700} />
        </div>

        <p className='text-gray-200 text-lg mt-24'>
          8 January, 2022
        </p>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            If 2021 was the year of NFTs, could 2022 be the year of DAOs?
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            There are many different ways that a DAO can function, but one thing these communities share in common is that they come together to cooperate digitally—whether they’re preserving and collecting art, distributing a token for governance, or simply splitting the bill at dinner.
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            Decentralized autonomous organizations like PleasrDAO, FlamingoDAO, and CypherDAO—to name a few—initially arrived on Foundation to pool funds to collectively purchase NFTs, and signal their shared values. For instance, PleasrDAO famously collected Itzel Yard’s Dreaming at Dusk for 500 ETH, which was used to fund The Tor Project’s mission of defending privacy and freedom online.
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            The DAOs we’ve seen to date are early blueprints for others to expand on, whether experimenting with collecting or creating as a means of inscribing their ethos on the blockchain, to building digital-first cultural spaces that aims to go beyond what traditional art institutions have been able to achieve.
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            As we look ahead to a new year, we’re highlighting some of the DAOs that are organizing, developing, and bootstrapping funding at the new frontier in web3.
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            PleasrDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            PleasrDAO is a collective that quickly came together on Twitter in a shared effort to win the auction for pplpleasr`s genesis NFT on Foundation. The impetus behind PleasrDAO is simple: a group of collectors pooling funds together into a shared multi-signature wallet, to compete with other major bidders, and win high-profile auctions. After winning their first eponymous auction, PleasrDAO went on to collect other works such as Edward Snowden’s Stay Free and Itzel Yard’s Dreaming at Dusk. As a collective entity, they want to support good causes, noting that they aim to collect NFTs that should “belong to the people.”
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            “We want to define industry standards that will move the entire system forward, and show what’s possible with DAOs from a technical perspective. We want to utilize our treasury to push this space forward and support the teams that are doing that.” —PleasrDAO, in conversation with Foundation
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            CypherDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            With the goal of “harnessing the energy of culturally significant cryptographic artifacts,” CypherDAO was founded by a group of individuals who have been active in crypto since 2016. At the core of CypherDAO’s treasury lies a collection called “The Fungible,” by none other than the inimitable artist, Pak. On this collection, CypherDAO notes:
            “By leveraging blockchain technology and NFTs, `The Fungible` not only provides collectors with novel assurances of scarcity and ownership, but exposes them to the unique features with which technology can endow artwork. Through this collection, Pak scrutinizes our understanding of value. What does value mean, and from where does it derive authority?”
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            On Foundation, CypherDAO has amassed an impressive collection of works by Shavonne Wong, Itzel Yard, Diana Sinclair, Shantell Martin, Moyosore Briggs, YAFA Csefar, and many more.
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            herstoryDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            herstoryDAO formed to collect and preserve the work of Black creatives and femmes, including stunning works by Yatreda, as well as works from Brittany Pierre, and Linda Dounia, among others. In the herstoryDAO manifesto published with Foundation, they state:
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            “We are on the precipice of a revolution to ensure the preservation, longevity, and amplification of Black femme NFT creators. herstoryDAO exists to ensure that the metaverse we are actively helping to architect with our contributions, collections, and experiences is an equitable space—forever.”
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            FlamingoDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            Established well before NFTs became a cultural phenomenon, FlamingoDAO was paving the way for the collective ownership of digital assets. When we asked Priyanka Desai, operations lead for FlamingoDAO, why NFTs are a compelling asset type, she noted:
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            “The scarcity aspect plays a big role. Having a piece of the internet that`s fundamentally yours—something that you think is beautiful and unique and special—is not something we’ve been able to do until now.”
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            FlamingoDAO collects with a keen eye on Foundation and holds a number of widely coveted works in their vault, including Ix Shells’s, and Reuben Wu’s Sorcerer.
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            MUSE0DAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            MUSE0 functions as an “internet museum curated by an alien.” Indeed, the DAO itself spawned from FlamingoDAO, soon after they acquired a rare Alien CryptoPunk. As members began to notice that artists were sending NFTs to the Alien’s address to pay tribute and interact with it—it sparked an idea to create a DAO for the growing collection. An experiment in digital-first institution building, MUSE0 allows artists to submit works for consideration to add to the collection, then the members of the DAO vote to acquire the NFT. Once voted in, the work is transferred to the MUSE0 vault, and the artist receives a token to become a member of the DAO. The cycle repeats and a new, participatory institution is born for NFTs.
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            As Aaron Wright of MUSE0, said in an interview with Foundation:
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            “We’re hoping that through this model, we will be able to make better decisions as a collective, such as having more input from folks who will be able to identify and help us to collect works that will stand the test of time”
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            ObscuraDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            New on the scene, ObscuraDAO entered the chat to catalyze the possibilities for photographers by facilitating their projects and supporting them through the sale of NFTs. Led by Alejandro Cartagena, Cooper Ray, Emmy, and Tony Herrera, members of the DAO aim to enable photographers to create their dream projects through commissions, grants, leadership, and education. On the mission of ObscuraDAO, Alejandro Cartagena said:
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            Right now, they are establishing a fund to support photographers in pursuit of creative projects. Their first initiative is a debut collection on Foundation called Who We Are, which features 200 portraits taken by 100 photographers in the DAO.
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            UltraDAO is a group of artists and art collectors, working together to build a strong community through art and technology. Their core ethos is to support new ways to explore and experience art—by collecting NFTs with historic value, and releasing projects voted on by DAO members. Their enviable collection includes several works acquired on Foundation, including works from Yatreda`s Kingdoms of Ethiopia and Movement of the Ancestors, and a collaborative piece by IX Shells and Diana Sinclair, New Era Pending, debuted during The Digital Diaspora exhibition.
          </p>
        </div>

        <div className='mt-16'>
          <p className='text-gray-200 text-5xl'>
            PartyDAO
          </p>
          <p className='mt-12 text-gray-200 text-lg'>
            PartyDAO came together with the singular goal of building and launching PartyBid—a way for people to pool their ETH together to bid, collect, and own NFTs as a group.
            On the PartyBid site, anyone can form a party to try and collectively own an NFT on Foundation and beyond. If the party wins, all the contributors are granted a proportional amount of tokens that represent fractional ownership of the work. With PartyBid, 117 members of the BlitSquad party pooled together 33 ETH to win the auction for the Blitmap Collection NFT on Foundation. Parties have also come together to acquire works by Jen Stark, P1xelfool, Panther Modern, Felt Zine, and Jack Butcher. PartyBid is only the beginning of the first community-built tools that embrace collective ownership of digital goods made possible with NFTs.
          </p>
        </div>

        <div className='p-8 border-2 border-gray-600 flex items-center gap-x-8 rounded-lg mt-24'>
          <div>
            <Image src="/assets/images/logo.png" alt="" width={173} height={173} />
          </div>
          <div>
            <p className='text-gray-200 text-xl'>Reza</p>
            <p className='text-gray-200 text-xl mt-5'>Reza is the Co-Founder and Design Lead of Vault 3D</p>
          </div>
        </div>

        <div className='grid grid-cols-3 mt-12'>
          <div>
            <button className='text-gray-400 text-lg'>{'<'} Previous post</button>
            <p className='text-gray-200 text-xl mt-3'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....
            </p>
          </div>
          <div></div>
          <div>
            <div className='flex justify-end'>
              <button className='text-gray-400 text-lg'>Next post {'>'}</button>
            </div>
            <p className='text-gray-200 text-xl mt-3'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}