import { useRouter } from "next/router";


const upload = async (data: unknown): Promise<string> => {
  const serialized = JSON.stringify(data);
  
  const url = "lens url"
  const response = await fetch(url);
  const responseData = await response.text();
  
  return responseData;
}

const CreateLensPost = () => {
  


    const router = useRouter();
    const { imageUrl, imageName, collectionName, contractAddress, description, tokenType, name, numberOfClaims } = router.query;

    const handlePublishLens = async () => {
      console.log("sudd")
  }
    console.log(imageUrl, imageName, collectionName, contractAddress, description, tokenType)
    return (
        <div className="bg-white rounded-lg p-4 text-black h-screen flex flex-grow mt-8 pt-8">
            <div className="flex-row items-center justify-center">
                <h2 className="font-bold mb-2 text-red-500 text-xl">Publish on Lens - share your promotion with others!</h2>
                <h3 className="text-lg font-bold mb-2 text-green-500">Review your post:</h3>
                <span><p className="mb-2 text-green-500 font-bold inline-block">Promotion:</p> <p className="inline-block font-thin">{name}</p></span>
                <br />
                <span><p className="mb-2 text-green-500 font-bold inline-block">Description:</p> <p className="inline-block font-thin">{description}</p></span>
                <br />
                <span><p className="mb-2 text-green-500 font-bold inline-block">Number of clains:</p> <p className="inline-block font-thin">{numberOfClaims}</p></span>
                <br />
                <span><p className="mb-2 text-green-500 font-bold inline-block">Sismo group id:</p> <p className="inline-block font-thin">sismo group id</p></span>
                <div className="flex justify-end">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handlePublishLens}>Publish</button>
                </div>
            </div>
        </div>
      );
}

export default CreateLensPost;