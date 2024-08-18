import React, { useState } from "react";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CButton,
  CCard,
  CCardBody,
  CRow,
  CCol,
  CContainer,
  CAlert
} from "@coreui/react";

const ChangePassword = () => {
  // Define a constant for the current password
  const CURRENT_PASSWORD = "OldPassword123";

  // State for form fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // State for error messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate current password
    if (currentPassword !== CURRENT_PASSWORD) {
      setError("Le mot de passe actuel est incorrect.");
      return;
    }

    // Validate new password match
    if (newPassword !== confirmNewPassword) {
      setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
      return;
    }

    // Successful password change
    setSuccess("Le mot de passe a été changé avec succès !");

    // Clear the form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
<CContainer className="mt-4 mb-5">
      <CRow className="justify-content-center">
        <CCol md="8" >
          <CCard className="mt-4">
            <CCardBody>
              <h5 className="mb-4">Change Password</h5>
              <CForm onSubmit={handleSubmit}>
                {/* Current Password */}
                <div className="mb-4">
                  
                  <CFormInput
                    type="password"
                    id="currentPassword"
                    placeholder="Mot de Passe Actuel"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                {/* New Password */}
                <div className="mb-4">
                 
                  <CFormInput
                    type="password"
                    id="newPassword"
                    placeholder="Nouveau Mot de Passe"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Confirm New Password */}
                <div className="mb-4">
                
                  <CFormInput
                    type="password"
                    id="confirmNewPassword"
                    placeholder="Confirmer le Nouveau Mot de Passe"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Error Message */}
                {error && <CAlert color="danger">{error}</CAlert>}

                {/* Success Message */}
                {success && <CAlert color="success">{success}</CAlert>}

                {/* Submit Button */}
                
            <CRow className="text-center">
              <CCol>
                <CButton color="primary" type="submit" className="mt-3 rounded-0 px-5">
                Change Password
                </CButton>
              </CCol>
            </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default ChangePassword;
