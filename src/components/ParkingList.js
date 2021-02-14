import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Accordion, Card } from "react-bootstrap";
import "./ParkingList.css";

import getParkingSpots from "../app-logic/getParkingSpots";

const ParkingList = () => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  var sl = 1;
  useEffect(() => {
    const fetchParkingSpots = async () => {
      const data = await getParkingSpots();
      setParkingSpots(data.docs);
      setLoading(false);
    };
    fetchParkingSpots();
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <ScaleLoader
          color={"#282f5d"}
          height={100}
          width={5}
          radius={12}
          margin={3}
        />
      </div>
    );
  } else {
    return (
      <div className="ParkingList">
        <div className="container">
          <h2 className="mt-5 mb-5">All Parking Spots</h2>
          <table className="table table-default table-bordered table-hover table-color text-center">
            <thead>
              <th scope="col">#</th>
              <th scope="col">Location</th>
              <th scope="col">Available Spots</th>
              <th scope="col">Booking</th>
            </thead>
            <tbody>
              {parkingSpots.map((doc) => (
                <tr key={doc.id} className="col-md-4 mt-5">
                  <td>{sl++}</td>
                  <td>
                    <Accordion
                      style={{ background: "#7f8ff700", fontStyle: "bold" }}
                    >
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {doc.data().fullAddress}
                          {", Hourly Rate: "}
                          {doc.data().hourlyRate}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Maintainers Name: {doc.data().maintainerName},
                            Phone: {doc.data().maintainerPhone}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </td>

                  <td>{doc.data().availableSpots}</td>
                  <td>
                    <Link to={`/book-parking/${doc.id}`} className="title">
                      <button className="btn btn-outline-dark">Book now</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default ParkingList;
