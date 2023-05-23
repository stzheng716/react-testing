import { render } from "@testing-library/react";
import Card from "./Card";

it("renders card without crashing", function () {
    render(
        <Card
            caption={"test caption"}
            src={"./testimg"}
            currNum={1}
            totalNum={3}
        />
    );
})

it("matches snapshot", function () {
    const { container } = render(
      <Card
        caption={"test caption"}
        src={"./testimg"}
        currNum={1}
        totalNum={3}
      />
    );
    expect(container).toMatchSnapshot();
});