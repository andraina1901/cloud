import SoftAvatar from "components/SoftAvatar";
import SoftBox from "components/SoftBox";
import PropTypes from "prop-types";

function Photo({principal,z1,z2,z3}) {
    return(
        <SoftBox>
            {/* photo */}
            <SoftBox>
              {/* pricnipale */}
              <SoftAvatar  style={{width: '300px',height: '300px'}} src={principal} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            
              <SoftAvatar />
            </SoftBox>
            <SoftBox display="flex" mt={-3}>
              {/* zanany */}
              <SoftAvatar mr={-1}  style={{width: '100px',height: '100px'}} src={z1} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            
              <SoftAvatar />
              <SoftAvatar  style={{width: '100px',height: '100px'}} src={z2} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            
              <SoftAvatar />
              <SoftAvatar  style={{width: '100px',height: '100px'}} src={z3} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>
            
              <SoftAvatar />
            </SoftBox>
          </SoftBox>
    );
}

Photo.propTypes = {
    principal: PropTypes.string.isRequired,
    z1: PropTypes.string.isRequired,
    z2: PropTypes.string.isRequired,
    z3: PropTypes.string.isRequired,
}

export default Photo;