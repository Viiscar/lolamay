import React from 'react'
import styled from 'styled-components';

export default function Shipping() {
    window.scrollTo(0, 0);
    return (
        
        <Wrapper className= "row">
            <div className="left-block mx-auto col-lg-1"></div>
            <div className="mx-auto col-lg-11 col-sm-12 padding-top center-block">
                <h1>SHIPPING & RETURNS</h1>
                <h2>Shipping Policy</h2>
                <p>All orders are processed within 2 to 7 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. </p>
                <p>Domestic Shipping Rates and Estimates</p>
                <p>For calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout. </p>
                <h3>Shipping Cost:</h3>
                <p>The shipping cost is $4.</p>
                <p>Free shipping for any order greater than $39.</p>
                <h3 hidden>Free pickup</h3>
                <p hidden>You can skip the shipping fees with free local pickup at [list the locations where in-store pickup is available]. After placing your order and selecting local pickup at checkout, your order will be prepared and ready for pick up within 2 to 3 business days. We will send you an email when your order is ready along with instructions.</p>
                <p hidden>Our in-store pickup hours from 10:00 am to 5:00 pm from Monday to Friday. Please have your order confirmation email with you when you come.</p>
                <h3>International Shipping</h3>
                <p>At this time, we do not offer international shipping. </p>
                <h3>How do I check the status of my order?</h3>
                <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available. </p>
                <p>If you haven’t received your order within X days of receiving your shipping confirmation email, please contact us at info<span>@</span>alluance.beauty with your name and order number, and we will look into it for you.</p>
                <h3>Important: </h3>
                <ul>
                    <li>Once your orders has been shipped, please contact your local post office if you have any complains or issues. Please understand that we do not hold responsible for any USPS issues.</li>
                    <li>Please make sure that your address is correct and verified before checking out. If your order is returned to us or is lost due to a bad address, you MUST repay for shipping to receive your order. Addresses that need to be updated must be updated prior to the order's shipment. Once a tracking number has been provided for your order, it is already in the mail. </li>
                    <li>Once your orders has been shipped, please contact your local post office if you have any complains or issues. Please understand that we do not hold responsible for any USPS issues.</li>
                    <li>We are not responsable for any stoles packages after it has been "Delivered".</li>
                </ul>
                <h2>Exchange Policy</h2>
                <p>Last updated: January 13, 2021</p>
                <p>Thank you for shopping at Alluance.</p>
                <p> We invite You to review our policy on exchanges. The following terms are applicable for any products that You purchased with Us.</p>
                <h3>Interpretation and Definitions  </h3>
                <h4>Interpretation</h4>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                <h4>Definitions</h4>
                <p>For the purposes of this Return and Exchange Policy:</p>
                <ul>
                    <li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Alluance.</li>
                    <li>Items refer to the items offered for sale on the Service.</li>
                    <li>Orders mean a request by You to purchase Goods from Us.</li>
                    <li>Service refers to the Website.</li>
                    <li>Website refers to Alluance, accessible from [www.alluance.com (http://www.alluance.com/)]</li>
                    <li>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                </ul>
                <h3>Conditions for Exchanges</h3>
                <p>We only replace items if they are defective or damaged after mail delivery. In order for the Items to be eligible for an exchange, please make sure that:</p>
                <ul>
                    <li>The Items were purchased in the last 7 days</li>
                    <li>The Items are unused and in the original packaging</li>
                </ul>
                <p>We offer You the option of exchanging the defective or damaged lipstick for the same lipstick or in a different shade. In order to qualify for an exchange, please send us an email at info<span>@</span>alluance.beauty. After your order was approved to receive an exchange, you may send the Goods to Us.</p>
                <p>Once we receive the Items purchased by mail, a new item will be sent to the original address provided. </p>
                <p>We reserve the right to refuse exchanges of any merchandise that does not meet the above exchange conditions in our sole discretion.</p>
                <p>Only regular priced Items may be exchanged. Unfortunately, Items on sale cannot be exchanged. </p>
                <h3>Returning Items</h3>
                <p>You are responsible for the cost and risk of returning the Items to Us. You should send the Items at the following address:</p>
                <p>San Juan PR</p>
                <p>We cannot be held responsible for Items lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Items or proof of received return delivery.</p>
                <h3>Contact Us  </h3>
                <p>If you have any questions about our Exchange Policy, please contact us:</p>
                <p>By email: info<span>@</span>alluance.beauty</p>
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
    h3{
        font-size: 1.9rem;
        font-weight: bold;
        padding: 0.5rem 0.5rem 0.5rem 0rem;
    }
    h4{
        font-size: 1.75rem;
        font-weight: bold;
        text-decoration: underline;
        padding: 0.5rem 0.5rem 0.5rem 0rem;

    }
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.35rem;
    }
    .center-block{
        text-align: justify;
        padding-left: 8rem;
        padding-right: 8rem;
        padding-top: 5rem;
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