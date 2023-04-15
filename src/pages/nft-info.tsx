import NftWindow from '../components/nftWindow';
import { useRouter } from 'next/router';

const NftInfo = () => {
    const router = useRouter();
    const { imageUrl, imageName, collectionName, contractAddress, description, tokenType } = router.query;

    let params = {
        imageUrl: imageUrl,
        imageName: imageName,
        collectionName: collectionName,
        contractAddress: contractAddress,
        description: description,
        tokenType: tokenType,
    }

    return (
        <>
        <NftWindow props={params}/>
        <div className="h-screen">
            <h1>NFT Info</h1>
            <p>Image URL: {imageUrl}</p>
            <p>Image Name: {imageName}</p>
            <p>Collection Name: {collectionName}</p>
            <p>Contract Address: {contractAddress}</p>
            <p>Description: {description}</p>
            <p>Token Type: {tokenType}</p>
        </div>
        </>
    );
}

export default NftInfo;