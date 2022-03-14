import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function DisplayPage(props) {
  const { data } = props;

  return (
    <Card className="text-center">
      <Card.Header>Top 10 Crtypto Exchanges</Card.Header>
      <Card.Body>
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="center">Rank</th>
              <th className="align-left">Name</th>
              <th className="align-left">Country</th>
              <th className="align-left">URL</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((index) => (
              <tr key={data[index].id}>
                <td className="center">{data[index].trust_score_rank}</td>
                <td className="align-left">
                  <img style={{ width: "30px" }} src={data[index].image} />
                  <span style={{ marginLeft: "5px" }}>
                    <Link to={`/details/${data[index].id}`}>
                      {data[index].name}
                    </Link>
                  </span>
                </td>
                <td className="align-left">{data[index].country}</td>
                <td className="align-left">
                  <a href={data[index].url}>{data[index].url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default DisplayPage;
