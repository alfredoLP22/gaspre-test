import { dataConnection } from "../config/db.js";

const getStations = (req, res) => {
  const parameter = req.query.parameter;
  console.log(parameter);
  const sqlQuery = `
    SELECT
      s.name AS Nombre,
      sc.distance AS Distancia,
      p.value AS Precio,
      b.name AS Marca
  FROM
      stations AS s
  LEFT JOIN
      stations_competitors AS sc ON sc.cre_id = s.cre_id
  LEFT JOIN
      stations_brands AS sb ON sb.cre_id = s.cre_id
  LEFT JOIN
      brands AS b ON b.id = sb.id_brand
  LEFT JOIN
      prices AS p ON p.cre_id = s.cre_id
WHERE s.cre_id = '${parameter}'
    `;

  dataConnection.query(sqlQuery, (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Error executing SQL query");
      return;
    }

    // Send the query results as a JSON response
    res.json(results);
  });
};

export { getStations };
