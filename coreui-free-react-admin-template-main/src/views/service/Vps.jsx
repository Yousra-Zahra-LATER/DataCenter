import React from 'react';
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
  CBadge,
  CFormCheck
} from '@coreui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useState, memo } from 'react';

const VPSOfferCard = memo(({ offer }) => {
  const isRecommended = offer.title === 'Recommended';
  return (
    <CCard className={`shadow-lg transition-transform transform hover:scale-105 duration-300 ${isRecommended ? 'border-2 border-green-400' : ''}`}>
      <CCardHeader className={`text-xl font-bold text-center tracking-wider ${isRecommended ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        {isRecommended && <CBadge color="success" className="mr-2">Recommended</CBadge>}
      </CCardHeader>
      <CCardBody className="p-4">
        <CCardSubtitle className="text-lg font-semibold text-gray-700 mt-2">
          {offer.subtitle}
        </CCardSubtitle>
        <CCardText className="mt-2 text-gray-600">{offer.description}</CCardText>
        <h3 className="text-green-600 font-bold text-2xl mt-2">{offer.discount}</h3>
        <h4 className="text-xl text-gray-800 font-semibold mt-2">{offer.price}</h4>
        <CCardText className="text-sm text-gray-500 mt-1">{offer.note}</CCardText>
        <CCardText className="text-sm text-gray-500 mt-1">{offer.renewPrice}</CCardText>
      </CCardBody>
      <CButton color="info" shape="rounded-0" className="m-4 hover:bg-blue-600 transition-colors duration-300">
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
  );
});

const VPSCustomization = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    dataCenter: null,
    ram: null,
    storage: null,
    cpu: null,
    iso: null,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const options = {
    dataCenter: [
      { name: 'Paris, France', price: 5 },
      { name: 'New York, USA', price: 10 },
      { name: 'Tokyo, Japan', price: 15 },
    ],
    ram: [
      { name: '8 GB', price: 20 },
      { name: '16 GB', price: 40 },
      { name: '32 GB', price: 60 },
    ],
    storage: [
      { name: '200GB NVMe', price: 30 },
      { name: '500GB NVMe', price: 50 },
      { name: '1TB NVMe', price: 80 },
    ],
    cpu: [
      { name: '4 vCPU', price: 25 },
      { name: '8 vCPU', price: 50 },
      { name: '16 vCPU', price: 75 },
    ],
    iso: [
      { name: 'Ubuntu 20.04', price: 0 },
      { name: 'Debian 10', price: 0 },
      { name: 'Windows Server 2019', price: 15 },
    ],
  };

  const handleOptionChange = (category, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: option,
    }));

    const newTotal = Object.keys(selectedOptions).reduce((acc, key) => {
      return acc + (selectedOptions[key] ? selectedOptions[key].price : 0);
    }, option.price);

    setTotalPrice(newTotal);
  };

  return (
    <CContainer className="mt-10">
      <CRow>
        <CCol lg="8">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Customize Your VPS</h3>
          
          <CCard className="mb-4">
            <CCardHeader className="font-semibold bg-blue-900 text-white">Choose Data Center</CCardHeader>
            <CCardBody>
              {options.dataCenter.map((option, index) => (
                <CListGroupItem key={index}>
                  <CFormCheck
                    type="radio"
                    name="dataCenter"
                    label={`${option.name} (+€${option.price})`}
                    checked={selectedOptions.dataCenter === option}
                    onChange={() => handleOptionChange('dataCenter', option)}
                  />
                </CListGroupItem>
              ))}
            </CCardBody>
          </CCard>
          
          <CCard className="mb-4">
            <CCardHeader className="font-semibold bg-blue-900 text-white">Choose RAM</CCardHeader>
            <CCardBody>
              {options.ram.map((option, index) => (
                <CListGroupItem key={index}>
                  <CFormCheck
                    type="radio"
                    name="ram"
                    label={`${option.name} (+€${option.price})`}
                    checked={selectedOptions.ram === option}
                    onChange={() => handleOptionChange('ram', option)}
                  />
                </CListGroupItem>
              ))}
            </CCardBody>
          </CCard>
          
          <CCard className="mb-4">
            <CCardHeader className="font-semibold bg-blue-900 text-white">Choose Storage</CCardHeader>
            <CCardBody>
              {options.storage.map((option, index) => (
                <CListGroupItem key={index}>
                  <CFormCheck
                    type="radio"
                    name="storage"
                    label={`${option.name} (+€${option.price})`}
                    checked={selectedOptions.storage === option}
                    onChange={() => handleOptionChange('storage', option)}
                  />
                </CListGroupItem>
              ))}
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader className="font-semibold bg-blue-900 text-white">Choose CPU</CCardHeader>
            <CCardBody>
              {options.cpu.map((option, index) => (
                <CListGroupItem key={index}>
                  <CFormCheck
                    type="radio"
                    name="cpu"
                    label={`${option.name} (+€${option.price})`}
                    checked={selectedOptions.cpu === option}
                    onChange={() => handleOptionChange('cpu', option)}
                  />
                </CListGroupItem>
              ))}
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader className="font-semibold bg-blue-900 text-white">Choose ISO</CCardHeader>
            <CCardBody>
              {options.iso.map((option, index) => (
                <CListGroupItem key={index}>
                  <CFormCheck
                    type="radio"
                    name="iso"
                    label={`${option.name} (+€${option.price})`}
                    checked={selectedOptions.iso === option}
                    onChange={() => handleOptionChange('iso', option)}
                  />
                </CListGroupItem>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
        
        <CCol lg="4">
          <CCard className="shadow-lg sticky-top">
            <CCardHeader className="bg-blue-900 text-white font-semibold text-center">Order Summary</CCardHeader>
            <CCardBody>
              <h4 className="text-lg font-bold">Selected Options</h4>
              <ul className="list-none text-gray-700">
                {Object.keys(selectedOptions).map((key, index) => (
                  selectedOptions[key] && (
                    <li key={index} className="flex justify-between">
                      <span>{selectedOptions[key].name}</span>
                      <span>€{selectedOptions[key].price}</span>
                    </li>
                  )
                ))}
              </ul>
              <hr className="my-4" />
              <h3 className="text-2xl font-bold text-gray-800">Total: €{totalPrice}</h3>
            </CCardBody>
            <CButton color="success" className="m-4">
              Proceed to Checkout
            </CButton>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default function Vps() {
  const offers = [
    {
      title: '',
      subtitle: 'Enhanced NVMe 8',
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
      subtitle: 'Enhanced NVMe 8',
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
      subtitle: 'Enhanced NVMe 8',
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
  ];

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Choose the right plan for your big plans
      </h2>
      <CRow className="text-center px-10">
        {offers.map((offer, index) => (
          <CCol lg="4" md="6" sm="6" className="mb-8" key={index}>
            <VPSOfferCard offer={offer} />
          </CCol>
        ))}
      </CRow>
      <VPSCustomization />
    </>
  );
}
