import { useLoaderData } from "react-router-dom";

function CupcakeDetails() {
const CupDetail= useLoaderData();
console.info("ceci est",CupDetail)

  return (
     <div className="cupcake-container">
        <div className="cupcake">
          <div className={`accessory ${CupDetail.accessory}`} />
          <div className="cream">
            <div
              className="cream-1"
              style={{
                backgroundColor: CupDetail.color1,
              }}
            />
            <div
              className="cream-2"
              style={{
                backgroundColor: CupDetail.color2,
              }}
            />
            <div
              className="cream-3"
              style={{
                backgroundColor: CupDetail.color3,
              }}
            />
          </div>
          <div className="bottom">
            <div className="bottom-in">
              <div className="face">
                <div className="eyes">
                  <div className="left-eye" />
                  <div className="right-eye" />
                </div>
                <div className="mouth" />
              </div>
            </div>
          </div>
        </div>

        <div className="cupcake-name">{CupDetail.name}</div>
      </div>
  );
}

export default CupcakeDetails;
