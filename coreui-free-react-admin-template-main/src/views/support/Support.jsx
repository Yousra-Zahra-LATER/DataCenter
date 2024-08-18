import React, { useState } from 'react';
import {
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CButton,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CContainer,
  CRow,
  CCol,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';

const Support = () => {
  const [tickets, setTickets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false); // Nouveau state pour le modal de confirmation
  const [subject, setSubject] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    subject: '',
    product: '',
    description: '',
  });
  const [ticketToDelete, setTicketToDelete] = useState(null); // Index du ticket à supprimer

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { subject: '', product: '', description: '' };

    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (!product.trim()) {
      newErrors.product = 'Product is required';
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSendTicket = () => {
    if (validateForm()) {
      setTickets([...tickets, { subject, lastReply: '', status: 'En cours de traitement' }]);
      setModalVisible(false);
      setSubject('');
      setProduct('');
      setDescription('');
      setErrors({ subject: '', product: '', description: '' });
    }
  };

  const confirmDeleteTicket = (index) => {
    setTicketToDelete(index);
    setConfirmationVisible(true);
  };

  const handleDeleteTicket = () => {
    const updatedTickets = tickets.filter((_, i) => i !== ticketToDelete);
    setTickets(updatedTickets);
    setConfirmationVisible(false);
    setTicketToDelete(null);
  };

  return (
    <CContainer className="mt-4">
      <CRow className="justify-content-between align-items-center mb-3">
        <CCol className="mb-4">
          <h2 style={{ fontSize: '22px' }}>Support Tickets</h2>
          <div style={{ width: '155px', height: '1px', backgroundColor: '#007bff', marginTop: '9px' }}></div>
        </CCol>
        <CCol className="text-end">
          <CButton style={{ color: '#007bff' }} onClick={handleOpenModal}>
            + Open Ticket
          </CButton>
        </CCol>
      </CRow>
      <CTable hover responsive  style={{ borderRadius: '0.5rem', overflow: 'hidden'}}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Subject</CTableHeaderCell>
            <CTableHeaderCell scope="col">Last Reply</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {tickets.length === 0 ? (
            <CTableRow>
              <CTableDataCell colSpan="4" className="text-center">
                No Tickets Found
              </CTableDataCell>
            </CTableRow>
          ) : (
            tickets.map((ticket, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{ticket.subject}</CTableDataCell>
                <CTableDataCell>{ticket.lastReply}</CTableDataCell>
                <CTableDataCell>{ticket.status}</CTableDataCell>
                <CTableDataCell>
                  <span
                    onClick={() => confirmDeleteTicket(index)}
                    style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}
                  >
                    <CIcon icon={cilTrash} />
                  </span>
                </CTableDataCell>
              </CTableRow>
            ))
          )}
        </CTableBody>
      </CTable>

      {/* Modal de confirmation */}
      <CModal visible={confirmationVisible} onClose={() => setConfirmationVisible(false)} backdrop="static">
        <CModalHeader>Confirmation</CModalHeader>
        <CModalBody>
          Êtes-vous sûr de vouloir supprimer ce ticket ?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setConfirmationVisible(false)}>Annuler</CButton>
          <CButton color="danger" onClick={handleDeleteTicket}>Supprimer</CButton>
        </CModalFooter>
      </CModal>

      {/* Modal d'ajout de ticket */}
      <CModal visible={modalVisible} onClose={() => setModalVisible(false)} backdrop="static">
        <CModalHeader>Open New Ticket</CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Ticket Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            invalid={!!errors.subject}
            feedback={errors.subject}
          />
          <CFormSelect
            label="Product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
            invalid={!!errors.product}
            feedback={errors.product}
          >
            <option>Select Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
          </CFormSelect>
          <CFormTextarea
            label="Problem Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            invalid={!!errors.description}
            feedback={errors.description}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>Cancel</CButton>
          <CButton color="primary" onClick={handleSendTicket}>Send Ticket</CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  );
};

export default Support;
