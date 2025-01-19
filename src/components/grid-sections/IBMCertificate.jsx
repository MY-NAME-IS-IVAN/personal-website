import CertificatePicture from '../../assets/IBMCertificate.jpg'

const IBMCertificate = () => {
  return (
    <a
      href='https://www.coursera.org/account/accomplishments/professional-cert/BO0FJWKT2XG3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof'
      target='_blank'
      className='grid-item grid-link ibm'
    >
      <div className='left'>
        <h2>IBM Full-Stack JavaScript Developer</h2>
        <p>&quot;They are prepared to take on the challenges of an entry-level full-stack developer role&quot;</p>
      </div>
      <div className='right'>
        <img src={CertificatePicture} alt="" />
      </div>
    </a>
  );
};

export default IBMCertificate;
