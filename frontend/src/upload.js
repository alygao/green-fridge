import React from "react";

function App() {
  return <UploadReceipt {...uploadReceiptData} />;
}

export default App;


function UploadReceipt(props) {
  const { uploadReceipt, logo, carrot, chooseAFile, submit } = props;

  return (
    <form className="upload-receipt" name="form2" action="form2" method="post">
      <div className="overlap-group">
        <h1 className="upload-receipt valign-text-middle border-class-1 montserrat-bold-copperfield-50px">
          {uploadReceipt}
        </h1>
        <div className="logo" style={{ backgroundImage: `url(${logo})` }}>
          <img className="carrot" src={carrot} />
        </div>
      </div>
      <a href="javascript:SubmitForm('form2')">
        <div className="upload-rec-ipt-button">
          <div className="choose-a-file valign-text-middle border-class-1 montserrat-bold-white-32px">
            {chooseAFile}
          </div>
        </div>
      </a>
      <a href="javascript:SubmitForm('form2')">
        <div className="upload-rec-ipt-button-1">
          <div className="submit valign-text-middle border-class-1 montserrat-bold-white-20px">{submit}</div>
        </div>
      </a>
    </form>
  );
}
const uploadReceiptData = {
    uploadReceipt: "Upload Receipt",
    logo: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/ellipse-1-1@2x.png",
    carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot-2@2x.png",
    chooseAFile: "choose a file",
    submit: "submit",
};

