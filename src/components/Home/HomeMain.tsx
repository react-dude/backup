import { data } from "@/lib/data"
import Link from "next/link"

const Home = () => {
  return (
    <div className="py-5 px-4">
        <div className="my-0 mx-auto rounded-lg custom">
          <div className="p-[50px] max-w-[850px] flex flex-col gap-3">
            <h1 className="text-white text-[34px] font-[600] md:text-[46px]">Blockchain Rectification</h1>
            <p className="text-white">This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet discover decentralized solutions, seamless transactions, and a decentralized ecosystem. Join us in revolutionizing the way you interact with digital assets and decentralized applications.</p>
            <Link href='/syncwallets' className="bg-[#3772ff] text-center rounded-[20px] py-2 text-white w-[200px] mt-3">Connect Wallet</Link>
          </div>
        </div>
        <div>
          <img src="/bannerimage@3x-1.png" alt="image" className="h-auto w-full md:w-[400px]"/>
        </div>

        <div className="mt-3 flex flex-col justify-center">
          <h1 className="text-center text-white text-[36px]">Get Started Below.</h1>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row flex-wrap lg:pl-10">
            {data.map((item, index) => ( 
              <a href={item.url} key={index}>
                <div className="p-[24px] bg-[#ffffff0d] rounded-[10px] flex-grow-0 lg:w-[240px] flex items-center flex-col gap-3 hover:border-[1px] hover:border-[#01EEA0]">
                    <h4 className="text-[1.25rem] text-white font-[700]">{item.name}</h4>

                    <p className="text-[18px] font-[400] text-customGray-main text-center">{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Home