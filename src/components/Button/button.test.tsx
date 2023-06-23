import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./button";
import renderer from "react-test-renderer";
import "jest-styled-components";

describe("Componente Btn all tests", () => {
  it("Should render a react Button componente as primary type", () => {
    const onClickFn = jest.fn();
    const eventMock = { preventDefault: jest.fn() };

    //Render tests
    render(<Button type="primary">Primary</Button>);
    const primaryBtn = screen.getByText(/Primary/i);
    expect(primaryBtn).toBeVisible();
    expect(primaryBtn).toHaveAttribute("type", "primary");
    expect(primaryBtn).toBeInTheDocument();

    //Styles tests
    const tree = renderer
      .create(
        <Button type="primary" test-id="1">
          Primary
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule("background", "#00bfff");
    expect(tree).toHaveStyleRule("opacity", "85%", { modifier: ":hover" });

    //Functional tests
    const clickedBtn = renderer.create(
      <Button type="primary" test-id="1" onClick={onClickFn}>
        Primary
      </Button>
    ).root;
    clickedBtn.props.onClick(eventMock);
    fireEvent.click(primaryBtn);
    expect(onClickFn).toBeCalled();
  });
});
