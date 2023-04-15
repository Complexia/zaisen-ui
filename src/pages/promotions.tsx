import { useState } from 'react';
import { getNFTDetails, getAllNftsOfAddress } from '../graphql/queries';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core"
import NftWindow from '../components/nftWindow';
import Link from 'next/link';

const AIRSTACK_ENDPOINT = process.env.AIRSTACK_ENDPOINT ? process.env.AIRSTACK_ENDPOINT : '';
const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY ? process.env.AIRSTACK_API_KEY : '';

console.log("hello", AIRSTACK_ENDPOINT);

// Initializing Client 🚀
const client = new ApolloClient({
    uri: AIRSTACK_ENDPOINT,
    cache: new InMemoryCache(),
    headers: { Authorization: AIRSTACK_API_KEY },
})

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [nftData, setNftData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const query = getNFTDetails(searchTerm, '', 10);

    setLoading(true);
    const response = await client.query({
        query,
        variables: {
            address: searchTerm,
        },
    })
    setNftData(response.data);
    setLoading(false);
    console.log(response);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center">
        <label className="text-black mb-1">
        Search specific NFT, collection, or select from popular ones
        </label>
        <div className="flex flex-col w-full">
        <div className="flex">
            <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            className="text-black border-2 border-gray-400 rounded-l px-2 py-1 flex-1"
            />
            <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-l-none rounded-r px-3 py-2"
            >
            Search
            </button>
        </div>
        {nftData.length == 0 ? (
            loading ? (
            
            <div className="nft-card">
                <h1 className="text-black font-bold">Loading...wait up!</h1>
                <p>-
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br> 
                </p>
            </div>
            ):(
            <div>
                <p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </p>
            </div>

            )
        ) : (
            <>
            <div className="nft-card">
            {(() => {
                let ipfsTag = nftData.TokenNfts.TokenNft[0].rawMetaData.image.split(
                "//"
                )[1];
                let imageUrl = `https://ipfs.io/ipfs/${ipfsTag}`;
    
                let params = {
                imageUrl: imageUrl,
                imageName: nftData.TokenNfts.TokenNft[0].imageName,
                collectionName: nftData.TokenNfts.TokenNft[0].metaData.name,
                contractAddress: searchTerm,
                description: nftData.TokenNfts.TokenNft[0].rawMetaData.description,
                tokenType: nftData.TokenNfts.TokenNft[0].tokenType,
                };
                return <NftWindow props={params} />;
            })()}
            </div>
            <div className="pb-2 mb-2">
                <Link href="/create-promotion">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                        Create Promo
                    </button>
                </Link>
            </div>
            </>
            
        )}
        </div>
    </div>
   

 
  );
}



const Promotions = () => {
    return (
        <div className="flex flex-grow justify-start items-start h-full">
            <SearchBox />
        </div>
    )
}

export default Promotions;