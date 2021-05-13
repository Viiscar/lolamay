import React from 'react'
import styled from 'styled-components';

export default function Privacy() {
    window.scrollTo(0, 0);
    return (
        
        <Wrapper className= "row">
            <div className="left-block mx-auto col-lg-1"></div>
            <div className="mx-auto col-lg-11 col-sm-12 padding-top center-block">
                <h1>PRIVACY POLICY</h1>
                <h2>OVERVIEW</h2>
                <p>We respect your privacy and want to protect your personal information. To learn more, please read our Privacy Notice bellow.</p>
                <p>Alluance that operates at https://www.alluance.beauty informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.</p>
                <p>Alluance knows that you care how information about you is used and what we do with your personal information. We appreciate your trust and want you to feel confident in our services and security as it relates to your personal information.</p>
                <h2>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
                <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
                <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
                <h2>SECTION 2 - CONSENT</h2>
                <p>How do you get my consent?</p>
                <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
                <p>How do I withdraw my consent?</p>
                <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at info<span>@</span>alluance.beauty</p>
                <h2>SECTION 3 - DISCLOSURE</h2>
                <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
                <h2>SECTION 5 - THIRD-PARTY SERVICES</h2>
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
                <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                <p>Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
                <p>SECTION 6 - SECURITY</p>
                <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.</p>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                <h2>SECTION 8 - AGE OF CONSENT</h2>
                <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                <h2>SECTION 9 - CHANGES TO THIS PRIVACY POLICY</h2>
                <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
                <p>If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.</p>
                <h2>SECTION 10 - CONTACT INFORMATION</h2>
                <p>If you have any questions about this Privacy Policy, please contacts at info<span>@</span>alluance.beauty</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 1.7rem;
    .left-block{
        background-color: var(--mainRed);
    }
    h1,h2{
        padding: 1rem;
        text-align: center;
    }
    .center-block{
        text-align: justify;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 5rem;
    }
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.35rem;
    }
    @media only screen and (max-width: 767px) {
        .center-block{
            padding-left: 4rem;
            padding-right: 4rem;
        }
    }
    @media only screen and (max-width: 582px) {
        .center-block{
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
`