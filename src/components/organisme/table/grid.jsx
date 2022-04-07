import { Grid } from "gridjs-react";
import { faker } from "@faker-js/faker";

// grid css
import "../../../style/module/penaCustoms/gridjs.scss";

function GridTable() {
  return (
    <div>
      <Grid
        data={Array(50)
          .fill()
          .map(() => [
            faker.name.findName(),
            faker.internet.email(),
            faker.name.firstName(),
          ])}
        columns={["Name", "Email", "Title"]}
        sort
        fixedHeader
        search
        resizable
        pagination={{
          enabled: true,
          limit: 20,
        }}
      />
    </div>
  );
}

export default GridTable;
