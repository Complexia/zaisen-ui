import UpcomingPromotions from "../components/upcomingPromotions";
import IndexContainer from '../components/indexContainer'
import MyNFTs from '../components/myNFTs'
import HotPromotions from '../components/hotPromotions'
import LatestSocials from '../components/latestSocials'
import { useSelector } from 'react-redux';

export default function Home() {

  let account: any = useSelector((state: any) => state.account.account);
  console.log(account)

  return (
    <main className="flex flex-col items-center justify-between h-full">
    <div className="flex flex-col items-center">
  
      <div className="w-full">
        <span className="text-black font-bold">My NFTs</span>
        <IndexContainer>
          <MyNFTs props={account=account}/> 
        </IndexContainer>
      </div>
  
      <div className="w-full">
      <span className="text-black font-bold">Upcoming promotions</span>
        <IndexContainer>
          <UpcomingPromotions />
        </IndexContainer>
      </div>
  
      <div className="w-full flex flex-wrap justify-between">
        <div className="w-1/2">
        <span className="text-black font-bold">Hot promos</span>
          <IndexContainer>
            <HotPromotions />
          </IndexContainer>
        </div>
        <div className="w-1/2">
        <span className="text-black font-bold">Latest socials</span>
          <IndexContainer>
            <LatestSocials />
          </IndexContainer>
          
        </div>
         
      </div>
  
    </div>
  </main> 
  )
}
