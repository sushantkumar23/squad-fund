import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)
  const [walletAddress, setWalletAddress] = useState('0x052564eb0fd8b340803df55def89c25c432f43f4')
  const [fundName, setFundName] = useState('')
  const [nftContractAddress, setNftContractAddress] = useState('')
  const [maximumFundSize, setMaximumFundSize] = useState(1)
  const [minimumContributionAmount, setMinimumContributionAmount] = useState(0)
  const [maximumContributionAmount, setMaximumContributionAmount] = useState(1)
  const [fundSymbol, setFundSymbol] = useState('')

  const updateFundName = (event) => {
      setFundName(`${event.target.value}`)
  }

  const updateContractAddress = (event) => {
      console.log('Updating contract address')
      setNftContractAddress(`${event.target.value}`)
  }

  const updateMaximumFundSize = (event) => {
      setMaximumFundSize(`${event.target.value}`)
  }

  const updateMinimumContributionAmount = (event) => {
      setMinimumContributionAmount(`${event.target.value}`)
  }

  const updateMaximumContributionAmount = (event) => {
      setMaximumContributionAmount(`${event.target.value}`)
  }

  const updateFundSymbol = (event) => {
      setFundSymbol(`${event.target.value}`)
  }

  const createFund = async () => {
      console.log("Create fund clicked")
      if (nftContractAddress === '') {
          console.log('NftContractAddress cannot be empty')
        return
      }
      const contractUrl = `https://api.opensea.io/api/v1/asset_contract/${nftContractAddress}`
      let contractDetails
      try {
        const res = await fetch(contractUrl)
        if (res.status === 200) {
            contractDetails = await res.json()
            console.log(contractDetails)
        } else {
            console.log("Couldn't retrieve contract details")
        }
      }
      catch (err) {
          console.log(`Error: Couldn't fetch contract details: ${err}`)
      }

      // Now, check if this wallet address has a token from this ERC-721 contract
      const assetsUrl = `https://api.opensea.io/api/v1/collections?asset_owner=${walletAddress}&offset=0&limit=300`
      let ownsNft = false;
      try {
        const assetsRes = await fetch(contractDetails)
        const assets = await assetsRes.json()
        console.log('assets')
        assets.forEach(asset => {
            asset.primary_asset_contracts.forEach(contract => {
                if (contract.address === nftContractAddress){
                    ownsNft = true;
                }
            })
        })
      } catch (err) {
          console.log(`Error: Counldn't verify ownership of NFT: ${err}`)
      }
      if(ownsNft) {
          console.log("Wallet owns the NFT")
      } else {
          console.log("Wallet doesn't own the NFT!")
      }
  }

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Create Squad Fund</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Just provide us a few more details and you are good to go. All the currency fields take value only in <b>ETH</b> currently.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="fund-name" className="block text-sm font-medium text-gray-700">
                Fund Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="fund-name"
                  id="fund-name"
                  value={fundName}
                  onChange={updateFundName}
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="nft-contract-address" className="block text-sm font-medium text-gray-700">
                NFT contract address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nft-contract-address"
                  id="nft-contract-address"
                  autoComplete="nft-contract-address"
                  value={nftContractAddress}
                  onChange={updateContractAddress}
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="maximum-fund-size" className="block text-sm font-medium text-gray-700">
                Maximum Fund Size
              </label>
              <div className="mt-1">
                <input
                  id="maxiumum-fund-size"
                  name="maxium-fund-size"
                  type="text"
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="min-contribution-amount" className="block text-sm font-medium text-gray-700">
                Minimum contribution amount
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="min-contribution-amount"
                  id="min-contribution-amount"
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="max-contribution-amount" className="block text-sm font-medium text-gray-700">
              Maximum contribution amount
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="max-contribution-amount"
                  id="max-contribution-amount"
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fund-symbol" className="block text-sm font-medium text-gray-700">
                Fund Symbol
              </label>
              <div className="mt-1">
                <input
                  id="fund-symbol"
                  name="fund-symbol"
                  type="text"
                  className="py-3 px-4 block w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Fund purpose
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-indigo-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-500">
                    By selecting this, you agree to the{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-700 underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                onClick={createFund}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Squad fund
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
