import { useState } from "react";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { request,setAuthHeader } from "helpers/axios_helper";
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [errorBorderColor, setErrorBorderColor] = useState("defaultBorderColor");

  const getBorderColor = () => {
    return email === "" || password === "" ? "" : errorBorderColor;
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    request("POST", "/login", {
      login: email,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log("Erreur de connexion");
        setErrorBorderColor("red"); 
        setAuthHeader(null);
      });
  };

  return (
    <CoverLayout
      title="Okaz"
      description="Bienvenue a vous dans l'application"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <form >
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Email
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: getBorderColor() }} 
            />
          </SoftBox>
          <SoftBox mb={2}>
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Mot de passe
              </SoftTypography>
            </SoftBox>
            <SoftInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: getBorderColor() }} 
            />

          </SoftBox>
          <SoftBox mt={4} mb={1}>
            <SoftButton type="submit" variant="gradient" color="info" fullWidth onClick={onSubmitLogin} >
              Login
            </SoftButton>
          </SoftBox>
        </form>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
