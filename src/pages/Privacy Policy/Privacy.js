import React from "react";
import { Col } from "react-bootstrap";
import { StaticHome, useWindowSize } from "../components";
import "./Privacy.css";
export default function Privacy() {
  const size = useWindowSize();

  return (
    <StaticHome
      component={
        <div
          className="main-privacy"
         
        >
          <Col
            className="privacy"
            style={{height:size.height*0.8}}
          >
            <h1 style={{}} className="main-text">
              Privacy Polices
            </h1>
            <p>Memofac is a free app intended for use as is.</p>
            <p>
              This page is used to inform visitors regarding Memofac's policies
              with the collection, use, and disclosure of Personal Information
              if anyone decided to use Memofac's Service.
            </p>
            <p>
              If you choose to use Memofac's Service, then you agree to the
              collection and use of information in relation to this policy. The
              Personal Information that We collect is used for providing and
              improving the Service. We will not use or share your information
              with anyone except as described in this Privacy Policy.The terms
              used in this Privacy Policy have the same meanings as in our Terms
              and Conditions, which are accessible at Memofac unless otherwise
              defined in this Privacy Policy.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
              For a better experience, while using our Service, I may require
              you to provide us with certain personally identifiable
              information, including but not limited to Username, Year of Birth,
              Gender, Contacts, Gallery, Mobile number.
            </p>
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p>
              Link to the privacy policy of third-party service providers used
              by the app
            </p>
            <p>
              Google Play Services <br />
              Google Analytics for Firebase <br /> Log Data
            </p>
            <p>
              We want to inform you that whenever you use Memofac's Service, in
              a case of an error in the app we collect data and information
              (through third-party products) on your phone called Log Data. This
              Log Data may include information such as your device Internet
              Protocol ("IP") address, device name, operating system version,
              the configuration of the app when utilizing Memofac's Service, the
              time and date of your use of the Service, and other statistics.
            </p>

            <h2>Service Providers</h2>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <p>
              To facilitate our Service; <br />
              To provide the Service on our behalf;
              <br />
              To perform Service-related services; or <br />
              To assist us in analyzing how our Service is used.
              <br /> We want to inform users of this Service that these third
              parties have access to their Personal Information. The reason is
              to perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>

            <h2>Security</h2>
            <p>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>
            <h2>Links to Other Sites</h2>
            <p>
              Memofac app may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>
            <h2>Children’s Privacy</h2>
            <p>
              Services are not intended for or designed to attract anyone under
              the relevant age of consent to enter into binding legal contracts
              under the laws of their respective jurisdictions. Memofac does not
              intentionally or knowingly collect personal information through
              the Services from anyone under that age. We encourage parents and
              guardians to be involved in the online activities of their
              children to ensure that no personal information is collected from
              a child without their consent.
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p> This policy is effective as of 2022-01-03</p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at memofacapp@gmail.com. ;
            </p>
          </Col>
        </div>
      }
    />
  );
}
