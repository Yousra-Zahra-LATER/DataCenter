import React, { useState, useEffect } from 'react';
import {
  CContainer,
  CTab,
  CTabs,
  CTabList,
  CTabContent,
  CTabPanel,
  CTooltip,
  CLink,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react';

export default function VPC() {
  const [selectedCPU, setSelectedCPU] = useState(null);
  const [selectedRAM, setSelectedRAM] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const cpuOptions = [
    { id: 1, cores: '2 Cores', price: 10 },
    { id: 2, cores: '4 Cores', price: 20 },
    { id: 3, cores: '8 Cores', price: 40 },
  ];

  const ramOptions = [
    { id: 1, ram: '4 GB', price: 5 },
    { id: 2, ram: '8 GB', price: 10 },
    { id: 3, ram: '16 GB', price: 20 },
  ];

  const storageOptions = [
    { id: 1, storage: '100 GB', price: 5 },
    { id: 2, storage: '250 GB', price: 10 },
    { id: 3, storage: '500 GB', price: 20 },
  ];

  // Fonction pour calculer le prix total en fonction des sélections
  useEffect(() => {
    const cpuPrice = selectedCPU ? cpuOptions.find(option => option.id === selectedCPU).price : 0;
    const ramPrice = selectedRAM ? ramOptions.find(option => option.id === selectedRAM).price : 0;
    const storagePrice = selectedStorage ? storageOptions.find(option => option.id === selectedStorage).price : 0;

    setTotalPrice((cpuPrice + ramPrice + storagePrice) * quantity);
  }, [selectedCPU, selectedRAM, selectedStorage, quantity]);

  const handleSelectCPU = (id) => setSelectedCPU(id);
  const handleSelectRAM = (id) => setSelectedRAM(id);
  const handleSelectStorage = (id) => setSelectedStorage(id);

  const incrementQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prevQty => prevQty - 1);
  };

  return (
    <>
      <CContainer className="my-5 px-4">
        <h2 className="text-xl text-gray-700 mb-8">Choose Your VPS Configuration</h2>
        <CTabs activeItemKey={1}>
          <CTabList variant="underline">
            <CTooltip content="Tooltip text">
              <CLink>? </CLink>
            </CTooltip>
            <CTab aria-controls="cpu-tab-pane" itemKey={1}>CPU</CTab>
            <CTab aria-controls="ram-tab-pane" itemKey={2}>RAM</CTab>
            <CTab aria-controls="storage-tab-pane" itemKey={3}>Storage</CTab>
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
                      className={selectedCPU === option.id ? 'table-active bg-primary text-white' : ''}
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
                      className={selectedRAM === option.id ? 'table-active bg-primary text-white' : ''}
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
                      className={selectedStorage === option.id ? 'table-active bg-primary text-white' : ''}
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
      <div
        className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-lg"
      >
        
          <div className="flex justify-end items-center gap-16 ">
            <div className="flex items-center  ">
              <div>
                <h8>VPS Qty:</h8>
                <div className="flex items-center gap-2">
                  <CButton onClick={decrementQuantity} color="secondary" disabled={quantity <= 1}>-</CButton>
                  <span>{quantity}</span>
                  <CButton onClick={incrementQuantity} color="secondary">+</CButton>
                </div>
              </div>
            </div>
            <div>
            <h4>Total Price: ${totalPrice}/month</h4>
            </div>
            <div className=''>
             
              <CButton color="info" size="lg">
                Deploy
              </CButton>
            </div>
          </div>
      
      </div>
    </>
  );
}
