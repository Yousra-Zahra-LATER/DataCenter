import React, { memo, useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardSubtitle,
  CCardText,
  CListGroupItem,
  CRow,
  CCol,
  CCardHeader,
  CButton,
  CContainer,
  CFormInput,
  CCallout,
  CTab,
  CTabs,
  CTabList,
  CTabPanel,
  CTooltip,
  CLink,
  CTabContent,
  CTableBody,
  CTableHeaderCell,
  CTable,
  CTableRow,
} from '@coreui/react'
import './style.css';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import { CTableHead, CTableDataCell } from '@coreui/react'
const VPSOfferCard = memo(({ offer }) => {
  const isRecommended = offer.title === 'Recommended'

  return (
    <CCard
      className="shadow-lg transition-transform transform hover:scale-105 duration-300"
      style={
        isRecommended ? { borderColor: '#88D66C', borderWidth: '2px', borderStyle: 'solid' } : {}
      }
    >
      <CCardHeader
        className="flex items-center justify-center text-xl font-bold tracking-wider h-12"
        style={isRecommended ? { backgroundColor: '#88D66C', color: 'white' } : {}}
      >
        {isRecommended && offer.title}
      </CCardHeader>
      <CCardBody className="p-4">
        <CCardSubtitle className="text-lg font-semibold text-gray-700">
          {offer.subtitle}
        </CCardSubtitle>
        <CCardText className="mt-2 text-gray-600">{offer.description}</CCardText>
        <h3 className="text-green-600 font-bold text-2xl mt-2">{offer.discount}</h3>
        <h4 className="text-xl text-gray-800 font-semibold mt-2">{offer.price}</h4>
        <CCardText className="text-sm text-gray-500 mt-1">{offer.note}</CCardText>
        <CCardText className="text-sm text-gray-500 mt-1">{offer.renewPrice}</CCardText>
      </CCardBody>
      <CButton
        color="info"
        shape="rounded-0"
        className="m-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Select
      </CButton>
      <div className="p-4 border-t border-gray-200">
        {offer.specs.map((spec, specIndex) => (
          <CListGroupItem key={specIndex} className="d-flex align-items-center m-2">
            <FaCheckCircle className="text-green-500 mr-5" /> <span>{spec}</span>
          </CListGroupItem>
        ))}
      </div>
    </CCard>
  )
})

export default function VPSOffers() {
  const osOptions = [
    { logo: '🖥️', name: 'Ubuntu', version: '20.04 LTS' },
    { logo: '💻', name: 'CentOS', version: '8 Stream' },
    { logo: '🔒', name: 'Debian', version: '10 Buster' },
    { logo: '🖥️', name: 'Windows', version: 'Server 2019' },
  ]
  const offers = [
    {
      title: '',
      subtitle: 'Pack Bronze',
      description: 'More storage means more room to play',
      discount: 'Save 64%',
      price: '€59.99/mo*',
      renewPrice: 'Renews at €87.27/mo',
      specs: [
        '4 vCPU cores',
        '8 GB DDR5 RAM',
        '200GB NVMe Storage',
        'Unmetered bandwidth',
        'cPanel license fee included',
        '1 dedicated IP',
        'Free migration included',
      ],
      note: 'VAT not included',
    },
    {
      title: 'Recommended',
      subtitle: 'Pack Gold',
      description: 'More storage means more room to play',
      discount: 'Save 64%',
      price: '€59.99/mo*',
      renewPrice: 'Renews at €87.27/mo',
      specs: [
        '4 vCPU cores',
        '8 GB DDR5 RAM',
        '200GB NVMe Storage',
        'Unmetered bandwidth',
        'cPanel license fee included',
        '1 dedicated IP',
        'Free migration included',
      ],
      note: 'VAT not included',
    },
    {
      title: '',
      subtitle: 'Pack Silver',
      description: 'More storage means more room to play',
      discount: 'Save 64%',
      price: '€59.99/mo*',
      renewPrice: 'Renews at €87.27/mo',
      specs: [
        '4 vCPU cores',
        '8 GB DDR5 RAM',
        '200GB NVMe Storage',
        'Unmetered bandwidth',
        'cPanel license fee included',
        '1 dedicated IP',
        'Free migration included',
      ],
      note: 'VAT not included',
    },
  ]

  const [selectedLocation, setSelectedLocation] = useState(null)

  const dataCenter = [
    { name: 'Oran', coordinates: { top: '16.5%', left: '40%' } },
    { name: 'Constantine', coordinates: { top: '14%', left: '78%' } },
    { name: 'Alger', coordinates: { top: '12%', left: '57%' } },
  ]

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  const [selectedCPU, setSelectedCPU] = useState(null)
  const [selectedRAM, setSelectedRAM] = useState(null)
  const [selectedStorage, setSelectedStorage] = useState(null)
  const [totalPrice, setTotalPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const cpuOptions = [
    { id: 1, cores: '2 Cores', price: 10 },
    { id: 2, cores: '4 Cores', price: 20 },
    { id: 3, cores: '8 Cores', price: 40 },
  ]

  const ramOptions = [
    { id: 1, ram: '4 GB', price: 5 },
    { id: 2, ram: '8 GB', price: 10 },
    { id: 3, ram: '16 GB', price: 20 },
  ]

  const storageOptions = [
    { id: 1, storage: '100 GB NVme', price: 5 },
    { id: 2, storage: '250 GB NVme', price: 10 },
    { id: 3, storage: '500 GB NVme', price: 20 },
  ]

  // Fonction pour calculer le prix total en fonction des sélections
  useEffect(() => {
    const cpuPrice = selectedCPU ? cpuOptions.find((option) => option.id === selectedCPU).price : 0
    const ramPrice = selectedRAM ? ramOptions.find((option) => option.id === selectedRAM).price : 0
    const storagePrice = selectedStorage
      ? storageOptions.find((option) => option.id === selectedStorage).price
      : 0

    setTotalPrice((cpuPrice + ramPrice + storagePrice) * quantity)
  }, [selectedCPU, selectedRAM, selectedStorage, quantity])

  const handleSelectCPU = (id) => setSelectedCPU(id)
  const handleSelectRAM = (id) => setSelectedRAM(id)
  const handleSelectStorage = (id) => setSelectedStorage(id)

  const incrementQuantity = () => setQuantity((prevQty) => prevQty + 1)
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prevQty) => prevQty - 1)
  }

  return (
    <>
      <CContainer>
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Choose the right plan for your big plans
        </h2>
        <CRow className="justify-center text-center mx-auto">
          {offers.map((offer, index) => (
            <CCol lg="4" md="6" sm="6" className="mb-8" key={index}>
              <VPSOfferCard offer={offer} />
            </CCol>
          ))}
        </CRow>
      </CContainer>

      {/* Additional Info Section */}
      <CContainer className="my-8 ">
        <div className="flex flex-col lg:flex-row items-center text-black text-base font-semibold  shadow-lg  border-l-4 border-blue-500 ">
          <span className="m-3 text-center lg:text-left">
            We offer a variety of VPS configurations. Customize yours to fit your needs and get the
            best performance for your applications.
          </span>
        </div>
      </CContainer>
      <CContainer>
        <CCallout
          className="font-semibold text-gray-900 shadow-lg"
          color="info"
          style={{
            backgroundColor: '#F3F4F7',
            borderRadius: '0px',
            borderLeftColor: 'blue',
          }}
        >
          We offer a variety of VPS configurations. Customize yours to fit your needs and get the
          best performance for your applications.
        </CCallout>
      </CContainer>
      {/* Map and ISO Selection Section */}
      <CContainer className="mt-10 px-4 flex flex-col lg:flex-row gap-4">
        {/* Map Section */}
        <div className="relative lg:w-2/5 w-full mb-8 lg:mb-0">
          <h2 className="text-xl text-gray-700 mb-8">Choose Your VPS Location</h2>
          <img
            src="https://simplemaps.com/static/svg/country/dz/all/dz.svg"
            alt="Map"
            className="w-full h-auto"
          />
          {/* Location buttons */}
          {dataCenter.map((location, index) => (
            <CButton
              key={index}
              onClick={() => handleLocationSelect(location.name)}
              className={`absolute text-black font-semibold py-2 px-4 rounded ${
                selectedLocation === location.name ? 'bg-red-500' : 'bg-blue-500'
              }`}
              style={{
                top: location.coordinates.top,
                left: location.coordinates.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {location.name}
              {selectedLocation === location.name && (
                <FaMapMarkerAlt className="ml-2 text-red-500" />
              )}
            </CButton>
          ))}
          {selectedLocation && (
            <div className="text-center mt-4">
              <CButton color="info" className="w-full max-w-xs">
                You have selected {selectedLocation}
              </CButton>
            </div>
          )}
        </div>

        {/* Name server Section */}
        <div className="lg:w-3/5 w-full flex flex-col">
          <CCard
            className="flex flex-col p-7 shadow-lg border rounded-lg"
            style={{
              backgroundColor: '#F3F4F7',
            }}
          >
            <h2 className="text-xl text-gray-700 ">Server Name</h2>
            <CCardBody>
              <CFormInput
                id="server-name"
                placeholder="Enter server name"
                className="border-gray-300 rounded-lg px-4 py-2"
              />
            </CCardBody>
          </CCard>
        </div>
      </CContainer>
      {/* toute la partie précedente donctione normal et quand jajoute  cette partie le code ne fonctionne pas  */}
      <CContainer className="my-5 px-4">
        <h2 className="text-xl text-gray-700 mb-8">Choose Your VPS Configuration</h2>
        <CTabs activeItemKey={1}>
          <CTabList variant="underline">
            <CTab aria-controls="cpu-tab-pane" itemKey={1}>
              CPU
            </CTab>
            <CTab aria-controls="ram-tab-pane" itemKey={2}>
              RAM
            </CTab>
            <CTab aria-controls="storage-tab-pane" itemKey={3}>
              Storage
            </CTab>
          </CTabList>
          <CTabContent>
            <CTabPanel className="py-3" aria-labelledby="cpu-tab-pane" itemKey={1}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>CPU Cores</CTableHeaderCell>
                    <CTableHeaderCell>Price</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {cpuOptions.map((option) => (
                    <CTableRow
                      key={option.id}
                      active={selectedCPU === option.id}
                      onClick={() => handleSelectCPU(option.id)}
                      className={
                        selectedCPU === option.id ? 'table-active bg-primary text-white' : ''
                      }
                    >
                      <CTableDataCell>{option.cores}</CTableDataCell>
                      <CTableDataCell>${option.price}/month</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CTabPanel>
            <CTabPanel className="py-3" aria-labelledby="ram-tab-pane" itemKey={2}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>RAM</CTableHeaderCell>
                    <CTableHeaderCell>Price</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {ramOptions.map((option) => (
                    <CTableRow
                      key={option.id}
                      active={selectedRAM === option.id}
                      onClick={() => handleSelectRAM(option.id)}
                      className={
                        selectedRAM === option.id ? 'table-active bg-primary text-white' : ''
                      }
                    >
                      <CTableDataCell>{option.ram}</CTableDataCell>
                      <CTableDataCell>${option.price}/month</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CTabPanel>
            <CTabPanel className="py-3" aria-labelledby="storage-tab-pane" itemKey={3}>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Storage</CTableHeaderCell>
                    <CTableHeaderCell>Price</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {storageOptions.map((option) => (
                    <CTableRow
                      key={option.id}
                      active={selectedStorage === option.id}
                      onClick={() => handleSelectStorage(option.id)}
                      className={
                        selectedStorage === option.id ? 'table-active bg-primary text-white' : ''
                      }
                    >
                      <CTableDataCell>{option.storage}</CTableDataCell>
                      <CTableDataCell>${option.price}/month</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CTabPanel>
          </CTabContent>
        </CTabs>
      </CContainer>

      {/* Fixed bottom div with price counter and quantity */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-50 p-2 shadow-lg">
        <div className="flex justify-end items-center gap-16 ">
          <div className="flex items-center  ">
            <div>
              <h8>VPS Qty:</h8>
              <div className="flex items-center gap-2">
                <CButton onClick={decrementQuantity} color="secondary" disabled={quantity <= 1}>
                  -
                </CButton>
                <span>{quantity}</span>
                <CButton onClick={incrementQuantity} color="secondary">
                  +
                </CButton>
              </div>
            </div>
          </div>
          <div>
            <h4>Total Price: ${totalPrice}/month</h4>
          </div>
          <div className=" ">
            <button class="bg-lime-300 hover:bg-green-700  transition-colors duration-300 text-black px-5 py-2.5 text-nowrap">
              Order Now
            </button>
         
          </div>
        </div>
      </div>
    </>
  )
}
