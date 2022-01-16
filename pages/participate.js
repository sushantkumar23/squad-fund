const funds = [
    {
      name: 'Beach Party',
      role: 'CryptoPunks',
      purpose: 'The purpose of this fund is to organise get togethers on beach destination for the NFT owners',
      imageUrl:
        'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130',
      twitterUrl: '#',
      linkedinUrl: '#',
      size: '10 ETH',
      contributionRange: '0.2-1 ETH'
    },
    {
        name: 'Mountain Mansion',
        role: 'Bored Ape Yacht Club',
        purpose: 'The purpose of this fund is to buy mansions on the mountain get togethers for the NFT owners',
        imageUrl:
          'https://lh3.googleusercontent.com/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w300',
        twitterUrl: '#',
        linkedinUrl: '#',
        size: '50 ETH',
        contributionRange: '0.5-1.3 ETH'
      },
      {
        name: 'Web3 Investing',
        role: 'Doodles',
        purpose: 'Fund for investing in new upcoming web3 companies founded by Doodles NFT entrepreners',
        imageUrl:
          'https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s300',
        twitterUrl: '#',
        linkedinUrl: '#',
        size: '150 ETH',
        contributionRange: '2-3 ETH'
      },
      {
        name: 'Support Women',
        role: 'World of Women',
        purpose: 'Fund for supporting women-centric businesses being built by the NFT owners of the WoW!',
        imageUrl: 'https://lh3.googleusercontent.com/7rQxqp2cAN4J-pFJ6A22Ncb_tm2j6Lz61zXMi9bNJbmAk8PheVXcL4zVIZptVQ8_owbOJAiYuhSbn0vtjwcE4Jg7FQqDGwZTndd-_A=s200',
        twitterUrl: '#',
        linkedinUrl: '#',
        size: '120 ETH',
        contributionRange: '6-7 ETH'
      },
  ]
  
  export default function Participate() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Live Community Funds</h2>
              <p className="text-xl text-gray-500">
                These are the community funds that are currently live based on the NFT collections that you have in your wallet.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0"
            >
              {funds.map((fund) => (
                <div key={fund.name} className="rounded-lg bg-white overflow-hidden shadow-lg">
                <h2 className="sr-only" id="profile-overview-title">
                  Profile Overview
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="sm:flex sm:space-x-5">
                      <div className="flex-shrink-0">
                        <img className="mx-auto h-20 w-20 rounded-full" src={fund.imageUrl} alt="" />
                      </div>
                      <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-sm font-medium text-gray-600">{fund.role}</p>
                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{fund.name}</p>
                        <p className="text-sm font-medium text-gray-600">{fund.purpose}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex justify-center sm:mt-0">
                      <a
                        href="#"
                        className="flex justify-center items-center px-4 py-2 border border-purple-700 shadow-sm text-sm font-medium rounded-md text-gray-100 bg-purple-600 hover:bg-purple-700"
                      >
                        Contribute
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 grid-cols-2 sm:divide-y-0 sm:divide-x">
                  
                    <div className="px-6 py-5 text-sm font-medium text-center">
                      <span className="text-gray-900">Fund size: </span> <span className="text-gray-600">{fund.size}</span>
                    </div>
                    <div className="px-6 py-5 text-sm font-medium text-center">
                      <span className="text-gray-900">Contribution: </span> <span className="text-gray-600">{fund.contributionRange}</span>
                    </div>
                </div>
              </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  