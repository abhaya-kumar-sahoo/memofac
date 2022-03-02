import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticHome, useWindowSize } from "../components";
import "./Privacy.css";
const Privacy = () => {
  const size = useWindowSize();
  return (
    <StaticHome
      component={
        <div className="main-privacy">
          <h1 style={{ fontSize: size.width > 480 ? 50 : 35 }} className="main-text">Privacy Polices</h1>
          <Col
            className="privacy"
            style={{ fontSize: size.width > 480 ? 26 : 18 }}
          >
            <p>
              'Udit Dugar built the Memofac app as a Free app. This SERVICE is
              provided by Udit Dugar at no cost and is intended for use as is.
            </p>
            <p>
              This page is used to inform visitors regarding my policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use my Service.
            </p>
            <p>
              If you choose to use my Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that I collect is used for providing and improving the
              Service. I will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at Memofac unless
              otherwise defined in this Privacy Policy.
            </p>

            <h3>Information Collection and Use</h3>
            <p>
              For a better experience, while using our Service, I may require
              you to provide us with certain personally identifiable
              information, including but not limited to Username, Year of Birth,
              Gender, Contacts, Gallery, Mobile number.
            </p>
            <p>
              The app does use third-party services that may collect information
              used to identify you. Link to the privacy policy of third-party
              service providers used by the app
            </p>

            <p>
              Google Play Services <br />
              Google Analytics for Firebase <br /> Log Data
            </p>
            <p>
              I want to inform you that whenever you use my Service, in a case
              of an error in the app I collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service, the time and
              date of your use of the Service, and other statistics.
            </p>

            <h3>Service Providers</h3>
            <p>
              I may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <p>
              To facilitate our Service; <br />
              To provide the Service on our behalf;
              <br />
              To perform Service-related services; or <br />
              To assist us in analyzing how our Service is used.
              <br /> I want to inform users of this Service that these third
              parties have access to their Personal Information. The reason is
              to perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>

            <h3>Security</h3>
            <p>
              I value your trust in providing us your Personal Information, thus
              we are striving to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and I
              cannot guarantee its absolute security.
            </p>
            <h3>Links to Other Sites</h3>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by me. Therefore, I strongly
              advise you to review the Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>
            <h3>Children’s Privacy</h3>
            <h5>Changes to This Privacy Policy</h5>
            <p>
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <h3>Contact Us</h3>
            <p>
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at memofacapp@gmail.com.';
            </p>
          </Col>
        </div>
      }
    />
  );
};

export default Privacy;
