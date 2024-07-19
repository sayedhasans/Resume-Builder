import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";

const Resume = ({ result }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: `${result} Resume`,
      onAfterPrint: () => alert("Print Successful!"),
  });
  //...other function statements
  return (
      <>
          <button onClick={handlePrint}>Print Page</button>
          <main className='container' ref={componentRef}>
              {/*---other code statements---*/}
          </main>
      </>
  );
};
export default Resume;