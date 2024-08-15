import React, { memo, useState } from 'react'
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
  CCardTitle,
  CListGroup,
} from '@coreui/react'
import { FaCheckCircle } from 'react-icons/fa'

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
    { name: 'Oran' },
    { name: 'Constantine' },
    { name: 'Alger' },
    { name: 'Ouargla' },
  ]

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }
  return (
    <>
      <CContainer>
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Choose the right plan for your big plans
        </h2>
        <CRow className="justify-center text-center mx-auto ">
          {offers.map((offer, index) => (
            <CCol lg="4" md="6" sm="6" className="mb-8 " key={index}>
              <VPSOfferCard offer={offer} />
            </CCol>
          ))}
        </CRow>
      </CContainer>

      <CContainer className="mt-10">
      <div className="flex items-center text-black text-lg font-bold my-10 shadow-lg h-12 border-l-4 border-blue-500 pl-5">
  <span className="m-5">You can Customize Your Own VPS</span>
</div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
          Choose Your VPS Location
        </h2>
        <CRow className="justify-center ">
          {dataCenter.map((location, index) => (
            <CCol lg="3" md="6" sm="6" className="mb-6" key={index}>
              <CCard
                className={`transition-transform transform  cursor-pointer shadow-md ${
                  selectedLocation === location.name ? 'border-4 border-red-500' : ''
                }`}
                onClick={() => handleLocationSelect(location.name)}
                style={{ backgroundColor: '' }}
              >
                <CCardBody className="text-center">
                  <CCardTitle className="text-base font-semibold">{location.name}</CCardTitle>
                  <CCardText className="text-gray-200">
                    {selectedLocation === location.name && (
                      <CBadge color="success" className="mt-2">
                        <FaCheckCircle className="mr-2" /> Selected
                      </CBadge>
                    )}
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </>
  )
}
