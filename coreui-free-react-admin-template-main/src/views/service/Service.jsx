import React from 'react';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CCardLink,
  CRow,
  CCol,
} from '@coreui/react';

export default function Service() {
  // Tableau contenant les données des cartes
  const cardData = [
    {
      title: 'Cloud',
      subtitle: 'Card subtitle 1',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Web Hosting',
      subtitle: 'Card subtitle 2',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Database',
      subtitle: 'Card subtitle 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      title: 'Database',
      subtitle: 'Card subtitle 3',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
  ];

  return (
    <>
      <h3 className="text-center">Deploy a New Instance</h3>
      <div className="container mt-5">
        <h5 className='mb-4 '>Choose a type</h5>
        <CRow>
          {cardData.map((card, index) => (
            <CCol xs={12} md={3} key={index}>
              <CCard className="mb-4 border-5 hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer">
                <CCardBody>
                  <CCardTitle>{card.title}</CCardTitle>
                  <CCardSubtitle className="mb-2 text-body-secondary">{card.subtitle}</CCardSubtitle>
                  <CCardText>{card.text}</CCardText>
                  <CCardLink href="#">Card link</CCardLink>
                  <CCardLink href="#">Another link</CCardLink>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </div>
    </>
  );
}
